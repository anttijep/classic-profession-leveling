import { useState } from "react";

const Toggle = ({ title, children }) => {
  const [fullInfo, setFullInfo] = useState();
  const toggleInfo = () => {
    setFullInfo(!fullInfo);
  };
  return (
    <div>
      <div>
        {title}
        <button onClick={toggleInfo}>{fullInfo ? ">" : "<"}</button>
      </div>
      {fullInfo && children}
    </div>
  );
};

export default Toggle;
