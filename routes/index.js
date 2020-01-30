const express = require('express');
const router = express.Router();

const clienteController = require('../controllers/clienteController');
const productosController = require('../controllers/productosController');
const pedidosController = require('../controllers/pedidosController');

const usuariosController = require('../controllers/usuariosController');

// middle para proteger las rutas
const auth = require('../middleware/auth');

module.exports = function() {
	
	// Agrega nuevos clientes vía POST
	router.post('/clientes', clienteController.nuevoCliente);

	// Obtener todos los clientes
	router.get('/clientes', 
		auth,
		clienteController.mostrarClientes
	);

	// Muestra un cliente en específico (ID)
	router.get('/clientes/:idCliente', 
		auth,
		clienteController.mostrarCliente
	);

	// Actualizar Cliente
	router.put('/clientes/:idCliente', 
		auth,
		clienteController.actualizarCliente
	);

	// Eliminar Cliente
	router.delete('/clientes/:idCliente', 
		auth,
		clienteController.eliminarCliente
	);

	/* PRODUCTOS */
	// Agrega nuevos productos
	router.post('/productos',
		auth,
		productosController.subirArchivo,
		productosController.nuevoProducto
	);

	// Muestra todos los productos
	router.get('/productos', 
		auth,
		productosController.mostrarProductos
	);

	// Muestra un Producto en específico (ID)
	router.get('/productos/:idProducto', 
		auth,
		productosController.mostrarProducto
	);

	// Actualizar Producto
	router.put('/productos/:idProducto', 
		auth,
		productosController.subirArchivo,
		productosController.actualizarProducto
	);

	// Eliminar Producto
	router.delete('/productos/:idProducto', 
		auth,
		productosController.eliminarProducto
	);

	// Busqueda de productos
	router.post('/productos/busqueda/:query', 
		auth,
		productosController.buscarProducto
	);

	/* PEDIDOS */
	// Agrega nuevos pedidos
	router.post('/pedidos/nuevo/:idUsuario', 
		auth,
		pedidosController.nuevoPedido
	);

	// Mostrar todos los pedidos
	router.get('/pedidos', 
		auth,
		pedidosController.mostrarPedidos
	);

	// Mostrar un pedidos por su ID
	router.get('/pedidos/:idPedido', 
		auth,
		pedidosController.mostrarPedido
	);

	// Actualizar pedidos
	router.put('/pedidos/:idPedido', 
		auth,
		pedidosController.actualizarPedido
	);

	// Eliminar pedido
	router.delete('/pedidos/:idPedido', 
		auth,
		pedidosController.eliminarPedido
	);

	// USUARIOS
	router.post('/crear-cuenta', 
		auth,
		usuariosController.registrarUsuario
	);

	router.post('/iniciar-sesion', usuariosController.autenticarUsuario
	);

	return router;
}