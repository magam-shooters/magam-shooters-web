import mongoose, { Document, Model, Schema } from 'mongoose';

export interface ICalendarEvent extends Document {
  dateRange: string;
  title: string;
  location: string;
  month: string;
  year: number;
  createdAt: Date;
  updatedAt: Date;
}

const CalendarEventSchema = new Schema<ICalendarEvent>(
  {
    dateRange: { type: String, required: true },
    title: { type: String, required: true },
    location: { type: String, required: true },
    month: { type: String, required: true },
    year: { type: Number, required: true, default: 2026 },
  },
  { timestamps: true }
);

// Supports calendar listing sort order.
CalendarEventSchema.index({ month: 1, dateRange: 1 });

const CalendarEvent: Model<ICalendarEvent> =
  mongoose.models.CalendarEvent ||
  mongoose.model<ICalendarEvent>('CalendarEvent', CalendarEventSchema);

export default CalendarEvent;
