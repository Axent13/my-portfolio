import { useState } from "react";
import ContactMeForm from "./contactMeForm";
import SuccessToast from "./successToast";

const ContactMe = () => {
  const [isToastShown, setIsToastShown] = useState(false);

  const handleToastShowing = () => {
    setIsToastShown(true);

    setTimeout(() => {
      setIsToastShown(false);
    }, 4000);
  };

  return (
    <div className="bg-[#1F1F1A] py-12">
      {isToastShown && <SuccessToast isShown={isToastShown} />}
      <a name="contact-form"></a>
      <h2 className="uppercase text-slate-300 text-5xl text-center">
        Contact <span className="border-b-4 border-[#64644B]">Me</span>
      </h2>
      <div className="max-w-4xl mx-auto mt-20 px-8">
        <ContactMeForm onClickFunction={handleToastShowing} />
      </div>
    </div>
  );
};

export default ContactMe;
