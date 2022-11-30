import mongoose from 'mongoose';
const schema = mongoose.Schema({
                                   topic: String,
                                   userName: String,
                                   handle: String,
                                   time: String,
                                   profilepic: String,
                                   title: String,
                                   text: {type: String, required: true},
                                   likes: {type: Number, default: 0},
                                   liked: {type: Boolean, default: false},
                                   replies: {type: Number, default: 0},
                                   retuits: {type: Number, default: 0},
                                   disliked: {type: Boolean, default: false},
                                   dislikes: {type: Number, default: 0},
                               }, {collection: 'tuits'});

export default schema;