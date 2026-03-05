'use client';

import { useEffect, useState } from 'react';
import ConfirmDialog from '../components/ConfirmDialog';
import FileUpload from '../components/FileUpload';
import Modal from '../components/Modal';

interface Match {
  _id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  category: string;
  status: 'upcoming' | 'ongoing' | 'completed';
  description?: string;
  pdfUrl?: string;
  pdfKey?: string;
}

const empty: Omit<Match, '_id'> = {
  title: '',
  date: '',
  time: 'All Day',
  venue: '',
  category: '',
  status: 'upcoming',
  description: '',
  pdfUrl: '',
  pdfKey: '',
};

export default function AdminMatchesPage() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Match | null>(null);
  const [form, setForm] = useState<Omit<Match, '_id'>>(empty);
  const [saving, setSaving] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

  const load = async () => {
    setLoading(true);
    const res = await fetch('/api/matches');
    setMatches(await res.json());
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const openCreate = () => { setEditing(null); setForm(empty); setModalOpen(true); };
  const openEdit = (m: Match) => { setEditing(m); setForm({ title: m.title, date: m.date, time: m.time, venue: m.venue, category: m.category, status: m.status, description: m.description || '', pdfUrl: m.pdfUrl || '', pdfKey: m.pdfKey || '' }); setModalOpen(true); };

  const handleSave = async () => {
    setSaving(true);
    const url = editing ? `/api/matches/${editing._id}` : '/api/matches';
    const method = editing ? 'PUT' : 'POST';
    const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
    setSaving(false);
    if (res.ok) { setModalOpen(false); load(); }
    else { const e = await res.json(); alert(e.error); }
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    setDeleting(true);
    await fetch(`/api/matches/${deleteId}`, { method: 'DELETE' });
    setDeleting(false);
    setDeleteId(null);
    load();
  };

  const statusColors: Record<string, string> = {
    upcoming: 'bg-blue-100 text-blue-700',
    ongoing: 'bg-green-100 text-green-700',
    completed: 'bg-gray-100 text-gray-600',
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-montserrat font-bold text-gray-800">Upcoming Matches</h2>
          <p className="text-sm text-gray-500 font-sans">{matches.length} records</p>
        </div>
        <button onClick={openCreate} className="px-4 py-2 bg-[#002B7F] text-white rounded-lg font-semibold text-sm hover:bg-[#001B5F] transition">
          + Create Match
        </button>
      </div>

      {loading ? (
        <div className="text-center py-12 text-gray-400">Loading...</div>
      ) : (
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  {['Title', 'Date', 'Category', 'Venue', 'Status', 'PDF', 'Actions'].map(h => (
                    <th key={h} className="px-4 py-3 text-left font-montserrat font-semibold text-gray-600 text-xs uppercase">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {matches.length === 0 && (
                  <tr><td colSpan={7} className="text-center py-10 text-gray-400 font-sans">No matches found. Click "Create Match" to add one.</td></tr>
                )}
                {matches.map((m) => (
                  <tr key={m._id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-800 max-w-xs truncate">{m.title}</td>
                    <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{m.date}</td>
                    <td className="px-4 py-3"><span className="bg-[#002B7F]/10 text-[#002B7F] px-2 py-0.5 rounded-full text-xs font-semibold">{m.category}</span></td>
                    <td className="px-4 py-3 text-gray-600 max-w-xs truncate">{m.venue}</td>
                    <td className="px-4 py-3"><span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${statusColors[m.status]}`}>{m.status}</span></td>
                    <td className="px-4 py-3">
                      {m.pdfUrl ? <a href={m.pdfUrl} target="_blank" rel="noopener noreferrer" className="text-[#002B7F] underline text-xs">📄 View</a> : <span className="text-gray-400 text-xs">—</span>}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <button onClick={() => openEdit(m)} className="p-1.5 hover:bg-blue-50 rounded text-blue-600" title="Edit">✏️</button>
                        <button onClick={() => setDeleteId(m._id)} className="p-1.5 hover:bg-red-50 rounded text-red-500" title="Delete">🗑️</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Create/Edit Modal */}
      <Modal isOpen={modalOpen} title={editing ? 'Edit Match' : 'Create Match'} onClose={() => setModalOpen(false)} size="lg">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1 font-montserrat">Title *</label>
            <input className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#002B7F]" value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} placeholder="Match title" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1 font-montserrat">Date *</label>
              <input type="date" className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#002B7F]" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1 font-montserrat">Time</label>
              <input className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#002B7F]" value={form.time} onChange={e => setForm(f => ({ ...f, time: e.target.value }))} placeholder="All Day" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1 font-montserrat">Category *</label>
              <input className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#002B7F]" value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))} placeholder="e.g. Rifle/Pistol" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1 font-montserrat">Status</label>
              <select className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#002B7F]" value={form.status} onChange={e => setForm(f => ({ ...f, status: e.target.value as any }))}>
                <option value="upcoming">Upcoming</option>
                <option value="ongoing">Ongoing</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1 font-montserrat">Venue *</label>
            <input className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#002B7F]" value={form.venue} onChange={e => setForm(f => ({ ...f, venue: e.target.value }))} placeholder="Venue / location" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1 font-montserrat">Description</label>
            <textarea rows={3} className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#002B7F]" value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} placeholder="Optional description" />
          </div>
          <FileUpload
            label="Match PDF (Schedule / Brochure)"
            accept=".pdf,application/pdf"
            folder="matches/pdfs"
            currentUrl={form.pdfUrl}
            onUpload={(url, key) => setForm(f => ({ ...f, pdfUrl: url, pdfKey: key }))}
          />
          <div className="flex gap-3 pt-2">
            <button onClick={() => setModalOpen(false)} className="flex-1 py-2 border rounded-lg text-gray-600 hover:bg-gray-50 text-sm font-semibold">Cancel</button>
            <button onClick={handleSave} disabled={saving} className="flex-1 py-2 bg-[#002B7F] text-white rounded-lg text-sm font-semibold hover:bg-[#001B5F] transition disabled:opacity-60">
              {saving ? 'Saving...' : editing ? 'Update Match' : 'Create Match'}
            </button>
          </div>
        </div>
      </Modal>

      <ConfirmDialog
        isOpen={!!deleteId}
        message="Are you sure you want to delete this match? This action cannot be undone."
        onConfirm={handleDelete}
        onCancel={() => setDeleteId(null)}
        loading={deleting}
      />
    </div>
  );
}
