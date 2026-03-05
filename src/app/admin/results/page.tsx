'use client';

import { useEffect, useState } from 'react';
import ConfirmDialog from '../components/ConfirmDialog';
import Modal from '../components/Modal';

interface CompetitionResult {
  _id: string;
  competition: string;
  date: string;
  location: string;
  category: string;
  winners: { gold: string; silver: string; bronze: string };
}

const empty: Omit<CompetitionResult, '_id'> = {
  competition: '', date: '', location: '', category: '',
  winners: { gold: '', silver: '', bronze: '' },
};

export default function AdminResultsPage() {
  const [results, setResults] = useState<CompetitionResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<CompetitionResult | null>(null);
  const [form, setForm] = useState<Omit<CompetitionResult, '_id'>>(empty);
  const [saving, setSaving] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

  const load = async () => {
    setLoading(true);
    const res = await fetch('/api/results');
    setResults(await res.json());
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const openCreate = () => { setEditing(null); setForm(empty); setModalOpen(true); };
  const openEdit = (r: CompetitionResult) => {
    setEditing(r);
    setForm({ competition: r.competition, date: r.date, location: r.location, category: r.category, winners: { ...r.winners } });
    setModalOpen(true);
  };

  const handleSave = async () => {
    setSaving(true);
    const url = editing ? `/api/results/${editing._id}` : '/api/results';
    const method = editing ? 'PUT' : 'POST';
    const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
    setSaving(false);
    if (res.ok) { setModalOpen(false); load(); }
    else { const e = await res.json(); alert(e.error); }
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    setDeleting(true);
    await fetch(`/api/results/${deleteId}`, { method: 'DELETE' });
    setDeleting(false);
    setDeleteId(null);
    load();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-montserrat font-bold text-gray-800">Competition Results</h2>
          <p className="text-sm text-gray-500">{results.length} results</p>
        </div>
        <button onClick={openCreate} className="px-4 py-2 bg-[#002B7F] text-white rounded-lg font-semibold text-sm hover:bg-[#001B5F] transition">
          + Add Result
        </button>
      </div>

      {loading ? <div className="text-center py-12 text-gray-400">Loading...</div> : (
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  {['Competition', 'Category', 'Date', 'Location', '🥇 Gold', '🥈 Silver', '🥉 Bronze', 'Actions'].map(h => (
                    <th key={h} className="px-4 py-3 text-left font-montserrat font-semibold text-gray-600 text-xs uppercase">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {results.length === 0 && <tr><td colSpan={8} className="text-center py-10 text-gray-400">No results found.</td></tr>}
                {results.map((r) => (
                  <tr key={r._id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-800 max-w-xs truncate">{r.competition}</td>
                    <td className="px-4 py-3"><span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full text-xs font-semibold">{r.category}</span></td>
                    <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{r.date}</td>
                    <td className="px-4 py-3 text-gray-600 max-w-xs truncate">{r.location}</td>
                    <td className="px-4 py-3 text-gray-700">{r.winners.gold}</td>
                    <td className="px-4 py-3 text-gray-700">{r.winners.silver}</td>
                    <td className="px-4 py-3 text-gray-700">{r.winners.bronze}</td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <button onClick={() => openEdit(r)} className="p-1.5 hover:bg-blue-50 rounded text-blue-600">✏️</button>
                        <button onClick={() => setDeleteId(r._id)} className="p-1.5 hover:bg-red-50 rounded text-red-500">🗑️</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <Modal isOpen={modalOpen} title={editing ? 'Edit Result' : 'Add Competition Result'} onClose={() => setModalOpen(false)} size="lg">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1 font-montserrat">Competition Name *</label>
            <input className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#002B7F]" value={form.competition} onChange={e => setForm(f => ({ ...f, competition: e.target.value }))} placeholder="e.g. NSSF-SL Open Rifle Championship 2026" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1 font-montserrat">Category *</label>
              <input className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#002B7F]" value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))} placeholder="e.g. 10m Air Rifle" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1 font-montserrat">Date *</label>
              <input className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#002B7F]" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} placeholder="e.g. February 18, 2026" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1 font-montserrat">Location *</label>
            <input className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#002B7F]" value={form.location} onChange={e => setForm(f => ({ ...f, location: e.target.value }))} placeholder="Venue, City" />
          </div>
          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 space-y-3">
            <p className="text-sm font-semibold text-gray-700 font-montserrat">Medalists</p>
            <div>
              <label className="block text-xs text-gray-600 mb-1">🥇 Gold Medalist *</label>
              <input className="w-full px-3 py-2 border rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#002B7F]" value={form.winners.gold} onChange={e => setForm(f => ({ ...f, winners: { ...f.winners, gold: e.target.value } }))} placeholder="Athlete name" />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">🥈 Silver Medalist *</label>
              <input className="w-full px-3 py-2 border rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#002B7F]" value={form.winners.silver} onChange={e => setForm(f => ({ ...f, winners: { ...f.winners, silver: e.target.value } }))} placeholder="Athlete name" />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">🥉 Bronze Medalist *</label>
              <input className="w-full px-3 py-2 border rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#002B7F]" value={form.winners.bronze} onChange={e => setForm(f => ({ ...f, winners: { ...f.winners, bronze: e.target.value } }))} placeholder="Athlete name" />
            </div>
          </div>
          <div className="flex gap-3 pt-2">
            <button onClick={() => setModalOpen(false)} className="flex-1 py-2 border rounded-lg text-gray-600 text-sm font-semibold">Cancel</button>
            <button onClick={handleSave} disabled={saving} className="flex-1 py-2 bg-[#002B7F] text-white rounded-lg text-sm font-semibold disabled:opacity-60">
              {saving ? 'Saving...' : editing ? 'Update' : 'Add Result'}
            </button>
          </div>
        </div>
      </Modal>

      <ConfirmDialog isOpen={!!deleteId} message="Delete this competition result?" onConfirm={handleDelete} onCancel={() => setDeleteId(null)} loading={deleting} />
    </div>
  );
}
