import React from "react";

const FileUpload = ({ onFileUpload }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        onFileUpload(content);
      };
      reader.readAsText(file);
    }
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
