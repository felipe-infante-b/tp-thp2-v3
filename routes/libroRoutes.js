const express = require('express');
const { getLibros, createLibro, updateLibro, deleteLibro } = require('../controllers/libroController');

const router = express.Router();

router.get('/', getLibros);
router.post('/', createLibro);
router.put('/:id', updateLibro);
router.delete('/:id', deleteLibro);

module.exports = router;
