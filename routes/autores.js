// routes/autores.js
const express = require('express');
const router = express.Router();
const autorController = require('../controllers/autorController');

router.post('/', autorController.createAutor);

router.get('/', autorController.getAllAutores);

router.get('/:id', autorController.getAutorById);

router.put('/:id', autorController.updateAutor);

router.delete('/:id', autorController.deleteAutor);

module.exports = router;


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

// // router.post('/', async (req, res) => {
// //   try {
// //     const nuevoAutor = await Autor.create(req.body);
// //     res.status(201).json(nuevoAutor);
// //   } catch (error) {
// //     res.status(500).json({ error: 'Error al crear el autor' });
// //   }
// // });

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
