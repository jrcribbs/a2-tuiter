import mongoose from "mongoose";

/**
 * Likes mongoose schema.
 */
const likesSchema = new mongoose.Schema({
    likedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
    likedTuit: {type: mongoose.Schema.Types.ObjectId, ref: 'TuitModel'}
}, {collection: 'likes'});

export default likesSchema;
