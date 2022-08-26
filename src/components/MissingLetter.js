const MissingLetter = ({ letter, active }) => {
  return (
    <div className="w-10 mr-3 mt-10 uppercase text-3xl text-white">
      {active === "active" ? letter : "_"}
    </div>
  );
};

export default MissingLetter;
