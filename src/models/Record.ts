import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IRecord extends Document {
  title: string;
  holder: string;
  score: string;
  date: string;
  location: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

const RecordSchema = new Schema<IRecord>(
  {
    title: { type: String, required: true },
    holder: { type: String, required: true },
    score: { type: String, required: true },
    date: { type: String, required: true },
    location: { type: String, required: true },
    category: { type: String, required: true },
  },
  { timestamps: true }
);

// Supports records listing by newest first.
RecordSchema.index({ createdAt: -1 });

const Record: Model<IRecord> =
  mongoose.models.NSSFRecord || mongoose.model<IRecord>('NSSFRecord', RecordSchema);

export default Record;
