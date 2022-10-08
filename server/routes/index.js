const Router = require("express")
const router = new Router()
const userRouter = require("./userRouter")
const deviceRouter = require("./deviceRouter")
const brandRoute = require("./brandRouter")
const typeRoute = require("./typeRouter")


router.use('/user', userRouter)
router.use("/device", deviceRouter)
router.use("/type", typeRoute)
router.use("/brand", brandRoute)


module.exports = router