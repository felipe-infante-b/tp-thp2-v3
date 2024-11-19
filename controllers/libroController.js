const { Libro, Autor } = require('../models');

exports.getLibros = async (req, res) => {
  try {
    const libros = await Libro.findAll({ include: { model: Autor, as: 'autor' } });
    res.json(libros);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los libros' });
    console.log(error)
  }
};

exports.createLibro = async (req, res) => {
  try {
    const { titulo, genero, fechaPublicacion, autorId } = req.body;
    const libro = await Libro.create({ titulo, genero, fechaPublicacion, autorId });
    res.status(201).json(libro);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el libro' });
    console.log(error)
  }
};
