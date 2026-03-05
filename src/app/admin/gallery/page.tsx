'use client';

import { useEffect, useState } from 'react';
import ConfirmDialog from '../components/ConfirmDialog';
import FileUpload from '../components/FileUpload';
import Modal from '../components/Modal';

interface GalleryItem {
  _id: string;
  title: string;
  subtitle: string;
  date: string;
  imageUrl: string;
  imageKey: string;
}

const empty: Omit<GalleryItem, '_id'> = {
  title: '',
  subtitle: '',
  date: new Date().toISOString().split('T')[0],
  imageUrl: '',
  imageKey: '',
};

export default function AdminGalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<GalleryItem | null>(null);
  const [form, setForm] = useState<Omit<GalleryItem, '_id'>>(empty);
  const [saving, setSaving] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

  const load = async () => {
    setLoading(true);
    const res = await fetch('/api/gallery');
    setItems(await res.json());
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const openCreate = () => { setEditing(null); setForm({ ...empty, date: new Date().toISOString().split('T')[0] }); setModalOpen(true); };
  const openEdit = (item: GalleryItem) => {
    setEditing(item);
    setForm({ title: item.title, subtitle: item.subtitle, date: item.date, imageUrl: item.imageUrl, imageKey: item.imageKey });
    setModalOpen(true);
  };

  const handleSave = async () => {
    if (!form.title || !form.imageUrl) return alert('Title and image are required.');
    setSaving(true);
    const url = editing ? `/api/gallery/${editing._id}` : '/api/gallery';
    const method = editing ? 'PUT' : 'POST';
    const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
    setSaving(false);
    if (res.ok) { setModalOpen(false); load(); }
    else { const e = await res.json(); alert(e.error); }
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    setDeleting(true);
    await fetch(`/api/gallery/${deleteId}`, { method: 'DELETE' });
    setDeleting(false);
    setDeleteId(null);
    load();
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-montserrat font-bold text-gray-800">Gallery</h2>
          <p className="text-gray-500 text-sm font-sans mt-1">{items.length} image{items.length !== 1 ? 's' : ''}</p>
        </div>
        <button
          onClick={openCreate}
          className="bg-[#002B7F] text-white px-5 py-2.5 rounded-lg font-montserrat font-semibold text-sm hover:bg-[#001B5F] transition flex items-center gap-2"
        >
          <span className="text-lg leading-none">+</span> Add Image
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        {loading ? (
          <div className="py-20 text-center text-gray-400 font-sans">Loading...</div>
        ) : items.length === 0 ? (
          <div className="py-20 text-center text-gray-400 font-sans">No gallery images yet. Add your first one!</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-5 py-3 font-montserrat font-semibold text-gray-600 w-20">Image</th>
                  <th className="text-left px-5 py-3 font-montserrat font-semibold text-gray-600">Title</th>
                  <th className="text-left px-5 py-3 font-montserrat font-semibold text-gray-600 hidden md:table-cell">Subtitle</th>
                  <th className="text-left px-5 py-3 font-montserrat font-semibold text-gray-600 hidden sm:table-cell">Date</th>
                  <th className="text-right px-5 py-3 font-montserrat font-semibold text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {items.map((item) => (
                  <tr key={item._id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-3">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-14 h-10 object-cover rounded-lg border border-gray-200"
                      />
                    </td>
                    <td className="px-5 py-3">
                      <p className="font-montserrat font-semibold text-gray-800">{item.title}</p>
                    </td>
                    <td className="px-5 py-3 hidden md:table-cell text-gray-500 font-sans">{item.subtitle || '—'}</td>
                    <td className="px-5 py-3 hidden sm:table-cell text-gray-500 font-sans">{item.date}</td>
                    <td className="px-5 py-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => openEdit(item)}
                          className="px-3 py-1.5 text-xs font-semibold bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => setDeleteId(item._id)}
                          className="px-3 py-1.5 text-xs font-semibold bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Create / Edit Modal */}
      <Modal isOpen={modalOpen} title={editing ? 'Edit Gallery Image' : 'Add Gallery Image'} onClose={() => setModalOpen(false)}>
        <div className="space-y-4">
          <div>
            <label htmlFor="gallery-title" className="block text-sm font-semibold text-gray-700 mb-1 font-montserrat">Title *</label>
            <input
              id="gallery-title"
              className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#002B7F]"
              value={form.title}
              onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
              placeholder="e.g. National Championship 2026"
            />
          </div>
          <div>
            <label htmlFor="gallery-subtitle" className="block text-sm font-semibold text-gray-700 mb-1 font-montserrat">Subtitle</label>
            <input
              id="gallery-subtitle"
              className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#002B7F]"
              value={form.subtitle}
              onChange={e => setForm(f => ({ ...f, subtitle: e.target.value }))}
              placeholder="Short description (optional)"
            />
          </div>
          <div>
            <label htmlFor="gallery-date" className="block text-sm font-semibold text-gray-700 mb-1 font-montserrat">Date *</label>
            <input
              id="gallery-date"
              type="date"
              className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#002B7F]"
              value={form.date}
              onChange={e => setForm(f => ({ ...f, date: e.target.value }))}
            />
          </div>
          <FileUpload
            label="Gallery Image *"
            accept="image/*"
            folder="gallery"
            currentUrl={form.imageUrl}
            onUpload={(url, key) => setForm(f => ({ ...f, imageUrl: url, imageKey: key }))}
          />
          <div className="flex gap-3 pt-2">
            <button onClick={() => setModalOpen(false)} className="flex-1 py-2 border rounded-lg text-gray-600 hover:bg-gray-50 text-sm font-semibold">Cancel</button>
            <button onClick={handleSave} disabled={saving} className="flex-1 py-2 bg-[#002B7F] text-white rounded-lg text-sm font-semibold hover:bg-[#001B5F] transition disabled:opacity-60">
              {saving ? 'Saving...' : editing ? 'Update' : 'Add Image'}
            </button>
          </div>
        </div>
      </Modal>

      <ConfirmDialog
        isOpen={!!deleteId}
        message="Delete this gallery image? This cannot be undone."
        onConfirm={handleDelete}
        onCancel={() => setDeleteId(null)}
        loading={deleting}
      />
    </div>
  );
}
