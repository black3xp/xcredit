/**
 * UsuariosController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const sign = require('jwt-encode');
const bcrypt = require('bcrypt');
module.exports = {
    setUsuario: async (req, res) => {
        const { nombres, apellidos, name, email, password } = req.body;
        if (!nombres || !apellidos || !name || !email || !password) {
            return res.badRequest({
                code: 'ERR_USER_CREATE',
                message: 'Faltan datos para crear el usuario'
            });
        }
        const usuario = await Usuarios.create({ nombres, apellidos, name, email, password }).fetch();
        return res.ok(usuario.id);
    },
    getUsuarios: async (req, res) => {
        const usuarios = await Usuarios.find();
        return res.ok(usuarios);
    },
    getUsuario: async (req, res) => {
        const { id } = req.params;
        const usuario = await Usuarios.findOne({ id });
        return res.ok(usuario);
    },
    updateUsuario: async (req, res) => {
        const { id } = req.params;
        const { nombres, apellidos, name, email, password } = req.body;
        if (!nombres || !apellidos || !name || !email || !password) {
            return res.badRequest({
                code: 'ERR_USER_UPDATE',
                message: 'Faltan datos para actualizar el usuario'
            });
        }
        const usuario = await Usuarios.update({ id }, { nombres, apellidos, name, email, password }).fetch();
        return res.ok(usuario);
    },
    deleteUsuario: async (req, res) => {
        const { id } = req.params;
        const usuario = await Usuarios.update({ id }, { deleted: true }).fetch();
        return res.ok(usuario);
    },
    login: async (req, res) => {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.badRequest({
                code: 'ERR_USER_LOGIN',
                message: 'Faltan datos para iniciar sesión'
            });
        }
        const usuario = await Usuarios.findOne({ email });
        if (!usuario) {
            return res.badRequest({
                code: 'ERR_USER_LOGIN',
                message: 'Usuario o contraseña incorrectos'
            });
        }
        if (!await bcrypt.compare(password, usuario.password)) {
            return res.badRequest({
                code: 'ERR_USER_LOGIN',
                message: 'La contraseña es incorrecta'
            });
        }
        const token = sign({
                id: usuario.id,
                name: usuario.name,
                email: usuario.email,
                nombres: usuario.nombres,
                apellidos: usuario.apellidos
            }, 
                sails.config.session.secret,
            );
        return res.ok({ token });
    }
};

