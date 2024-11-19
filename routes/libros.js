// const express = require('express');
// const router = express.Router();
// const Libro = require('../models/Libro');

// // Obtener todos los libros
// router.get('/', async (req, res) => {
//   try {
//     const libros = await Libro.findAll();
//     res.json(libros);
//   } catch (error) {
//     res.status(500).json({ error: 'Error al obtener los libros' });
//   }
// });

// // Obtener un libro por ID
// router.get('/:id', async (req, res) => {
//   try {
//     const libro = await Libro.findByPk(req.params.id);
//     if (libro) {
//       res.json(libro);
//     } else {
//       res.status(404).json({ error: 'Libro no encontrado' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Error al obtener el libro' });
//   }
// });

// router.post('/', async (req, res) => {
//   try {
//     const nuevoLibro = await Libro.create(req.body);
//     res.status(201).json(nuevoLibro);
//   } catch (error) {
//     res.status(500).json({ error: 'Error al crear el libro' });
//   }
// });

// router.put('/:id', async (req, res) => {
//   try {
//     const libro = await Libro.findByPk(req.params.id);
//     if (libro) {
//       await libro.update(req.body);
//       res.json(libro);
//     } else {
//       res.status(404).json({ error: 'Libro no encontrado' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Error al actualizar el libro' });
//   }
// });

// router.delete('/:id', async (req, res) => {
//   try {
//     const libro = await Libro.findByPk(req.params.id);
//     if (libro) {
//       await libro.destroy();
//       res.json({ message: 'Libro eliminado' });
//     } else {
//       res.status(404).json({ error: 'Libro no encontrado' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Error al eliminar el libro' });
//   }
// });

// module.exports = router;
