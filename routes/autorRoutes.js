const express = require('express');
const { getAutores, createAutor } = require('../controllers/autorController');

const router = express.Router();

router.get('/', getAutores);
router.post('/', createAutor);

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

// router.post('/', async (req, res) => {
//   try {
//     const nuevoAutor = await Autor.create(req.body);
//     res.status(201).json(nuevoAutor);
//   } catch (error) {
//     res.status(500).json({ error: 'Error al crear el autor' });
//   }
// });

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
