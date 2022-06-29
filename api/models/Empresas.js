/**
 * Empresas.js
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
    direccion: {
      type: 'string',
      required: true
    },
    telefono: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      required: true
    },
    usuarios: {
      collection: 'Usuarios',
      via: 'empresa'
    },
    porcientoInteres: {
      type: 'number',
      required: false,
      defaultsTo: 30
    },
    deleted: {
      type: 'boolean',
      defaultsTo: false
    },
    diaPago: {
      type: 'number',
      required: false,
      defaultsTo: 1
    },
    diaCorte: {
      type: 'number',
      required: false,
      defaultsTo: 1
    }
  },

};

