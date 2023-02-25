const express = require('express')
const router = express.Router()
const productoController =   require('../controllers/productos'); 

// Multer (Subida de imágenes de los productos)
const multer = require('multer'); 
var img;
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: function(req, file, callback) {
    img = Date.now()+'-'+file.originalname; 
    callback(null, img);
  }
}); 
var upload = multer({ storage: storage }) 

// Ruta para listar todos los productos 
router.get('/', productoController.findAll);

// Ruta para crear un nuevo producto 
router.post('/', upload.single('img'), productoController.create);

// Ruta para leer un producto por su ID 
router.get('/:id', productoController.findById);

// Ruta para actualizar un producto por su ID 
router.post('/:id', upload.single('img'), productoController.update);

// Ruta para eliminar un producto por su ID 
router.post('/eliminar/:id', productoController.delete); 

module.exports = router 