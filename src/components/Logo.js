import React from "react";

const Logo = () => {
  return (
    <div className="logo">
      {/* Imported pictures from IMG elements are accessible in public */}
      <img src="./logo192.png" alt="Logo React" />
      <h3>React World</h3>
    </div>
  );
};

export default Logo;
