import React from "react";
import DOMPurify from "dompurify"; 

const BookTable = ({ books }) => {
  //  sanitizar los datos, buscando prevenir ataques XSS
  const sanitizeText = (text) => {
    return DOMPurify.sanitize(text);
  };

  // Ordenar los libros lógicamente, por autor y luego por año de publicacion, y por año si hay un autor con mas de un libro
  const sortedBooks = [...books].sort((a, b) => {
    if (a.author !== "Autor Desconocido" && b.author !== "Autor Desconocido") {
      return a.author.localeCompare(b.author) || a.year - b.year;
    } else if (a.author === "Autor Desconocido" && b.author === "Autor Desconocido") {
      return a.year - b.year; 
    } else {
      return a.author === "Autor Desconocido" ? 1 : -1; 
    }
  });

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Título</th>
          <th>Autor</th>
          <th>Año de Publicación</th>
        </tr>
      </thead>
      <tbody>
        {sortedBooks.map((book, index) => (
          <tr key={index}>
            <td>{sanitizeText(book.title)}</td>
            <td>{sanitizeText(book.author)}</td>
            <td>{book.year === 0 ? 0 : book.year}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookTable;
