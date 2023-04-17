import { useState, useEffect } from "react";
import { validator } from "../../utils/validator";
import TextField from "../common/textField";
import TextAreaField from "../common/textAreaField";

const ContactMeForm = () => {
  const [data, setData] = useState({});

  const [errors, setErrors] = useState({});

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const validatorConfig = {
    name: {
      isRequired: {
        message: "Name is required",
      },
    },
    email: {
      isRequired: {
        message: "Email is required",
      },
      isEmail: {
        message: "Email is incorrect",
      },
    },
    message: {
      isRequired: {
        message: "Please, type your message here",
      },
    },
  };

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;

    console.log(data);
  };

  return (
    <form
      className="rounded-lg border-2 border-[#64644B] p-12"
      onSubmit={handleSubmit}
    >
      <TextField
        label="Name"
        name="name"
        value={data.name}
        onChange={handleChange}
        error={errors.name}
      />
      <TextField
        label="Email"
        name="email"
        value={data.email}
        onChange={handleChange}
        error={errors.email}
      />
      <TextAreaField
        label="Message"
        name="message"
        value={data.message}
        onChange={handleChange}
        error={errors.message}
      />
      <div className="mt-12 flex justify-center">
        <button
          className="py-4 px-8 text-2xl uppercase text-gray-300 font-medium border-2 rounded flex items-center transition-colors bg-[#64644B] border-[#64644B] hover:border-[#a7a785] hover:bg-[#50503c] hover:text-[#c7c79f] cursor-pointer"
          type="submit"
          disabled={!isValid}
        >
          Contact me
        </button>
      </div>
    </form>
  );
};

export default ContactMeForm;
