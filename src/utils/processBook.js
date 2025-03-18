const processBooks = (csvText) => {
  const lines = csvText.split("\n").slice(1); // Ignorar la primera línea del csv
  const books = []; 
  const seenBooks = new Set();

  lines.forEach((line) => {
    let [title, author, year] = line.split(",");

    if (!title || title.trim() === "") return; // Ignorar si no hay título, ya que no se puede identificar el libro

    const cleanedTitle = title.trim().toLowerCase(); // Convertir título a minúsculas
    let cleanedAuthor = author && author.trim() !== "" ? author.trim() : "Autor Desconocido";
    let cleanedYear = parseInt(year, 10);

    // Si el año es inválido (NaN, negativo o mayor al actual), asignar 0 . cumple consigna
    if (isNaN(cleanedYear) || cleanedYear < 0 || cleanedYear > new Date().getFullYear()) {
      cleanedYear = 0;
    }

    // Normaliza el nombre del autor (primera letra en mayúscula, resto en minúsculas). No especificaba el formato el enunciado
    cleanedAuthor = cleanedAuthor
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");

    // Crear una clave única en minuscula para evitar duplicados
    const bookKey = `${cleanedTitle}-${cleanedAuthor.toLowerCase()}-${cleanedYear}`;

    if (!seenBooks.has(bookKey)) {
      seenBooks.add(bookKey);
      books.push({
        title: cleanedTitle.charAt(0).toUpperCase() + cleanedTitle.slice(1), // agrega mayusculas a las letras capitales
        author: cleanedAuthor,
        year: cleanedYear,
      });
    }
  });

  return books;
};

export default processBooks;

