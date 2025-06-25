import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);


const bookReviewSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true
    },
    review: {
        type: String,
        required: true,
        minlength: 20
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    reviewerId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }]
}, { timestamps: true });

const BookReview = mongoose.model("BookReview", bookReviewSchema);

export { User, BookReview };
