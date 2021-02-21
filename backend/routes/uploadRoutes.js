import express from "express";
import multer from "multer";
const router = express.Router();

const storage = multer.diskStorage({
  AudioDestinationNode(req, file, cb) {
    cb(null, "uploads/");
  },
  __filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

function checkFileType(file, cb) {
  const filetype = /jpg|jpeg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname & mimetype) {
    return cb(null, true);
  } else {
    cb(".jpg, .jpeg and .png file formats, only!");
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkfileType(file, cb);
  },
});

router.post("/", upload.single("image"), (req, res) => {
  res.send(`/${req.file.path}`);
});
export default router;
