import mongoose from 'mongoose'

const GirlDetails = new mongoose.Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneForSuggestions: { type: String, required: true },
  emailSuggestions: { type: String, required: true, unique: true },
  dateOfBirth: { type: Date, required: true },
  city: { type: String, required: true },
  status: { type: String, enum: ['מאורס', 'רווק', 'מבוטל', 'גרוש'], required: true },
  height: { type: Number, required: true },
  fatherName: { type: String, required: true },
  motherName: { type: String, required: true },
  YeshivaName: { type: String, required: true },
  suggestionsNotRellevant: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Girl' }],
  suggestionCurrent: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Girl' }],
  meetInPast: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Girl' }],





})
export default mongoose.model('Boy', GirlDetails);