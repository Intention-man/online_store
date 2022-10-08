const Router = require("express")
const router = new Router()
const {Brand} = require("../models/models")
const ApiError = require("../error/ApiError")
const brandController = require("../controllers/brandController")
const deviceController = require("../controllers/deviceController");


router.post("/", brandController.create)
router.get("/", brandController.getAll)
router.get("/:id", brandController.getOne)


module.exports = router