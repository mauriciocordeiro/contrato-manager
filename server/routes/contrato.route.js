const express = require('express');
const contratoRoute = express.Router();
// Contrato model
let Contrato = require('../model/Contrato');
// Create Contrato
contratoRoute.route('/create-contrato').post((req, res, next) => {
    Contrato.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});
// Retrieve contrato
contratoRoute.route('/').get((req, res) => {
    Contrato.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})
// Retrieve um contrato
contratoRoute.route('/read-contrato/:id').get((req, res) => {
    Contrato.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})
// Update contrato
contratoRoute.route('/update-contrato/:id').put((req, res, next) => {
    Contrato.findByIdAndUpdate(req.params.id, {
        $set: req.body
        }, (error, data) => {
        if (error) {
            console.log(error)
            return next(error);
        } else {
            res.json(data)
            console.log('Contrato successfully updated!')
        }
    })
})
// Delete contrato
contratoRoute.route('/delete-contrato/:id').delete((req, res, next) => {
    Contrato.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})


module.exports = contratoRoute;