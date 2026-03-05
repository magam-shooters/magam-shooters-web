'use client';

import Link from 'next/link';

const sections = [
  { label: 'Upcoming Matches', href: '/admin/matches', icon: '🎯', desc: 'Manage match schedules & PDFs', color: 'from-blue-500 to-blue-700' },
  { label: 'International Calendar', href: '/admin/calendar', icon: '📅', desc: 'Manage 2026 calendar events', color: 'from-indigo-500 to-indigo-700' },
  { label: 'Training Programs', href: '/admin/training', icon: '🏋️', desc: 'Add & update training programs', color: 'from-green-500 to-green-700' },
  { label: 'National Records', href: '/admin/records', icon: '🏆', desc: 'Manage national records', color: 'from-yellow-500 to-yellow-700' },
  { label: 'Competition Results', href: '/admin/results', icon: '🥇', desc: 'Post competition results', color: 'from-orange-500 to-orange-700' },
  { label: 'News', href: '/admin/news', icon: '📰', desc: 'Create & manage news articles', color: 'from-red-500 to-red-700' },
  { label: 'Gallery', href: '/admin/gallery', icon: '🖼️', desc: 'Upload & manage photo gallery', color: 'from-purple-500 to-purple-700' },
];

export default function AdminDashboard() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-montserrat font-bold text-gray-800 mb-1">Welcome back!</h2>
        <p className="text-gray-500 font-sans text-sm">Manage your NSSF Sri Lanka website content from here.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {sections.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className={`bg-gradient-to-br ${s.color} rounded-2xl p-6 text-white hover:scale-105 transition-transform duration-200 shadow-lg`}
          >
            <div className="text-4xl mb-3">{s.icon}</div>
            <h3 className="font-montserrat font-bold text-lg mb-1">{s.label}</h3>
            <p className="text-white/80 text-sm font-sans">{s.desc}</p>
          </Link>
        ))}
      </div>

      <div className="mt-8 bg-white rounded-xl shadow p-5 border border-gray-200">
        <h3 className="font-montserrat font-bold text-gray-700 mb-2">Quick Tips</h3>
        <ul className="text-sm text-gray-500 font-sans space-y-1 list-disc list-inside">
          <li>Click on any card above to manage that section.</li>
          <li>Use the <strong>Create</strong> button in each section to add new entries.</li>
          <li>Click the <strong>Edit</strong> icon on any row to update it.</li>
          <li>Uploaded images and PDFs are stored on AWS S3.</li>
          <li>All changes are reflected on the public site immediately.</li>
        </ul>
      </div>
    </div>
  );
}
