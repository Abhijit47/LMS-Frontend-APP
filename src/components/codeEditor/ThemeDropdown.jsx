import React from "react";
import Select from "react-select";
import monacoThemes from "monaco-themes/themes/themelist.json";
import { customStyles } from "../../constants/customEditorStyles";

const ThemeDropdown = ({ handleThemeChange, theme }) => {
  return (
    <Select
      placeholder={`Select theme`}
      options={Object.entries(monacoThemes).map(([themeId, themeName]) => ({
        label: themeName,
        value: themeId,
        key: themeId,
      }))}
      value={theme}
      styles={customStyles}
      onChange={handleThemeChange}
    />
  );
};

export default ThemeDropdown;
