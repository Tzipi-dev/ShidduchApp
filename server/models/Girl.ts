import mongoose from 'mongoose'

const GirlDetails = new mongoose.Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneForSuggestions: { type: String, required: true },
  emailSuggestions: { type: String, required: true, unique: true },
  dateOfBirth: { type: Date, required: true },
  city: { type: String, required: true },
 status: { type: String, enum: ['מאורסת', 'רווקה', 'מבוטלת', 'גרושה'], required: true },
  height: { type: Number, required: true },
  fatherName: { type: String, required: true },
  motherName: { type: String, required: true },
  suggestionsNotRellevant: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Boy' }],
  suggestionCurrent: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Boy' }],
  meetInPast: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Boy' }],
  

})
export default mongoose.model('Girl', GirlDetails);
