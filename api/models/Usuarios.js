/**
 * Usuarios.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
const bcrypt = require('bcrypt');

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
    name: {
      type: 'string',
      required: true,
      unique: true
    },
    email: {
      type: 'string',
      required: true,
      unique: true
    },
    password: {
      type: 'string',
      required: true
    },
    deleted: {
      type: 'boolean',
      defaultsTo: false
    }
  },

  beforeCreate: (values, next) => {
    bcrypt.hash(values.password, 10, (err, hash) => {
      if (err) return next(err);
      values.password = hash;
      next();
    });
  }

};

