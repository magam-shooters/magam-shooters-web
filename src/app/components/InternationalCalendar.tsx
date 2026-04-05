'use client';

import { colors } from '@/config';
import { useEffect, useState } from 'react';

interface CalendarEvent {
  _id: string;
  dateRange: string;
  title: string;
  location: string;
  month: string;
}

interface MonthData {
  month: string;
  eventCount: number;
  events: CalendarEvent[];
}

const calendarData: MonthData[] = [
  {
    month: "JANUARY",
    eventCount: 2,
    events: [
      { id: 1, dateRange: "11 - 22 JAN 2026", title: "Asian Championship Shotgun", location: "Doha, Qatar" },
      { id: 2, dateRange: "14 - 19 JAN 2026", title: "ISSF Grand Prix 10m", location: "Ruse, Slovenia" },
    ]
  },
  {
    month: "FEBRUARY",
    eventCount: 4,
    events: [
      { id: 3, dateRange: "02 - 14 FEB 2026", title: "Asian Championship Rifle / Pistol", location: "New Delhi, India" },
      { id: 4, dateRange: "09 - 15 FEB 2026", title: "European Championship Junior 10m", location: "Burgas, Bulgaria" },
      { id: 5, dateRange: "12 - 16 FEB 2026", title: "ISSF Rifle/Pistol Judges Course", location: "Amman, Jordan" },
      { id: 6, dateRange: "27 FEB - 05 MAR 2026", title: "European Championship 10m", location: "Yerevan, Armenia" },
    ]
  },
  {
    month: "MARCH",
    eventCount: 5,
    events: [
      { id: 7, dateRange: "02 MAR - 29 MAY 2026", title: "ISSF Academy C Course for Coaches - Rifle, Pistol, Shotgun", location: "Online" },
      { id: 8, dateRange: "09 - 13 MAR 2026", title: "ISSF Rifle/Pistol Judges Course", location: "Rio de Janeiro, Brazil" },
      { id: 9, dateRange: "09 - 13 MAR 2026", title: "ISSF Electronic Scoring Target Course", location: "Gwangju, Republic of Korea" },
      { id: 10, dateRange: "25 MAR - 03 APR 2026", title: "ISSF World Cup Shotgun", location: "Tangier, Morocco" },
      { id: 11, dateRange: "28 MAR - 01 APR 2026", title: "ISSF Rifle/Pistol Judges Course", location: "New Delhi, India" },
    ]
  },
  {
    month: "APRIL",
    eventCount: 3,
    events: [
      { id: 12, dateRange: "05 - 13 APR 2026", title: "ISSF World Cup Rifle / Pistol", location: "Granada, Spain" },
      { id: 13, dateRange: "19 - 27 APR 2026", title: "ISSF Junior World Cup Rifle / Pistol / Shotgun", location: "Cairo, Egypt" },
      { id: 14, dateRange: "30 APR - 06 MAY 2026", title: "European Championship 300m", location: "Osijek, Croatia" },
    ]
  },
  {
    month: "MAY",
    eventCount: 5,
    events: [
      { id: 15, dateRange: "02 - 11 MAY 2026", title: "ISSF World Cup Shotgun", location: "Almaty, Kazakhstan" },
      { id: 16, dateRange: "03 - 10 MAY 2026", title: "African Championship 10m", location: "Beni Khalled, Tunisia" },
      { id: 17, dateRange: "06 - 18 MAY 2026", title: "European Championship 25/50m", location: "Osijek, Croatia" },
      { id: 18, dateRange: "21 - 24 MAY 2026", title: "ISSF Rifle/Pistol Judges Course", location: "Rome, Italy" },
      { id: 19, dateRange: "24 - 31 MAY 2026", title: "ISSF World Cup Rifle / Pistol", location: "Munich, Germany" },
    ]
  },
  {
    month: "JUNE",
    eventCount: 3,
    events: [
      { id: 20, dateRange: "15 - 19 JUN 2026", title: "ISSF Electronic Scoring Target Course", location: "Rome, Italy" },
      { id: 21, dateRange: "16 - 26 JUN 2026", title: "ISSF Junior World Championship Rifle / Pistol / Shotgun", location: "Suhl, Germany" },
      { id: 22, dateRange: "20 - 24 JUN 2026", title: "ISSF Rifle/Pistol Judges Course", location: "New Delhi, India" },
    ]
  },
  {
    month: "JULY",
    eventCount: 3,
    events: [
      { id: 23, dateRange: "03 - 13 JUL 2026", title: "ISSF World Cup Shotgun", location: "Lonato, Italy" },
      { id: 24, dateRange: "20 - 29 JUL 2026", title: "ISSF World Cup Rifle / Pistol / Shotgun", location: "Hangzhou, People's Republic of China" },
      { id: 25, dateRange: "20 - 26 JUL 2026", title: "ISSF World Championship Moving Target", location: "Tallinn, Estonia" },
    ]
  },
  {
    month: "AUGUST",
    eventCount: 3,
    events: [
      { id: 26, dateRange: "03 - 07 AUG 2026", title: "ISSF Shotgun Referee Course", location: "New Delhi, India" },
      { id: 27, dateRange: "10 AUG - 29 OCT 2026", title: "ISSF Academy C Course for Coaches - Rifle, Pistol, Shotgun", location: "Online" },
      { id: 28, dateRange: "10 - 14 AUG 2026", title: "ISSF Electronic Scoring Target Course", location: "New Delhi, India" },
    ]
  },
  {
    month: "SEPTEMBER",
    eventCount: 4,
    events: [
      { id: 29, dateRange: "10 - 14 SEP 2026", title: "ISSF Shotgun Judges Course", location: "New Delhi, India" },
      { id: 30, dateRange: "12 - 20 SEP 2026", title: "ISSF Junior World Cup Shotgun", location: "Porpetto, Italy" },
      { id: 31, dateRange: "20 SEP - 02 OCT 2026", title: "20th Asian Games", location: "Aichi-Nagoya, Japan" },
      { id: 32, dateRange: "27 SEP - 13 OCT 2026", title: "European Championship Shotgun", location: "Athens, Greece" },
    ]
  },
  {
    month: "OCTOBER",
    eventCount: 2,
    events: [
      { id: 33, dateRange: "02 - 04 OCT 2026", title: "ISSF World Tour Target Sprint", location: "Bellinzona, Switzerland" },
      { id: 34, dateRange: "08 - 16 OCT 2026", title: "ISSF World Cup Rifle / Pistol", location: "Cairo, Egypt" },
    ]
  },
  {
    month: "NOVEMBER",
    eventCount: 2,
    events: [
      { id: 35, dateRange: "01 - 15 NOV 2026", title: "ISSF World Championship Rifle / Pistol / Shotgun", location: "Doha, Qatar" },
      { id: 36, dateRange: "21 NOV - 01 DEC 2026", title: "15th Championship of the Americas", location: "Lima, Peru" },
    ]
  },
  {
    month: "DECEMBER",
    eventCount: 1,
    events: [
      { id: 37, dateRange: "03 - 08 DEC 2026", title: "ISSF World Cup Final Rifle / Pistol / Shotgun", location: "Rome, Italy" },
    ]
  },
];

