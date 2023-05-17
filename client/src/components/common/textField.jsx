import React from "react";
import PropTypes from "prop-types";

const TextField = ({ label, type = "text", name, value, onChange, error }) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };

  const getInputClasses = () => {
    return (
      "w-full text-[#64644B] text-2xl bg-[#141411] border-b-2 border-[#64644B] pt-3 px-2 outline-none" +
      (error ? " border-[#babb6c]" : "")
    );
  };

  return (
    <div>
      <label className="text-slate-300 text-2xl rounded" htmlFor={name}>
        {label}
      </label>
      <div className="mt-4 mb-10">
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          className={getInputClasses()}
        />
        {error && <div className="text-[#babb6c] text-xl">{error}</div>}
      </div>
    </div>
  );
};

TextField.defaultProps = {
  type: "text",
};

TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
};

export default TextField;
