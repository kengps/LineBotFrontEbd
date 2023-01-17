const express = require("express");
const router = express.Router();

const { createRichMenuUser } = require("../services/richmenu/create-richmenu-user");
const { deleteRichMenuUser } = require("../services/richmenu/delete-richmenu-user");

// localhost:4000/create/richmenu/user
router.get("/create/richmenu/user", async function (req, res, next) {
  await createRichMenuUser();
  return res.status(200).json({ message: "สร้างเมนูสำเร็จ" });
});

// localhost:4000/delete/richmenu/user
router.get("/delete/richmenu/user", async function (req, res, next) {
  await deleteRichMenuUser();
  return res.status(200).json({ message: "ลบเมนูสำเร็จ" });
});

module.exports = router;
