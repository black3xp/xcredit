/**
 * Rutas.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre: {
      type: 'string',
      required: true
    },
    descripcion: {
      type: 'string',
      required: false
    },
    deleted: {
      type: 'boolean',
      defaultsTo: false
    },
    direccion: {
      type: 'string',
      required: true
    },
    ciudad: {
      type: 'string',
      required: true
    },
    referencias: {
      type: 'string',
      required: false
    },
    diaCobro: {
      type: 'string',
      required: true
    },
    usuario: {
      model: 'Usuarios'
    },
  },

};

