import { useState, useEffect } from "react";

const AboutUs = () => {
  const [aboutUsData, setAboutUsData] = useState({});

  useEffect(() => {
    fetch("http://localhost:5002/about")
      .then(response => response.json()) 
      .then(data => {
        console.log("Fetched About Us Data:", data);
        setAboutUsData(data); 
      })
      .catch(error => console.error("Error fetching About Us data:", error));
  }, []); 

  return (
    <div>
      <h1>{aboutUsData.name}</h1>
      <p>{aboutUsData.description}</p>
      <img
        src={aboutUsData.imageUrl}
        alt="About Us"
        style={{ width: "300px", height: "auto" }}
      />
    </div>
  );
};

export default AboutUs;
