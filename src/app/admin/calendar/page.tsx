'use client';

import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import ConfirmDialog from '../components/ConfirmDialog';
import Modal from '../components/Modal';

const MONTHS = ['JANUARY','FEBRUARY','MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER'];

interface CalendarEvent {
  _id: string;
  dateRange: string;
  title: string;
  location: string;
  month: string;
  year: number;
}

const empty: Omit<CalendarEvent, '_id'> = { dateRange: '', title: '', location: '', month: 'JANUARY', year: 2026 };

export default function AdminCalendarPage() {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<CalendarEvent | null>(null);
  const [form, setForm] = useState<Omit<CalendarEvent, '_id'>>(empty);
  const [saving, setSaving] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [filterMonth, setFilterMonth] = useState('ALL');

  const load = async () => {
    setLoading(true);
    const res = await fetch('/api/calendar');
    setEvents(await res.json());
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const openCreate = () => { setEditing(null); setForm(empty); setModalOpen(true); };
  const openEdit = (e: CalendarEvent) => { setEditing(e); setForm({ dateRange: e.dateRange, title: e.title, location: e.location, month: e.month, year: e.year }); setModalOpen(true); };

  const handleSave = async () => {
    setSaving(true);
    const url = editing ? `/api/calendar/${editing._id}` : '/api/calendar';
    const method = editing ? 'PUT' : 'POST';
    const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
    setSaving(false);
    if (res.ok) { setModalOpen(false); load(); }
    else { const e = await res.json(); alert(e.error); }
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    setDeleting(true);
    await fetch(`/api/calendar/${deleteId}`, { method: 'DELETE' });
    setDeleting(false);
    setDeleteId(null);
    load();
  };

  const filtered = filterMonth === 'ALL' ? events : events.filter(e => e.month === filterMonth);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-montserrat font-bold text-gray-800">International Calendar 2026</h2>
          <p className="text-sm text-gray-500 font-sans">{events.length} events total</p>
        </div>
        <button onClick={openCreate} className="px-4 py-2 bg-[#002B7F] text-white rounded-lg font-semibold text-sm hover:bg-[#001B5F] transition">
          + Add Event
        </button>
      </div>

      <div className="mb-4">
        <select className="px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#002B7F]" value={filterMonth} onChange={e => setFilterMonth(e.target.value)}>
          <option value="ALL">All Months</option>
          {MONTHS.map(m => <option key={m} value={m}>{m}</option>)}
        </select>
      </div>

      {loading ? <div className="text-center py-12 text-gray-400">Loading...</div> : (
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  {['Month', 'Date Range', 'Title', 'Location', 'Year', 'Actions'].map(h => (
                    <th key={h} className="px-4 py-3 text-left font-montserrat font-semibold text-gray-600 text-xs uppercase">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filtered.length === 0 && (
                  <tr><td colSpan={6} className="text-center py-10 text-gray-400">No events found.</td></tr>
                )}
                {filtered.map((e) => (
                  <tr key={e._id} className="hover:bg-gray-50">
                    <td className="px-4 py-3"><span className="bg-[#E6F0FF] text-[#002B7F] border border-[#BBD2FF] px-2 py-0.5 rounded-full text-xs font-semibold">{e.month}</span></td>
                    <td className="px-4 py-3 text-gray-700 whitespace-nowrap">{e.dateRange}</td>
                    <td className="px-4 py-3 text-gray-800 font-medium max-w-xs truncate">{e.title}</td>
                    <td className="px-4 py-3 text-gray-600">{e.location}</td>
                    <td className="px-4 py-3 text-gray-600">{e.year}</td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <button onClick={() => openEdit(e)} className="p-1.5 hover:bg-gray-100 rounded" title="Edit"><FontAwesomeIcon icon={faPen} className="w-3.5 h-3.5" /></button>
                        <button onClick={() => setDeleteId(e._id)} className="p-1.5 hover:bg-gray-100 rounded" title="Delete"><FontAwesomeIcon icon={faTrash} className="w-3.5 h-3.5" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <Modal isOpen={modalOpen} title={editing ? 'Edit Calendar Event' : 'Add Calendar Event'} onClose={() => setModalOpen(false)}>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1 font-montserrat">Month *</label>
              <select className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#002B7F]" value={form.month} onChange={e => setForm(f => ({ ...f, month: e.target.value }))}>
                {MONTHS.map(m => <option key={m} value={m}>{m}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1 font-montserrat">Year *</label>
              <input type="number" className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#002B7F]" value={form.year} onChange={e => setForm(f => ({ ...f, year: +e.target.value }))} />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1 font-montserrat">Date Range *</label>
            <input className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#002B7F]" value={form.dateRange} onChange={e => setForm(f => ({ ...f, dateRange: e.target.value }))} placeholder="e.g. 11 - 22 JAN 2026" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1 font-montserrat">Event Title *</label>
            <input className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#002B7F]" value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} placeholder="Event title" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1 font-montserrat">Location *</label>
            <input className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#002B7F]" value={form.location} onChange={e => setForm(f => ({ ...f, location: e.target.value }))} placeholder="City, Country" />
          </div>
          <div className="flex gap-3 pt-2">
            <button onClick={() => setModalOpen(false)} className="flex-1 py-2 border rounded-lg text-gray-600 text-sm font-semibold">Cancel</button>
            <button onClick={handleSave} disabled={saving} className="flex-1 py-2 bg-[#002B7F] text-white rounded-lg text-sm font-semibold disabled:opacity-60">
              {saving ? 'Saving...' : editing ? 'Update' : 'Add Event'}
            </button>
          </div>
        </div>
      </Modal>

      <ConfirmDialog isOpen={!!deleteId} message="Delete this calendar event?" onConfirm={handleDelete} onCancel={() => setDeleteId(null)} loading={deleting} />
    </div>
  );
}
