"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/mensajes', (req, res) => {
    res.json({
        ok: true,
        mensaje: 'GET listo'
    });
});
router.get('/mensajes/:id', (req, res) => {
    const de = req.body.de;
    const cuerpo = req.body.cuerpo;
    const id = req.params.id;
    res.json({
        ok: true,
        mensaje: 'GET listo',
        id,
        de,
        cuerpo
    });
});
router.post('/mensajes', (req, res) => {
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    // 2 variables iguales, una de servidor y una de ruta, no es necesario pasar el campo
    // cuerpo: cuerpo, de: de
    res.json({
        ok: true,
        cuerpo,
        de,
    });
});
router.put('/mensajes/:id', (req, res) => {
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const id = req.body.id;
    // 2 variables iguales, una de servidor y una de ruta, no es necesario pasar el campo
    // cuerpo: cuerpo, de: de
    res.json({
        ok: true,
        mensaje: 'PUT listo',
        cuerpo,
        de,
        id
    });
});
router.delete('/mensajes/:id', (req, res) => {
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const id = req.body.id;
    // 2 variables iguales, una de servidor y una de ruta, no es necesario pasar el campo
    // cuerpo: cuerpo, de: de
    res.json({
        ok: true,
        mensaje: 'DELETE listo',
        id
    });
});
exports.default = router;
