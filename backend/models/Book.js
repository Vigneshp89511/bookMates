import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true },
    genre: { type: String, required: true, trim: true },
    description: { type: String, default: '' },
    available: { type: Boolean, default: true },
    imageUrl: { type: String, default: '' }, // 👈 add this
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

bookSchema.index({ title: 'text', author: 'text', genre: 'text' });
export default mongoose.model('Book', bookSchema);
