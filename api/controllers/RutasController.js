/**
 * RutasController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    setRuta: async (req, res) => {
        const { nombre, descripcion, direccion, ciudad, referencias, diaCobro, usuario } = req.body;
        console.log({
            nombre,
            descripcion,
            direccion,
            ciudad,
            referencias,
            diaCobro,
            usuario
        });
        if (!nombre || !direccion || !ciudad || !diaCobro || !usuario) {
            return res.badRequest({
                code: 'ERR_RUTA_CREATE',
                message: 'Faltan datos para crear la ruta'
            });
        }
        const ruta = await Rutas.create({ nombre, descripcion, direccion, ciudad, referencias, diaCobro, usuario }).fetch();

        if(!ruta) {
            return res.badRequest({
                code: 'ERR_RUTA_CREATE',
                message: 'Error al crear la ruta'
            });
        }

        return res.ok(ruta.id);
    },
    getRutas: async (req, res) => {
        const { b } = req.query;
        const rutas = await Rutas.find({
            where: {
                deleted: false,
                
            }
        });
        return res.ok(rutas);
    },
    getRutaById: async (req, res) => {
        const { id } = req.params;
        const ruta = await Rutas.findOne({ id });
        return res.ok(ruta);
    },
    updateRuta: async (req, res) => {
        const { id } = req.params;
        const { nombre, descripcion, direccion, ciudad, referencias, diaCobro } = req.body;
        if (!nombre || !descripcion || !direccion || !ciudad || !referencias || !diaCobro) {
            return res.badRequest({
                code: 'ERR_RUTA_UPDATE',
                message: 'Faltan datos para actualizar la ruta'
            });
        }
        const ruta = await Rutas.update({ id }, { nombre, descripcion, direccion, ciudad, referencias, diaCobro }).fetch();
        return res.ok(ruta);
    },
    deleteRuta: async (req, res) => {
        const { id } = req.params;
        const ruta = await Rutas.update({ id }, { deleted: true }).fetch();
        return res.ok(ruta);
    },
    activateRuta: async (req, res) => {
        const { id } = req.params;
        const ruta = await Rutas.update({ id }, { deleted: false }).fetch();
        return res.ok(ruta);
    }
};

