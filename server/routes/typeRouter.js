const Router = require("express")
const router = new Router()
const {Type} = require("../models/models")
const ApiError = require("../error/ApiError")
const typeController = require("../controllers/typeController")
const checkRole = require("../middleware/checkRoleMiddleware")
const deviceController = require("../controllers/deviceController");


router.post("/", checkRole("ADMIN"), typeController.create)
router.get("/", typeController.getAll)
router.get("/:id", typeController.getOne)


module.exports = router