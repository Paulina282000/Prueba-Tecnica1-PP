import React from "react";

const MAX_FILE_SIZE = 2 * 1024 * 1024; //el maximo se establece en 2MB, extra

const FileUpload = ({ onFileUpload }) => {
  //SHA-256 usando la API Web Crypto
  const hashData = async (data) => {
    const encoder = new TextEncoder();
    const encodedData = encoder.encode(data);
    const hashBuffer = await crypto.subtle.digest("SHA-256", encodedData);
    return Array.from(new Uint8Array(hashBuffer))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    if (!file) return;

    // Verificar si el archivo supera los 2MB
    if (file.size > MAX_FILE_SIZE) {
      alert("Error: El archivo CSV es demasiado grande (máximo 2MB).");
      return;
    }

    const reader = new FileReader();
    reader.onload = async (e) => {
      const content = e.target.result;

      // Generar hash y se fija la integridad
      const fileHash = await hashData(content);
      console.log("Hash del archivo:", fileHash);

      onFileUpload(content);
    };
    reader.readAsText(file);
  };

  return (
    <div>
      <label htmlFor="fileInput" className="upload-label">
        Seleccionar archivo
      </label>
      <input type="file" id="fileInput" accept=".csv" onChange={handleFileChange} />
    </div>
  );
};

export default FileUpload;

