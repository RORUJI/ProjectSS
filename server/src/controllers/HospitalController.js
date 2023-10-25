const { Hospital } = require('../models')

module.exports = {
    // get all user
    async index(req, res) {
        //res.send('เรียกข้อมูล ผู้ใช้ทั้งหมด')
        try {
            const hospitals = await Hospital.findAll()
            res.send(hospitals)
        } catch (error) {
            res.status(500).send({
                error: 'The hospitals information was incorrect'
            })
        }
    },

    // create user
    async create(req, res) {
        try {
            const hospital = await Hospital.create(req.body)
            res.send(hospital.toJSON())
        } catch (error) {
            res.status(500).send({
                error: 'Create hospital incorrect'
            })
        }
    },

    // edit user, suspend, active
    async put(req, res) {
        try {
            await Hospital.update(req.body, {
                where: {
                    id: req.params.hospitalId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update hospital incorrect'
            })
        }
    },

    // delete user
    async remove(req, res) {
        try {
            const hospital = await Hospital.findOne({
                where: {
                    id: req.params.hospitalId
                }
            })

            if (!hospital) {
                return res.status(403).send({
                    error: 'The hospital information was incorrect'
                })
            }

            await hospital.destroy()
            res.send(hospital)
        } catch (error) {
            res.status(500).send({
                error: 'The hospital information was incorrect'
            })
        }
    },

    // get user by id
    async show(req, res) {
        try {
            const hospital = await Hospital.findByPk(req.params.hospitalId)
            res.send(hospital)
        } catch (error) {
            res.status(500).send({
                error: 'The hospital information was incorrect'
            })
        }
    },
}