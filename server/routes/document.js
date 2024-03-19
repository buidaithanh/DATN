const express = require("express");
const router = express.Router();
const { upload } = require("../multer");
const catchAsyncError = require("../middlewares/catchAsyncErrors");
const { isAuthenticated, isAdmin } = require("../middlewares/auth");
const {
  createDoc,
  getAllDocs,
  getAllDocsOfUser,
  approveDocs,
  getDoc,
} = require("../controllers/document");

router.post("/create-doc", upload.single("doc"), createDoc);
router.get("/get-all-docs/:id", catchAsyncError(getAllDocsOfUser));
router.get("/get-all-docs", catchAsyncError(getAllDocs));
router.get("/get-doc/:id", catchAsyncError(getDoc));
router.put(
  "/approve-docs/:docId",
  isAuthenticated,
  isAdmin("admin"),
  catchAsyncError(approveDocs)
);

module.exports = router;
