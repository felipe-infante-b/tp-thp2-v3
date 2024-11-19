const { Autor } = require('../models');

exports.createAutor = async (req, res) => {
  try {
    const nuevoAutor = await Autor.create(req.body);
    res.status(201).json(nuevoAutor);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el autor' });
  }
};

exports.getAllAutores = async (req, res) => {
  try {
    const autores = await Autor.findAll();
    res.status(200).json(autores);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los autores' });
  }
};

exports.getAutorById = async (req, res) => {
  try {
    const autor = await Autor.findByPk(req.params.id);
    if (autor) {
      res.status(200).json(autor);
    } else {
      res.status(404).json({ error: 'Autor no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el autor' });
  }
};

exports.updateAutor = async (req, res) => {
  try {
    const [updated] = await Autor.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const autorActualizado = await Autor.findByPk(req.params.id);
      res.status(200).json(autorActualizado);
    } else {
      res.status(404).json({ error: 'Autor no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el autor' });
  }
};

exports.deleteAutor = async (req, res) => {
  try {
    const deleted = await Autor.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Autor no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el autor' });
  }
};
