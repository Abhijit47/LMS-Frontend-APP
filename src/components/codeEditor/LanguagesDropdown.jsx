import React from "react";
import Select from "react-select";
import { customStyles } from "../../constants/customEditorStyles";
import { languageOptions } from "../../constants/languageOptions";

const LanguagesDropdown = ({ onSelectChange }) => {
  return (
    <Select
      placeholder={`Filter by category`}
      options={languageOptions}
      styles={customStyles}
      defaultValue={languageOptions[0]}
      onChange={(selectedOption) => onSelectChange(selectedOption)}
    />
  );
};
export default LanguagesDropdown;
