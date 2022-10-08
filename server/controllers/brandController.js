const {Brand, Type} = require("../models/models")
const ApiError = require("../error/ApiError")

class BrandController {
    async create(req, res) {
        const {name} = req.body
        const brand = await Brand.create({name})
        return res.json(brand)
    }
    async getAll(req, res) {
        const brands = await Brand.findAll()
        return res.json(brands)
    }

    async getOne(req, res) {
        const {id} = req.params
        const brand = await Brand.findOne({
            where: {id}
        })
        return res.json(brand)
    }
}

module.exports = new BrandController()