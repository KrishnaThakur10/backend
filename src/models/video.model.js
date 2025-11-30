import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        title:{
            type: String,
            required: true,
            trim: true,
        },
        owner:{
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        discription:{
            type: String,
            required: true,
            trim: true,
        },
        videoFile:{
            type: String,
            required: true
        },
        thumbnail:{
            type: String,
            required: true
        },
        views:{
            type: Number,
            default: 0,
            required: true
        },
        duration:{
            type: Number,
            required: true
        },
        isPublished:{
            type: Boolean,
            default: true,
            required: true
        }
    },
    {
        timestamps: true
    }
)

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema)