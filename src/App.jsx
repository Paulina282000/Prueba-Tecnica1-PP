import React, { useState } from "react";
import FileUpload from "./components/FileUpload";
import BookTable from "./components/BookTable";
import processBooks from "./utils/processBook";

const App = () => {
  const [books, setBooks] = useState([]);

  const handleFileUpload = (fileContent) => {
    const processedData = processBooks(fileContent);
    setBooks(processedData);
  };

  const handleClearBooks = () => {
    setBooks([]); 
    document.getElementById("fileInput").value = ""; 
  };

  return (
    <div className="app-container">
      <h1>📚 Biblioteca Digital</h1>

      {/* Componente de carga de archivos */}
      <FileUpload onFileUpload={handleFileUpload} />

      {/* Botón para limpiar la tabla */}
      {books.length > 0 && (
        <button onClick={handleClearBooks} className="clear-button">
          Limpiar y cargar nuevo archivo
        </button>
      )}

      {/* Tabla con los libros */}
      <BookTable books={books} />
    </div>
  );
};

export default App;

