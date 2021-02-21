import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import logo from "../react.svg";

function Form() {
  const [name, setName] = useState();

  const addCrewMate = () => {
    axios
      .post("https://intense-chamber-61096.herokuapp.com/new", { name: name })
      .then(() => {
        console.log("success " + name);
      });
  };

  const [crewMateList, setCrewMateList] = useState([]);

  const getCrewMates = () => {
    axios
      .get("https://intense-chamber-61096.herokuapp.com/crew")
      .then((response) => {
        setCrewMateList(response.data);
      });
  };
  /** 
  const byeCrewMate = () => {
    axios.delete("http://localhost:3000/bye").then((response) => {
      setCrewMateList(response.data);
    });
  };
  */

  return (
    <div>
      <div className="mainDiv">
        <div className="formContainer">
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
          <div className="buttonContainer">
            <button className="button" onClick={addCrewMate && getCrewMates} >
              Ajouter
            </button>
            <button className="button" onClick={getCrewMates}>
              Actualiser l'équipage
            </button>
            {/*  
            <button className="button" onClick={byeCrewMate}>
              Supprimer l'équipage
            </button>
            */}
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
