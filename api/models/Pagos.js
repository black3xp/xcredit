/**
 * Pagos.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    monto: {
      type: 'number',
      required: true
    },
    interes: {
      type: 'number',
      required: true
    },
    numeroCuota: {
      type: 'number',
      required: true
    },
    fecha: {
      type: 'string',
      required: true
    },
    prestamo: {
      model: 'Prestamos'
    },
    usuario: {
      model: 'Usuarios'
    },
    deleted: {
      type: 'boolean',
      defaultsTo: false
    },
    estado: {
      type: 'string',
      isIn: ['pendiente', 'pagado', 'cancelado'],
      defaultsTo: 'Pendiente'
    }
  },

};

