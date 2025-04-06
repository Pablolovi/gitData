import React from "react";
import '../styles/SearchInput.css'; // Importar el CSS específico del SearchInput

function SearchInput({ username, onChange }) {
    return (
      <input
        className="search-input"
        type="text"
        placeholder="Buscar usuario..."
        value={username}
        onChange={onChange}
      />
    );
  }

export default SearchInput;