import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
    name: { type: String, maxlength: 64, required: true }
});

const User = mongoose.model('user', userSchema);

export default User;