import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    imageUrl : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    profilePic : {
        type: String,
        default: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/2048px-Windows_10_Default_Profile_Picture.svg.png'
    }
})

export default mongoose.model('Post', PostSchema);