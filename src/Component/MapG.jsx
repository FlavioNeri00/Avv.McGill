import React from "react";


const MapG = () => {
  const mappStyle = {
    width: "100%",
    height: "450px",
    border: "0px",
    marginTop: '20px',
    allowFullscreen: "",
    loading: "lazy",
    referrerPolicy: "no-referrer-when-downgrade",
  };

  return (
    <>
      <iframe
        style={mappStyle}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.886063677576!2d9.144183476745464!3d45.4519520342552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c3c533373881%3A0x5cf9741c57f3a6a7!2sVia%20Vespri%20Siciliani%2C%2020146%20Milano%20MI!5e0!3m2!1sit!2sit!4v1705846436345!5m2!1sit!2sit"
      ></iframe>
      
    </>
  );
};

export default MapG;