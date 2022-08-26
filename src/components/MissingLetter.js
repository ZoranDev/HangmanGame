const MissingLetter = ({ letter, active }) => {
  return (
    <div className="w-5 mr-1 mt-5 sm:w-10 sm:mr-3 sm:mt-10 uppercase text-xl sm:text-3xl text-white">
      {active === "active" ? letter : "_"}
    </div>
  );
};

export default MissingLetter;
