const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
      text: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    description: {
      type: String,
      required: true,
      maxlength: 2000,
      text: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
      maxlength: 32,
    },
    category: {
      type: ObjectId,
      ref: "Category",
    },
    subs: [
      {
        type: ObjectId,
        ref: "Sub",
      },
    ],

    images: {
      type: Array,
    },
    type: {
      type: String,
      enum: ["Free", "Unfree"],
    },
    duration: {
      type: String,
      enum: ["0-5h", "5-10h", "10-15h", "15-20h", "20h +"],
    },

    skillLevel: {
      type: String,
      enum: ["Beginner", "Average", "Specialist", "Expert"],
    },

    // availablePlaceCourse: {
    //   type: Number,
    // },
    // reservedPlaceCourse: {
    //   type: Number,
    //   default: 0,
    // },
    site: {
      type: String,
      required: true,
      maxlength: 2000,
      text: true,
    },

    ratings: [
      {
        star: Number,
        postedBy: { type: ObjectId, ref: "User" },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
