const express = require('express');
const { getLibros, createLibro, updateLibro, deleteLibro, getLibro } = require('../controllers/libroController');

const router = express.Router();

router.get('/', getLibros);
router.get('/:id', getLibro);
router.post('/', createLibro);
router.put('/:id', updateLibro);
router.delete('/:id', deleteLibro);

module.exports = router;
