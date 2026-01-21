import mongoose from 'mongoose';

const MatchmakerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    boysList: [{ type: mongoose.Schema.Types.ObjectId, ref:'Boy' }],
    girlsList: [{ type: mongoose.Schema.Types.ObjectId, ref:'Girl' }],

});

export default mongoose.model('Matchmaker', MatchmakerSchema);
