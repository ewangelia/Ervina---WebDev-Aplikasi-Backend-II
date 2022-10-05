const { param, body } = require('express-validator');
const { validator } = require('./validator');


const getPraktikanByName  = [
    param('nama').isLength({min: 8}),
    validator
]

const getPraktikanByEmailTelp = [
param('email').isEmail(),
param('telp').isLength({max: 12}),
validator

]
const insertPraktikan =  [
    body('nama').isLength({min: 8}),
    body('jk').isIn(['L','P']),
    body('angkatan').isNumeric({gt : 2018}),
    body('email').isEmail(),
    body('telp').isLength({min: 12}),
    body('deskripsi').not().isEmpty().withMessage('Deskripsi wajib diisi'),
    validator
]

const deletePraktikan = [
    body('email').isEmail(),
    validator
]

const updatePraktikan = [
    body('nama').isLength({min: 8}),
    body('deskripsi').not().isEmpty().withMessage('Deskripsi wajib diisi'),
    validator
]

module.exports = {
    getPraktikanByName,
    getPraktikanByEmailTelp,
    updatePraktikan,
    deletePraktikan,
    insertPraktikan
}
