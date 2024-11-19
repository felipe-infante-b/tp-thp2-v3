const { Libro } = require('../models');
const Autor = require('../models');

// exports.createLibro = async (req, res) => {
//   try {
//     const nuevoLibro = await Libro.create(req.body);
//     res.status(201).json(nuevoLibro);
//   } catch (error) {
//     res.status(500).json({ error: 'Error al crear el libro' });
//   }
// };

exports.createLibro = async (req, res) => {
      try {
        const nuevoLibro = await Libro.create({
          titulo: req.body.titulo,
          genero: req.body.genero,
          fechaPublicacion: req.body.fechaPublicacion,
          autorId: req.body.autorId,
        });
        res.status(201).json(nuevoLibro);
      } catch (error) {
        console.error(error); // Ver el error detallado en la consola
        res.status(500).json({ error: 'Error al crear el libro aqui' });
      }
  }

exports.getAllLibros = async (req, res) => {
  try {
    const libros = await Libro.findAll();
    res.status(200).json(libros);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los libros' });
  }
};

exports.getLibroById = async (req, res) => {
  try {
    const libro = await Libro.findByPk(req.params.id);
    if (libro) {
      res.status(200).json(libro);
    } else {
      res.status(404).json({ error: 'Libro no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el libro' });
  }
};

exports.updateLibro = async (req, res) => {
  try {
    const [updated] = await Libro.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const libroActualizado = await Libro.findByPk(req.params.id);
      res.status(200).json(libroActualizado);
    } else {
      res.status(404).json({ error: 'Libro no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el libro' });
  }
};

exports.deleteLibro = async (req, res) => {
  try {
    const deleted = await Libro.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Libro no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el libro' });
  }
};
