'use client';

import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import ConfirmDialog from '../components/ConfirmDialog';
import FileUpload from '../components/FileUpload';
import Modal from '../components/Modal';

interface NewsItem {
  _id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  imageUrl?: string;
  imageKey?: string;
  category: string;
  published: boolean;
}

const empty: Omit<NewsItem, '_id'> = {
  title: '', excerpt: '', content: '', date: new Date().toISOString().split('T')[0],
  author: 'NSSF Media Team', imageUrl: '', imageKey: '', category: '', published: true,
};

export default function AdminNewsPage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<NewsItem | null>(null);
  const [form, setForm] = useState<Omit<NewsItem, '_id'>>(empty);
  const [saving, setSaving] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

  const load = async () => {
    setLoading(true);
    const res = await fetch('/api/admin/news');
    setNews(await res.json());
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const openCreate = () => { setEditing(null); setForm({ ...empty, date: new Date().toISOString().split('T')[0] }); setModalOpen(true); };
  const openEdit = (n: NewsItem) => {
    setEditing(n);
    setForm({ title: n.title, excerpt: n.excerpt, content: n.content, date: n.date, author: n.author, imageUrl: n.imageUrl || '', imageKey: n.imageKey || '', category: n.category, published: n.published });
    setModalOpen(true);
  };

  const handleSave = async () => {
    setSaving(true);
    const url = editing ? `/api/news/${editing._id}` : '/api/news';
    const method = editing ? 'PUT' : 'POST';
    const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
    setSaving(false);
    if (res.ok) { setModalOpen(false); load(); }
    else { const e = await res.json(); alert(e.error); }
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    setDeleting(true);
    await fetch(`/api/news/${deleteId}`, { method: 'DELETE' });
    setDeleting(false);
    setDeleteId(null);
    load();
  };

  const togglePublished = async (item: NewsItem) => {
    await fetch(`/api/news/${item._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...item, published: !item.published }),
    });
    load();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-montserrat font-bold text-gray-800">News Articles</h2>
          <p className="text-sm text-gray-500">{news.length} articles ({news.filter(n => n.published).length} published)</p>
        </div>
        <button onClick={openCreate} className="px-4 py-2 bg-[#002B7F] text-white rounded-lg font-semibold text-sm hover:bg-[#001B5F] transition">
          + Create Article
        </button>
      </div>

      {loading ? <div className="text-center py-12 text-gray-400">Loading...</div> : (
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  {['Image', 'Title', 'Category', 'Author', 'Date', 'Status', 'Actions'].map(h => (
                    <th key={h} className="px-4 py-3 text-left font-montserrat font-semibold text-gray-600 text-xs uppercase">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {news.length === 0 && <tr><td colSpan={7} className="text-center py-10 text-gray-400">No articles found.</td></tr>}
                {news.map((n) => (
                  <tr key={n._id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      {n.imageUrl ? <img src={n.imageUrl} alt={n.title} className="w-14 h-10 object-cover rounded" /> : <div className="w-14 h-10 bg-gray-200 rounded flex items-center justify-center text-gray-400 text-xs">No img</div>}
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-800 max-w-xs truncate">{n.title}</td>
                    <td className="px-4 py-3"><span className="bg-red-100 text-red-700 px-2 py-0.5 rounded-full text-xs font-semibold">{n.category}</span></td>
                    <td className="px-4 py-3 text-gray-600">{n.author}</td>
                    <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{n.date}</td>
                    <td className="px-4 py-3">
                      <button onClick={() => togglePublished(n)} className={`px-2 py-0.5 rounded-full text-xs font-semibold cursor-pointer ${n.published ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                        {n.published ? 'Published' : 'Draft'}
                      </button>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <button onClick={() => openEdit(n)} className="p-1.5 hover:bg-gray-100 rounded" title="Edit"><FontAwesomeIcon icon={faPen} className="w-3.5 h-3.5" /></button>
                        <button onClick={() => setDeleteId(n._id)} className="p-1.5 hover:bg-gray-100 rounded" title="Delete"><FontAwesomeIcon icon={faTrash} className="w-3.5 h-3.5" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <Modal isOpen={modalOpen} title={editing ? 'Edit Article' : 'Create News Article'} onClose={() => setModalOpen(false)} size="xl">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1 font-montserrat">Title *</label>
            <input className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#002B7F]" value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} placeholder="Article headline" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1 font-montserrat">Category *</label>
              <input className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#002B7F]" value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))} placeholder="e.g. Championships" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1 font-montserrat">Author *</label>
              <input className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#002B7F]" value={form.author} onChange={e => setForm(f => ({ ...f, author: e.target.value }))} placeholder="Author name / department" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1 font-montserrat">Date *</label>
              <input type="date" className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#002B7F]" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} />
            </div>
            <div className="flex items-end pb-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={form.published} onChange={e => setForm(f => ({ ...f, published: e.target.checked }))} className="w-4 h-4 rounded" />
                <span className="text-sm font-semibold text-gray-700 font-montserrat">Published</span>
              </label>
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1 font-montserrat">Excerpt *</label>
            <textarea rows={2} className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#002B7F]" value={form.excerpt} onChange={e => setForm(f => ({ ...f, excerpt: e.target.value }))} placeholder="Short summary (shown on home page & list)" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1 font-montserrat">Content *</label>
            <textarea rows={6} className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#002B7F]" value={form.content} onChange={e => setForm(f => ({ ...f, content: e.target.value }))} placeholder="Full article content" />
          </div>
          <FileUpload label="Featured Image" accept="image/*" folder="news" currentUrl={form.imageUrl} onUpload={(url, key) => setForm(f => ({ ...f, imageUrl: url, imageKey: key }))} />
          <div className="flex gap-3 pt-2">
            <button onClick={() => setModalOpen(false)} className="flex-1 py-2 border rounded-lg text-gray-600 text-sm font-semibold">Cancel</button>
            <button onClick={handleSave} disabled={saving} className="flex-1 py-2 bg-[#002B7F] text-white rounded-lg text-sm font-semibold disabled:opacity-60">
              {saving ? 'Saving...' : editing ? 'Update Article' : 'Create Article'}
            </button>
          </div>
        </div>
      </Modal>

      <ConfirmDialog isOpen={!!deleteId} message="Delete this news article? This cannot be undone." onConfirm={handleDelete} onCancel={() => setDeleteId(null)} loading={deleting} />
    </div>
  );
}
