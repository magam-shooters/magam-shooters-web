import mongoose, { Document, Model, Schema } from 'mongoose';

export interface INews extends Document {
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  imageUrl?: string;
  imageKey?: string;
  category: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const NewsSchema = new Schema<INews>(
  {
    title: { type: String, required: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: String, required: true },
    author: { type: String, required: true },
    imageUrl: { type: String },
    imageKey: { type: String },
    category: { type: String, required: true },
    published: { type: Boolean, default: true },
  },
  { timestamps: true }
);

// Supports public/news listing and admin listing sorted by newest first.
NewsSchema.index({ published: 1, createdAt: -1 });
NewsSchema.index({ createdAt: -1 });

const News: Model<INews> =
  mongoose.models.News || mongoose.model<INews>('News', NewsSchema);

export default News;
