/**
 * Clientes.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombres: {
      type: 'string',
      required: true
    },
    apellidos: {
      type: 'string',
      required: true
    },
    cedula: {
      type: 'string',
      required: true,
      unique: true
    },
    telefono: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      required: true,
      unique: true
    },
    direccion: {
      type: 'string',
      required: true
    },
    deleted: {
      type: 'boolean',
      defaultsTo: false
    },
    empresa: {
      model: 'Empresas'
    },
    usuario: {
      model: 'Usuarios'
    }
  },

  // beforeCreate: (values, next) => {
    
  // }

};

