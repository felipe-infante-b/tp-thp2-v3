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

exports.getLibro = async (req, res) => {
  try {
    const libro = await Libro.findByPk(req.params.id, { include: { model: Autor, as: 'autor' } });

    if (libro) {
      res.json(libro);
    } else {
      res.status(404).json({ error: 'Libro no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el libro' });
    console.log(error);
  }
};

exports.createLibro = async (req, res) => {
  try {
    const { titulo, descripcion, fechaPublicacion, autorId } = req.body;
    const libro = await Libro.create({ titulo, descripcion, fechaPublicacion, autorId });
    res.status(201).json(libro);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el libro' });
    console.log(error)
  }
};

exports.updateLibro = async (req, res) => {
  try {
        const libro = await Libro.findByPk(req.params.id);
        if (libro) {
          await libro.update(req.body);
          res.json(libro);
        } else {
          res.status(404).json({ error: 'Libro no encontrado' });
        }
      } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el libro' });
        console.log(error);
      }
};

exports.deleteLibro = async (req, res) => {
  try {
        const libro = await Libro.findByPk(req.params.id);
        if (libro) {
          await libro.destroy();
          res.json({ message: 'Libro eliminado' });
        } else {
          res.status(404).json({ error: 'Libro no encontrado' });
        }
      } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el libro' });
      }
}
