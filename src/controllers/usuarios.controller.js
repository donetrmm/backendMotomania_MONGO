const usuarioModel = require('../models/usuarios.model');
const  create = async (req, res) =>{
    try{
        let usuario = new usuarioModel({
            nombre: req.body.nombre,
            email: req.body.email,
            password: req.body.password
        })
    
        await usuario.save();
        
        return res.status(201).json({ message: "Usuario creado exitosamente." });
    } catch(error) {
        return res.status(error.code).json({
            message: "Falló al crear usuario!",
            error: error.message
        })
    }
}


module.exports = {
    create: create,
}