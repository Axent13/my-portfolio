import PropTypes from "prop-types";

const SuccessToast = ({ isShown = false }) => {
  return (
    <div
      className={
        "fixed w-96 mx-auto bottom-4 left-1/2 -translate-x-1/2 bg-slate-800 rounded-md text-xl p-6 text-center text-slate-300 border border-slate-400 opacity-0" +
        (isShown ? " animate-toast" : "")
      }
    >
      <p className="font-semibold mb-3">Thank you for your message!</p>
      <p>I'll contact you soon!</p>
    </div>
  );
};

SuccessToast.propTypes = {
  isShown: PropTypes.bool,
};

export default SuccessToast;
