import mongoose from 'mongoose';

const recordSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: true,
    trim: true,
    minLength: 3,
    maxLength: 100
  },

  artist: {
    type: String,
    required: true,
    index: true,
    trim: true,
    minLength: 3,
    maxLength: 100
  },
  summary: {
    type: String,
    required: true,
    trim: true,
    minLength: 3,
    maxLength: 100
  },
  description: {
    type: String,
    required: true,
    trim: true,
    minLength: 3
  },
  price: {
    type: Number,
    required: true
  },
  imageUrl: {
    type: String,
    required: true,
    trim: true
  },
  format: {
    type: String,
    required: true,
    index: true,
    enum: ['LP', '7"', 'CD', 'Tape']
  },
  style: {
    type: String,
    required: true,
    index: true,
    enum: ['Rock', 'Blues', 'Punk', 'Pop', 'Jazz']
  },
  releaseDate: {
    type: Date,
    required: true,
    index: true
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  }
  //TODO below field should be added after we have the security on!
  // createdBy: {
  //   type: String,
  //   required: true,
  //  //TODO default value should be the user who created this record
  // }
});

const Record = mongoose.model('Record', recordSchema);

export default Record;
