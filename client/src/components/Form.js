import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import logo from "../react.svg";

function Form() {
  const [name, setName] = useState();
  const [crewMateList, setCrewMateList] = useState([]);

  const updateCrewMate = () => {
    axios
      .post("https://intense-chamber-61096.herokuapp.com/new", { name: name })
      .then(() => {
        console.log("success " + name);
      });
    setTimeout(1000);
    axios
      .get("https://intense-chamber-61096.herokuapp.com/crew")
      .then((response) => {
        setCrewMateList(response.data);
      });
  };

  useEffect(() => {
    axios
      .get("https://intense-chamber-61096.herokuapp.com/crew")
      .then((response) => {
        setCrewMateList(response.data);
      });
  }, []);


  document.getElementById("form").addEventListener({ name }, check);

  function check() {
    alert("Vous avez ajouté un membre");
  }

  return (
    <div>
      <div className="mainDiv">
        <div className="formContainer">
          <form id="form">
            <div className="firstField">
              <label className="formTitle">Ajouter un membre d'équipage</label>
              <input
                className="formField"
                type="text"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </div>
          </form>
          <div className="buttonContainer">
            <button className="button" onClick={updateCrewMate}>
              Ajouter
            </button>
          </div>
        </div>
      </div>
      <h1>Membre de l'équipage ✌</h1>
      <div className="crewContainer">
        {crewMateList.map((val, key) => {
          return (
            <div className="crewMember" key={val.id}>
              <div>
                <img className="reactLogo" src={logo} alt="crewLogo" />
              </div>
              <p>{val.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Form;
