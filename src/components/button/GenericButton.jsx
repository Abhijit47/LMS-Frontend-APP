import React from "react";

const GenericButton = ({ buttonName, isChecked, isLoading }) => {
  return (
    <div>
      <button type="submit" className="form-btn" disabled={!isChecked}>
        {isLoading ? "Submitting..." : buttonName}
      </button>
    </div>
  );
};

export default GenericButton;
