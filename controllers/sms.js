'use strict';
const { json } = require('body-parser');
const SMS = require('../models/sms');

exports.create = function (req, res) {
    console.log(req.body)
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Por favor proporciona todos los campos requeridos !' });
    } else {

        const sms = {
            nombre: req.body.nombre,
            telefono: req.body.telefono
        };

        const nuevo_sms = new SMS(sms);

        SMS.create(nuevo_sms, function (err, sms) {
            if (err)
                res.send(err);
            req.flash('message', 'Producto Creado Correctamente !');
            res.redirect('/enviado');
        })
    }
}

exports.findAll = function (req, res) {
    SMS.findAll(function (err, smsm) {
        if (err)
            res.send(err);
        // console.log('Datos:', smsm);
        res.status(200).send(smsm)
    });
};