export default function InternationalCalendar() {
  const [expandedMonths, setExpandedMonths] = useState<string[]>([]);
  const [calendarData, setCalendarData] = useState<MonthData[]>([]);

  useEffect(() => {
    fetch('/api/calendar')
      .then((r) => r.json())
      .then((events: CalendarEvent[]) => {
        if (!Array.isArray(events)) return;
        const grouped: Record<string, CalendarEvent[]> = {};
        events.forEach((e) => {
          if (!grouped[e.month]) grouped[e.month] = [];
          grouped[e.month].push(e);
        });
        const monthOrder = ['JANUARY','FEBRUARY','MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER'];
        const sorted = monthOrder
          .filter((m) => grouped[m])
          .map((m) => ({ month: m, eventCount: grouped[m].length, events: grouped[m] }));
        setCalendarData(sorted);
      })
      .catch(() => {});
  }, []);

  const toggleMonth = (month: string) => {
    setExpandedMonths(prev =>
      prev.includes(month)
        ? prev.filter(m => m !== month)
        : [...prev, month]
    );
  };

  if (calendarData.length === 0) return null;

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
            <div className="text-center mb-16">
          <p className="text-sm font-sans font-semibold uppercase tracking-wider mb-2" style={{ color: colors.primary.blue }}>
            Global Events
          </p>
          <h2 className="text-4xl md:text-5xl font-sans font-bold mb-4" style={{ color: colors.primary.navy }}>
            International Calendar 2026
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-sans">
            ISSF World Championships, World Cups, and Continental Championships
          </p>
        </div>
        {/* Calendar */}
        <div className="max-w-7xl mx-auto">
          {calendarData.map((monthData) => (
            <div key={monthData.month} className="border-b border-gray-200">
              {/* Month Header - Clickable */}
              <button
                onClick={() => toggleMonth(monthData.month)}
                className="w-full flex items-center justify-between py-3 px-2 hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-sans font-bold" style={{ color: colors.primary.navy }}>
                  {monthData.month}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-sans font-semibold" style={{ color: colors.primary.navy }}>
                    {monthData.eventCount} {monthData.eventCount === 1 ? 'EVENT' : 'EVENTS'}
                  </span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${
                      expandedMonths.includes(monthData.month) ? 'rotate-180' : ''
                    }`}
                    style={{ color: colors.primary.navy }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* Events List - Expandable */}
              {expandedMonths.includes(monthData.month) && (
                <div className="px-2 pb-3 space-y-1">
                  {monthData.events.map((event) => (
                    <div
                      key={event._id}
                      className="p-2 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors"
                    >
                      <div className="flex items-start gap-2">
                        <span className="text-xs font-semibold text-[#00AEEF] w-20 flex-shrink-0">
                          {event.dateRange}
                        </span>
                        <span className="text-sm font-medium flex-1" style={{ color: colors.primary.navy }}>
                          {event.title}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-600">{event.location}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

