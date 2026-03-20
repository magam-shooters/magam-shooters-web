'use client';

import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import ConfirmDialog from '../components/ConfirmDialog';
import FileUpload from '../components/FileUpload';
import Modal from '../components/Modal';

interface Program {
  _id: string;
  title: string;
  excerpt: string;
  duration: string;
  participants: string;
  imageUrl?: string;
  imageKey?: string;
  category: string;
}

const empty: Omit<Program, '_id'> = { title: '', excerpt: '', duration: '', participants: '', imageUrl: '', imageKey: '', category: '' };

export default function AdminTrainingPage() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Program | null>(null);
  const [form, setForm] = useState<Omit<Program, '_id'>>(empty);
  const [saving, setSaving] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

  const load = async () => {
    setLoading(true);
    const res = await fetch('/api/training');
    setPrograms(await res.json());
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const openCreate = () => { setEditing(null); setForm(empty); setModalOpen(true); };
  const openEdit = (p: Program) => {
    setEditing(p);
    setForm({ title: p.title, excerpt: p.excerpt, duration: p.duration, participants: p.participants, imageUrl: p.imageUrl || '', imageKey: p.imageKey || '', category: p.category });
    setModalOpen(true);
  };

  const handleSave = async () => {
    setSaving(true);
    const url = editing ? `/api/training/${editing._id}` : '/api/training';
    const method = editing ? 'PUT' : 'POST';
    const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
    setSaving(false);
    if (res.ok) { setModalOpen(false); load(); }
    else { const e = await res.json(); alert(e.error); }
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    setDeleting(true);
    await fetch(`/api/training/${deleteId}`, { method: 'DELETE' });
    setDeleting(false);
    setDeleteId(null);
    load();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-montserrat font-bold text-gray-800">Training Programs</h2>
          <p className="text-sm text-gray-500">{programs.length} programs</p>
        </div>
        <button onClick={openCreate} className="px-4 py-2 bg-[#002B7F] text-white rounded-lg font-semibold text-sm hover:bg-[#001B5F] transition">
          + Add Program
        </button>
      </div>

      {loading ? <div className="text-center py-12 text-gray-400">Loading...</div> : (
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  {['Image', 'Title', 'Category', 'Duration', 'Participants', 'Actions'].map(h => (
                    <th key={h} className="px-4 py-3 text-left font-montserrat font-semibold text-gray-600 text-xs uppercase">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {programs.length === 0 && <tr><td colSpan={6} className="text-center py-10 text-gray-400">No programs found.</td></tr>}
                {programs.map((p) => (
                  <tr key={p._id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      {p.imageUrl ? <img src={p.imageUrl} alt={p.title} className="w-14 h-10 object-cover rounded" /> : <div className="w-14 h-10 bg-gray-200 rounded flex items-center justify-center text-gray-400 text-xs">No img</div>}
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-800 max-w-xs truncate">{p.title}</td>
                    <td className="px-4 py-3"><span className="bg-[#FFF7CC] text-[#002B7F] border border-[#FFD100] px-2 py-0.5 rounded-full text-xs font-semibold">{p.category}</span></td>
                    <td className="px-4 py-3 text-gray-600">{p.duration}</td>
                    <td className="px-4 py-3 text-gray-600">{p.participants}</td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <button onClick={() => openEdit(p)} className="p-1.5 hover:bg-gray-100 rounded" title="Edit"><FontAwesomeIcon icon={faPen} className="w-3.5 h-3.5" /></button>
                        <button onClick={() => setDeleteId(p._id)} className="p-1.5 hover:bg-gray-100 rounded" title="Delete"><FontAwesomeIcon icon={faTrash} className="w-3.5 h-3.5" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <Modal isOpen={modalOpen} title={editing ? 'Edit Training Program' : 'Add Training Program'} onClose={() => setModalOpen(false)} size="lg">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1 font-montserrat">Title *</label>
            <input className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#002B7F]" value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} placeholder="Program title" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1 font-montserrat">Category *</label>
            <input className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#002B7F]" value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))} placeholder="e.g. Rifle, Pistol, Youth" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1 font-montserrat">Excerpt / Description *</label>
            <textarea rows={3} className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#002B7F]" value={form.excerpt} onChange={e => setForm(f => ({ ...f, excerpt: e.target.value }))} placeholder="Short description" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1 font-montserrat">Duration *</label>
              <input className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#002B7F]" value={form.duration} onChange={e => setForm(f => ({ ...f, duration: e.target.value }))} placeholder="e.g. 8 Weeks" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1 font-montserrat">Participants *</label>
              <input className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#002B7F]" value={form.participants} onChange={e => setForm(f => ({ ...f, participants: e.target.value }))} placeholder="e.g. 15-20 Students" />
            </div>
          </div>
          <FileUpload label="Program Image" accept="image/*" folder="training" currentUrl={form.imageUrl} onUpload={(url, key) => setForm(f => ({ ...f, imageUrl: url, imageKey: key }))} />
          <div className="flex gap-3 pt-2">
            <button onClick={() => setModalOpen(false)} className="flex-1 py-2 border rounded-lg text-gray-600 text-sm font-semibold">Cancel</button>
            <button onClick={handleSave} disabled={saving} className="flex-1 py-2 bg-[#002B7F] text-white rounded-lg text-sm font-semibold disabled:opacity-60">
              {saving ? 'Saving...' : editing ? 'Update' : 'Add Program'}
            </button>
          </div>
        </div>
      </Modal>

      <ConfirmDialog isOpen={!!deleteId} message="Delete this training program?" onConfirm={handleDelete} onCancel={() => setDeleteId(null)} loading={deleting} />
    </div>
  );
}
