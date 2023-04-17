import ContactMeForm from "./contactMeForm";

const ContactMe = () => {
  return (
    <div className="bg-[#1F1F1A] py-12">
      <a name="contact-form"></a>
      <h2 className="uppercase text-slate-300 text-5xl text-center">
        Contact <span className="border-b-4 border-[#64644B]">Me</span>
      </h2>
      <div className="max-w-4xl mx-auto mt-20">
        <ContactMeForm />
      </div>
    </div>
  );
};

export default ContactMe;
