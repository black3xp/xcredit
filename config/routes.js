/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
    /*
    ==============================================================================
    |                                                                            |
                                    Usuarios                                        
    |                                                                            |
    ==============================================================================
    */
    'POST /api/v1/usuarios': 'UsuariosController.setUsuario',
    'GET /api/v1/usuarios': 'UsuariosController.getUsuarios',
    'GET /api/v1/usuarios/:id': 'UsuariosController.getUsuario',
    'PUT /api/v1/usuarios/:id': 'UsuariosController.updateUsuario',
    'DELETE /api/v1/usuarios/:id': 'UsuariosController.deleteUsuario',
    'POST /api/v1/login': 'UsuariosController.login'
};
