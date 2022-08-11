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
    apodo: {
      type: 'string',
      required: false
    },
    documentoIdentidad: {
      type: 'string',
      required: true,
      unique: true
    },
    fechaNacimiento: {
      type: 'ref',
      columnType: 'date'
    },
    ocupacion: {
      type: 'string',
      required: false
    },
    telefonos: {
      type: 'json',
      columnType: 'array',
    },
    nacionalidad: {
      type: 'string',
      required: false
    },
    sexo: {
      type: 'string',
      isIn: ['M', 'F'],
      defaultsTo: 'M'
    },
    tipoVivienda: {
      type: 'string',
      isIn: ['Propia', 'Alquilada', 'Familiar'],
    },
    estadoLaboral: {
      type: 'string',
      isIn: ['Empleado', 'Estudiante', 'Independiente', 'Desempleado'],
    },
    estadoCivil: {
      type: 'string',
      isIn: ['Soltero', 'Casado', 'Viudo', 'Divorciado', 'Union Libre'],
    },
    ingresos: {
      type: 'number',
      required: true,
    },
    dependientes: {
      type: 'number',
      required: true,
    },
    provincia: {
      type: 'string',
    },
    municipio: {
      type: 'string',
    },
    sector: {
      type: 'string',
    },
    recomendadoPor: {
      model: 'Clientes'
    },
    ruta: {
      model: 'Rutas'
    },
    foto: {
      model: 'Fotos'
    },
    firma: {
      model: 'Firmas'
    },
    email: {
      type: 'string',
      required: false,
    },
    garante: {
      type: 'json',
      columnType: 'object',
    },
    datosBancarios: {
      type: 'json',
      columnType: 'object',
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
    },
    prestamos: {
      collection: 'Prestamos',
      via: 'cliente'
    }
  },

  // beforeCreate: (values, next) => {
    
  // }

};

