import express from "express";
import fileUpload from "express-fileupload";
import res from "express/lib/response";
const PORT = process.env.PORT || 7000;

const app = express();
app.use(fileUpload());

///upload API

app.post("/upload", (req, res) => {
  if (req.files == null) {
    res.status(400).json({ msg: "No file have been upload." });
  }

  const file = req.files.file;

  file.mv(`${__dirname}/client/public/uploads/${file.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({
      fileName: file.name,
      filePath: `/uploads/${file.name}`,
    });
  });
});

app.listen(PORT, () => {
  console.log(`Example app listening at  http://localhost:${PORT}`);
});