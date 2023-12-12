//importing module
const express = require("express");
const router = express.Router();
const {createContact,contact_all, contact_update,contact_delete,contact_single }= require("../controller/contactController");
const validateToken = require ("../middleware/validateTokenHandler");

router.use(validateToken);
// router.route("/").post(createContact);

router.post("/", createContact);
router.get("/", contact_all);
router.put("/:contactId",contact_update );
router.delete("/:contactId",contact_delete);
router.get("/:contactId",contact_single);



module.exports = router;