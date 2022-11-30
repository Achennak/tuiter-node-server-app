import mongoose from 'mongoose';
const schema = mongoose.Schema({
                                   topic: String,
                                   userName: String,
                                    title: String,
                                    time:String,
                                   tuit: String,
                                   likes: String,
                                   liked: Boolean,
                                   image: String,
                                   disliked: Boolean,
                                   replies: String,
                                   retuits: String,
                                   dislikes: String,
                                   handle: String
                               }, {collection: 'tuits'});
export default schema;

