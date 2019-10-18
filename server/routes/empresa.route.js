const express = require('express');
const app = express();
const empresaRoute = express.Router();

// Empresa model
let Empresa = require('../model/Empresa');

// Create Empresa
empresaRoute.route('/create-empresa').post((req, res, next) => {
    Empresa.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// Get all empresa
empresaRoute.route('/').get((req, res) => {
    Empresa.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Get single empresa
empresaRoute.route('/read-empresa/:id').get((req, res) => {
    Empresa.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


// Update empresa
empresaRoute.route('/update-empresa/:id').put((req, res, next) => {
    Empresa.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('Empresa successfully updated!')
        }
    })
})

// Delete empresa
empresaRoute.route('/delete-empresa/:id').delete((req, res, next) => {
    Empresa.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = empresaRoute;