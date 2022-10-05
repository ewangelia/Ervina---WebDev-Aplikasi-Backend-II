const { userServices } = require('../services');
const { responseHelper } = require('../helper');

const getPraktikan = async (req, res) => {
    try {

        const user = await userServices.getPraktikan();
        if(user instanceof Error) {
            throw new Error(user);
        } 
        res.status(responseHelper.status.success).json(user);
        
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}
const getPraktikanByName = async (req, res) => {
    try {
        const { nama } = req.params;
        const user = await userServices.getPraktikanByName(user);
        res.status(responseHelper.status.success).json(user);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}
const getPraktikanByEmailTelp = async (req, res) => {
    try {
        const { email, telp } = req.params;
        const user = await userServices.getPraktikanByEmailTelp(email,telp);
        res.status(responseHelper.status.success).json(user);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}
const deletePraktikan = async (req, res) => {
    try {
        const { email } = req.body;
        const result = await userServices.deletePraktikan(email);
        if(result instanceof Error) {
            throw new Error(result);
        }
        res.status(responseHelper.status.success).json(result);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}
const updatePraktikan = async (req, res) => {
    try {
        const { nama, deskripsi } = req.body;
        const result = await userServices.updatePraktikan(nama, deskripsi);
        if(result instanceof Error) {
            throw new Error(result);
        }
        res.status(responseHelper.status.success).json(result);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}
const insertPraktikan = async (req, res) => {
    try {
        const { nama, jk, angkatan, email, telp, deskripsi } = req.body;
        const result = await userServices.insertPraktikan( nama, jk, angkatan, email, telp, deskripsi );
        if(result instanceof Error) {
            throw new Error(result);
        }
        res.status(responseHelper.status.success).json(result);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}

module.exports = {
    getPraktikan,
    getPraktikanByName,
    getPraktikanByEmailTelp,
    updatePraktikan,
    deletePraktikan,
    insertPraktikan
}