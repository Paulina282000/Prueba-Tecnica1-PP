import React from "react";

const BookTable = ({ books }) => {
  // Ordenar los libros lógicamente: Primero por autor, luego por año
  const sortedBooks = [...books].sort((a, b) => {
    if (a.author !== "Autor Desconocido" && b.author !== "Autor Desconocido") {
      return a.author.localeCompare(b.author) || a.year - b.year;
    } else if (a.author === "Autor Desconocido" && b.author === "Autor Desconocido") {
      return a.year - b.year; // Ordenar por año si no tienen autor
    } else {
      return a.author === "Autor Desconocido" ? 1 : -1; // Poner los "Autor Desconocido" al final
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
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.year === 0 ? 0 : book.year}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookTable;
