import mongoose, { Document, Model, Schema } from 'mongoose';

export interface ITrainingProgram extends Document {
  title: string;
  excerpt: string;
  duration: string;
  participants: string;
  imageUrl?: string;
  imageKey?: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

const TrainingProgramSchema = new Schema<ITrainingProgram>(
  {
    title: { type: String, required: true },
    excerpt: { type: String, required: true },
    duration: { type: String, required: true },
    participants: { type: String, required: true },
    imageUrl: { type: String },
    imageKey: { type: String },
    category: { type: String, required: true },
  },
  { timestamps: true }
);

// Supports training programs listing by newest first.
TrainingProgramSchema.index({ createdAt: -1 });

const TrainingProgram: Model<ITrainingProgram> =
  mongoose.models.TrainingProgram ||
  mongoose.model<ITrainingProgram>('TrainingProgram', TrainingProgramSchema);

export default TrainingProgram;
