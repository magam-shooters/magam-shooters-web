# RackNerd Deployment Setup

This project is set up to deploy to a RackNerd VPS using GitHub Actions, SCP, SSH, and PM2.

## What the workflow does

- Copies the repository files to your VPS
- Installs dependencies on the server
- Runs `npm run build` on the VPS
- Starts or reloads the app with PM2

The workflow file is [`.github/workflows/deploy-racknerd.yml`](.github/workflows/deploy-racknerd.yml).

## 1. Prepare the RackNerd server

Install the required packages on the VPS:

```bash
sudo apt update
sudo apt install -y git curl nginx
```

Install Node.js 20 and PM2. If you use `nvm`:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash
source ~/.bashrc
nvm install 20
nvm use 20
npm install -g pm2
```

## 2. Create the app directory

Choose a deployment path on the server, for example:

```bash
sudo mkdir -p /var/www/magam-shooters
sudo chown -R $USER:$USER /var/www/magam-shooters
```

This same path must be used in the GitHub secret `DEPLOY_PATH`.

## 3. Create the server environment file

The app reads environment variables from `.env.local` on the server.

Create `/var/www/magam-shooters/.env.local` and add your values:

```env
MONGODB_URI=your-mongodb-uri
NEXTAUTH_SECRET=your-nextauth-secret
NEXTAUTH_URL=https://your-domain.com

AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your-aws-key
AWS_SECRET_ACCESS_KEY=your-aws-secret
AWS_S3_BUCKET_NAME=your-bucket-name

ADMIN_EMAIL=admin@nssf.lk
ADMIN_PASSWORD=your-admin-password
```

Do not commit this file to GitHub.

## 4. Add GitHub repository secrets

Go to your repository settings and add these secrets:

| Secret | Description |
|---|---|
| `SSH_HOST` | VPS IP address or hostname |
| `SSH_USERNAME` | SSH user on the RackNerd server |
| `SSH_KEY` | Private SSH key allowed to connect to the server |
| `SSH_PORT` | SSH port, usually `22` |
| `DEPLOY_PATH` | Absolute path on the server, for example `/var/www/magam-shooters` |
| `APP_NAME` | PM2 process name, for example `magam-shooters` |
| `APP_PORT` | App port, usually `3000` |

## 5. Set up Nginx as a reverse proxy

Use Nginx to expose the app on port 80 or 443 and forward traffic to Next.js on port 3000.

Example config:

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable it and reload Nginx:

```bash
sudo ln -s /etc/nginx/sites-available/magam-shooters /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## 6. Initial server deployment

Before the first GitHub Actions run, make sure the server has the project files in the deployment path and the `.env.local` file exists.

Then push to `main` or run the workflow manually from the Actions tab.

## 7. Workflow behavior

On each deployment, the workflow:

1. Copies the repo to the VPS
2. Runs `npm ci`
3. Runs `npm run build`
4. Starts PM2 if it is not already running
5. Reloads PM2 if the app is already running

## 8. Useful commands on the server

Check PM2 status:

```bash
pm2 list
```

View logs:

```bash
pm2 logs magam-shooters
```

Restart the app manually:

```bash
cd /var/www/magam-shooters
pm2 restart magam-shooters --update-env
```

## 9. Notes

- Keep only one deploy workflow active for this app.
- If you no longer want S3 deployment, remove the old workflow file and use the RackNerd workflow only.
- If your server uses a different app path, update `DEPLOY_PATH` and the Nginx config.
