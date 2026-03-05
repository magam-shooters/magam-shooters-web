import mongoose, { Document, Model, Schema } from 'mongoose';

export interface ICompetitionResult extends Document {
  competition: string;
  date: string;
  location: string;
  category: string;
  winners: {
    gold: string;
    silver: string;
    bronze: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

const CompetitionResultSchema = new Schema<ICompetitionResult>(
  {
    competition: { type: String, required: true },
    date: { type: String, required: true },
    location: { type: String, required: true },
    category: { type: String, required: true },
    winners: {
      gold: { type: String, required: true },
      silver: { type: String, required: true },
      bronze: { type: String, required: true },
    },
  },
  { timestamps: true }
);

const CompetitionResult: Model<ICompetitionResult> =
  mongoose.models.CompetitionResult ||
  mongoose.model<ICompetitionResult>('CompetitionResult', CompetitionResultSchema);

export default CompetitionResult;
