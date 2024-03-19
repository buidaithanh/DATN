const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your document name!"],
  },
  category: {
    type: String,
    required: [true, "Please enter your document category!"],
  },
  description: {
    type: String,
    required: [true, "Please enter your document description!"],
  },
  reviews: [
    {
      user: {
        type: Object,
      },
      rating: {
        type: Number,
      },
      comment: {
        type: String,
      },
      documentId: {
        type: String,
      },
      createdAt: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
  keyWord: {
    type: String,
    required: true,
  },
  uploadedBy: {
    type: String,
    required: true,
  },
  nameUser: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  preview: {
    type: Number,
    default: 0,
  },
  downloads: { type: Number, default: 0 },
  views: { type: Number, default: 0 },
  status: {
    type: String,
    default: "Processing",
  },
  pdfUrl: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Document", documentSchema);
