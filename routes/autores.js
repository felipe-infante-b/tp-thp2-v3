// // routes/autores.js
// const express = require('express');
// const router = express.Router();
// const autorController = require('../controllers/autorController');

// // Ruta para crear un nuevo autor
// router.post('/', autorController.createAutor);

// // Ruta para obtener todos los autores
// router.get('/', autorController.getAllAutores);

// // Ruta para obtener un autor por ID
// router.get('/:id', autorController.getAutorById);

// // Ruta para actualizar un autor por ID
// router.put('/:id', autorController.updateAutor);

// // Ruta para eliminar un autor por ID
// router.delete('/:id', autorController.deleteAutor);

// module.exports = router;


// ------------------------------------------



// const express = require('express');
// const router = express.Router();
// const Autor = require('../models/Autor');

// // Obtener todos los autores
// router.get('/', async (req, res) => {
//   try {
//     const autores = await Autor.findAll();
//     res.json(autores);
//   } catch (error) {
//     res.status(500).json({ error: 'Error al obtener los autores' });
//   }
// });

// // Obtener un autor por ID
// router.get('/:id', async (req, res) => {
//   try {
//     const autor = await Autor.findByPk(req.params.id);
//     if (autor) {
//       res.json(autor);
//     } else {
//       res.status(404).json({ error: 'Autor no encontrado' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Error al obtener el autor' });
//   }
// });

// router.post('/', async (req, res) => {
//     try {
//       const nuevoAutor = await Autor.create({
//         nombre: req.body.nombre,
//         apellido: req.body.apellido,
//         fechaNacimiento: req.body.fechaNacimiento,
//       });
//       res.status(201).json(nuevoAutor);
//     } catch (error) {
//       console.error(error); // Ver el error detallado en la consola
//       res.status(500).json({ error: 'Error al crear el autor aqui' });
//     }
//   });

// router.put('/:id', async (req, res) => {
//   try {
//     const autor = await Autor.findByPk(req.params.id);
//     if (autor) {
//       await autor.update(req.body);
//       res.json(autor);
//     } else {
//       res.status(404).json({ error: 'Autor no encontrado' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Error al actualizar el autor' });
//   }
// });

// router.delete('/:id', async (req, res) => {
//   try {
//     const autor = await Autor.findByPk(req.params.id);
//     if (autor) {
//       await autor.destroy();
//       res.json({ message: 'Autor eliminado' });
//     } else {
//       res.status(404).json({ error: 'Autor no encontrado' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Error al eliminar el autor' });
//   }
// });

// module.exports = router;
