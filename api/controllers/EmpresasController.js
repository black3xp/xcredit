/**
 * EmpresasController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    setEmpresa: async (req, res) => {
        const { nombre, direccion, ciudad, telefono, email, porcientoInteres, usuario } = req.body;
        console.log({
            nombre,
            direccion,
            ciudad,
            telefono,
            email,
        });
        if (!nombre || !direccion || !ciudad || !telefono || !email || !porcientoInteres || !usuario) {
            return res.badRequest({
                code: 'ERR_EMPRESA_CREATE',
                message: 'Faltan datos para crear la empresa'
            });
        }
        const empresa = await Empresas.create({ nombre, direccion, ciudad, telefono, email, porcientoInteres, usuario }).fetch();

        if (!empresa) {
            return res.badRequest({
                code: 'ERR_EMPRESA_CREATE',
                message: 'Error al crear la empresa'
            });
        }

        return res.ok(empresa.id);
    }
};

