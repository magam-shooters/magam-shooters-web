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
          <h2 className="text-2xl font-sans font-bold text-gray-800">Gallery</h2>
          <p className="text-gray-500 text-sm font-sans mt-1">{items.length} image{items.length !== 1 ? 's' : ''}</p>
        </div>
        <button
          onClick={openCreate}
          className="bg-[#002B7F] text-white px-5 py-2.5 rounded-lg font-sans font-semibold text-sm hover:bg-[#001B5F] transition flex items-center gap-2"
        >
          <span className="text-lg leading-none">+</span> Add Image
        </button>
      </div>

      {/* Cards Grid - No gaps, image only, hover reveals title/subtitle and edit/delete */}
      {loading ? (
        <div className="py-20 text-center text-gray-400 font-sans">Loading...</div>
      ) : items.length === 0 ? (
        <div className="py-20 text-center text-gray-400 font-sans">No gallery images yet. Add your first one!</div>
      ) : (
        <div className="overflow-hidden">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-0">
            {items.map((item) => (
              <div 
                key={item._id} 
                className="group relative aspect-square overflow-hidden bg-gray-100"
              >
                {/* Image */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-start justify-start p-4">
                  {/* Title */}
                  <p className="font-sans font-semibold text-white text-sm text-center leading-tight mb-1 line-clamp-2">
                    {item.title}
                  </p>
                  {/* Subtitle */}
                  {item.subtitle && (
                    <p className="text-gray-300 font-sans text-xs text-center mb-4 line-clamp-2">
                      {item.subtitle}
                    </p>
                  )}
                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => openEdit(item)}
                      className="px-3 py-1.5 text-xs font-semibold bg-white text-gray-800 rounded hover:bg-gray-200 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => setDeleteId(item._id)}
                      className="px-3 py-1.5 text-xs font-semibold bg-[#FFD100] text-[#002B7F] rounded hover:bg-[#F0C500] transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Create / Edit Modal */}
      <Modal isOpen={modalOpen} title={editing ? 'Edit Gallery Image' : 'Add Gallery Image'} onClose={() => setModalOpen(false)}>
        <div className="space-y-4">
          <div>
            <label htmlFor="gallery-title" className="block text-sm font-semibold text-gray-700 mb-1 font-sans">Title *</label>
            <input
              id="gallery-title"
              className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#002B7F]"
              value={form.title}
              onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
              placeholder="e.g. National Championship 2026"
            />
          </div>
          <div>
            <label htmlFor="gallery-subtitle" className="block text-sm font-semibold text-gray-700 mb-1 font-sans">Subtitle</label>
            <input
              id="gallery-subtitle"
              className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#002B7F]"
              value={form.subtitle}
              onChange={e => setForm(f => ({ ...f, subtitle: e.target.value }))}
              placeholder="Short description (optional)"
            />
          </div>
          <div>
            <label htmlFor="gallery-date" className="block text-sm font-semibold text-gray-700 mb-1 font-sans">Date *</label>
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


