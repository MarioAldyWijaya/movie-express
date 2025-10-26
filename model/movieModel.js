import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema(
    {
        judul : {
            type : String,
            unique : true,
            required : true,
            trims : true,
        },
        tahunRilis : {
            type : String,
            required : true,
            trim : true,
        },
        sutradara : {
            type : String,
            required : true,
            trim : true,
        },
    },
    {
        timestpams : true
    }
);
const movieModel = mongoose.model ("movie", MovieSchema);
export default movieModel