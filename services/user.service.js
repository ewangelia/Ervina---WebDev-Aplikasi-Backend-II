const { databaseQuery } = require('../database');


//GET ALL PRAKTIKAN
const getPraktikan = async () => {
    try {
        const query = `SELECT * FROM praktikan_webdev`;
        // Return from SELECT query is an array of objects
        const result = await databaseQuery(query);
        return {
            count: result.rowCount,
            rows: result.rows,
        };
    } catch (error) {
        return error;
    }
}


//GET PRAKTIKAN BY NAME

const getPraktikanByName = async (nama) => {
    try {
        
        const query = `SELECT * FROM praktikan_webdev WHERE nama=$1`;
        const result = await databaseQuery(query, [nama]);


        return {
            count: result.rowCount,
            rows: result.rows,
        };
    } catch (error) {
        return error
    }
}


//GET PRAKTIKAN BY EMAIL&TELP
const getPraktikanByEmailTelp = async (email,telp) => {
    try {
        
        const query = `SELECT * FROM praktikan_webdev WHERE email=$1 AND telp=$2`;
        const result = await databaseQuery(query, [email, telp]);


        return {
            count: result.rowCount,
            rows: result.rows,
        };
    } catch (error) {
        return error
    }
}

//PATCH PRAKTIKAN BASED ON NAME
const updatePraktikan = async (nama, deskripsi) => {
    try {
        // This is not safe, but it's just an example
        const query = `UPDATE praktikan_webdev SET deskripsi=$1 WHERE nama=$2`;
        const result = await databaseQuery(query, [deskripsi, nama]);

    
        if (!result) {
            throw new Error('Error updating the description');
        }
        if (result.rowCount === 0) {
            throw new Error('Praktikan not found');
        }
        return {
            message: 'Praktikan updated successfully',
        };
    } catch (error) {
        return error
    }
}

// DELETE PRAKTIKAN BASED ON EMAIL
const deletePraktikan = async (email) => {
    try {
        const query = `DELETE FROM praktikan_webdev WHERE email=$1`;
        const result = await databaseQuery(query, [email]);


        if (!result) {
            throw new Error('Error deleting praktikan');
        }
        if (result.rowCount === 0) {
            throw new Error('Praktikan not found');
        }
        return {
            message: 'Praktikan deleted successfully',
        }; 
    } catch (error) {
        return error
    }
}


//CREATE PRAKTIKAN

const insertPraktikan = async (nama, jk, angkatan, email, telp, deskripsi) => {
    try {
        
        const query = `INSERT INTO praktikan_webdev (nama, jk, angkatan, email, telp, deskripsi) VALUES ($1,$2,$3,$4,$5,$6)`;
        const result = await databaseQuery(query, [nama, jk, angkatan, email, telp, deskripsi]);

        if (!result) {
            throw new Error('Error inserting Praktikan');
        }
        return {
            message: 'Praktikan inserted successfully',
        }; 
    } catch (error) {
        return error 
    }
}





module.exports =  {
    getPraktikan,
    getPraktikanByName,
    getPraktikanByEmailTelp,
    updatePraktikan,
    deletePraktikan,
    insertPraktikan
}