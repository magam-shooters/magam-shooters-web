import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IGallery extends Document {
  title: string;
  subtitle?: string;
  date: string;
  imageUrl: string;
  imageKey: string;
  createdAt: Date;
}

const GallerySchema = new Schema<IGallery>(
  {
    title: { type: String, required: true },
    subtitle: { type: String, default: '' },
    date: { type: String, required: true },
    imageUrl: { type: String, required: true },
    imageKey: { type: String, required: true },
  },
  { timestamps: true }
);

// Supports gallery listing by newest first.
GallerySchema.index({ createdAt: -1 });

const Gallery: Model<IGallery> =
  mongoose.models.Gallery || mongoose.model<IGallery>('Gallery', GallerySchema);

export default Gallery;
