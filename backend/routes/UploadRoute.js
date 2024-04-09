const { Router } = require('express');
const uploadMiddleware = require('../middlewares/MultiMiddleware');
const UploadModel = require('../models/UploadModel');

const router = Router();

router.get("/api/get", async (req, res)=> {
   const allphotos = await UploadModel.find().sort({ createAt: "descending" });
   res.send(allphotos)
});

router.post("/api/save", uploadMiddleware.single("photo"), (req, res) => {
   const photo = req.file.filename;

   console.log(photo);

   UploadModel.create({ photo })
   .then((data) => {
    console.log("Uploaded Successsfully...");
    console.log(data)
    res.send(data);
   })
   .catch((err) => console.log(err));
});

module.exports = router;