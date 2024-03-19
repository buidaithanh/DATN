const ErrorHandler = require("../utils/ErrorHandler");
const path = require("path");
const User = require("../model/User");
const Document = require("../model/Document");
module.exports.createDoc = async (req, res, next) => {
  try {
    const { name, category, description, uploadedBy, price, preview, keyWord } =
      req.body;
    const user = await User.findById({ _id: uploadedBy });
    const existingDocument = await Document.findOne({ name });
    if (!user) {
      return next(new ErrorHandler("upload by Id is invalid!", 400));
    }
    if (existingDocument) {
      return next(
        new ErrorHandler("Document with this name already exists", 400)
      );
    }
    const filename = req.file.filename;
    const fileUrl = path.join(filename);
    const userUpload = await User.findById(uploadedBy);
    console.log(userUpload);
    const newDocument = new Document({
      name,
      category,
      description,
      preview,
      keyWord,
      uploadedBy,
      nameUser: userUpload.name,
      price,
      pdfUrl: fileUrl,
    });
    const savedDocument = await newDocument.save();
    res.status(200).json({
      success: true,
      savedDocument,
      message: "Upload tai lieu thanh cong, xin cho phe duyet",
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
};

// get all docs
module.exports.getAllDocs = async (req, res, next) => {
  const { status } = req.query;
  console.log(status);
  let filter = {};

  status === "All" ? "" : (filter.status = status);
  try {
    const docs = await Document.find(filter).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      docs,
    });
  } catch (error) {
    return next(new ErrorHandler(error, 400));
  }
};

//get document
module.exports.getDoc = async (req, res, next) => {
  try {
    const docId = req.params.id;
    const doc = await Document.find({ _id: docId });

    res.status(201).json({
      success: true,
      doc,
    });
  } catch (error) {
    return next(new ErrorHandler(error, 400));
  }
};
// get all docs of a user
module.exports.getAllDocsOfUser = async (req, res, next) => {
  try {
    const docs = await Document.find({ uploadedBy: req.params.id });

    res.status(201).json({
      success: true,
      docs,
    });
  } catch (error) {
    return next(new ErrorHandler(error, 400));
  }
};

// docs approved by admin
module.exports.approveDocs = async (req, res, next) => {
  try {
    const docId = req.params.docId;
    await Document.findOneAndUpdate(
      { _id: docId, status: "Processing" },
      { $set: { status: "Approved" } },
      { new: true }
    );
    return res
      .status(200)
      .json({ success: true, message: "updated doc successfully" });
  } catch (error) {
    return next(new ErrorHandler(error, 400));
  }
};
