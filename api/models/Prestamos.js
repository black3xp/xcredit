/**
 * Prestamos.js
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
    cuotas: {
      type: 'number',
      required: true
    },
    fecha: {
      type: 'string',
      required: true
    },
    cliente: {
      model: 'Clientes'
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
      enum: ['pendiente', 'pagado', 'cancelado'],
      defaultsTo: 'Pendiente'
    },
    cuotasPagadas: {
      type: 'number',
      defaultsTo: 0
    },
    cuotasPendientes: {
      type: 'number',
      defaultsTo: 0
    },
    cuotasCanceladas: {
      type: 'number',
      defaultsTo: 0
    },
    pagos: {
      collection: 'Pagos',
      via: 'prestamo'
    },
    ruta: {
      model: 'Rutas'
    }
  },

};

