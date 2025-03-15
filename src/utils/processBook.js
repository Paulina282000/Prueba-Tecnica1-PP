const processBooks = (csvText) => {
  const lines = csvText.split("\n").slice(1); // Ignorar la primera línea (encabezado)
  const books = [];
  const seenBooks = new Set();

  lines.forEach((line) => {
    let [title, author, year] = line.split(",");

    if (!title || title.trim() === "") return; // Ignorar si no hay título

    const cleanedTitle = title.trim().toLowerCase(); // Convertir título a minúsculas
    let cleanedAuthor = author && author.trim() !== "" ? author.trim() : "Autor Desconocido";
    let cleanedYear = parseInt(year, 10);

    // Si el año es inválido (NaN, negativo o mayor al actual), asignar 0
    if (isNaN(cleanedYear) || cleanedYear < 0 || cleanedYear > new Date().getFullYear()) {
      cleanedYear = 0;
    }

    // nombre autor: Primera letra en mayúscula, resto en minúsculas
    cleanedAuthor = cleanedAuthor
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");

    //  minúsculas para evitar duplicados
    const bookKey = `${cleanedTitle}-${cleanedAuthor.toLowerCase()}-${cleanedYear}`;

    if (!seenBooks.has(bookKey)) {
      seenBooks.add(bookKey);
      books.push({
        title: cleanedTitle.charAt(0).toUpperCase() + cleanedTitle.slice(1), // Capitalizar primera letra del título
        author: cleanedAuthor,
        year: cleanedYear,
      });
    }
  });

  return books;
};

export default processBooks;
