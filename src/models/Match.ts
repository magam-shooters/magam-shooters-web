import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IMatch extends Document {
  title: string;
  date: string;
  time: string;
  venue: string;
  category: string;
  status: 'upcoming' | 'ongoing' | 'completed';
  description?: string;
  pdfUrl?: string;   // S3 URL for the PDF
  pdfKey?: string;   // S3 object key (for deletion)
  createdAt: Date;
  updatedAt: Date;
}

const MatchSchema = new Schema<IMatch>(
  {
    title: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, default: 'All Day' },
    venue: { type: String, required: true },
    category: { type: String, required: true },
    status: { type: String, enum: ['upcoming', 'ongoing', 'completed'], default: 'upcoming' },
    description: { type: String },
    pdfUrl: { type: String },
    pdfKey: { type: String },
  },
  { timestamps: true }
);

// Supports match listing by newest first.
MatchSchema.index({ createdAt: -1 });

const Match: Model<IMatch> =
  mongoose.models.Match || mongoose.model<IMatch>('Match', MatchSchema);

export default Match;
