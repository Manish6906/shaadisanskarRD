// components/InputField.jsx
import React from "react";

const InputField = ({ label, name, type = "text", value, onChange, options = [] }) => {
  return (
    <div className="flex flex-col">
      <label className="block mb-1 text-sm font-medium">{label}</label>

      {type === "select" ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="border border-gray-300 rounded px-3 py-2 text-sm" // 👈 Added text-sm here
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="border border-gray-300 rounded px-3 py-2"
        />
      )}
    </div>
  );
};

export default InputField;
