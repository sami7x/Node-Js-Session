//importing module
const express = require("express");
const router = express.Router();
const contactController = require("../controller/contactController");
const validateToken = require ("../middleware/validateTokenHandler");

router.use(validateToken);
// router.route("/").post(createContact);

router.post("/", contactController.createContact);
router.get("/", contactController.contact_all);
router.put("/:contactId",contactController.contact_update );
router.delete("/:contactId",contactController.contact_delete);
router.get("/:contactId",contactController.contact_single);



module.exports = router;