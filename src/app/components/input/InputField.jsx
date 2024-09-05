'use client';
import React, { useState } from "react";

const InputField = ({ value, label, placeholder, type, onChange }) => {

  const handleChange = (e) => {
    const { value } = e.target;
    onChange(value);
  };

  return (
    <div className="form-group">
      {label && <label className="block text-[20px] font-medium" htmlFor="input-field">{label}</label>}
      <input
        type={type}
        value={value}
        className="form-control w-full mt-1 bg-[#EFF0F2] h-[65px] pl-[29px]"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputField;