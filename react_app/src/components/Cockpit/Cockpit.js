import React,{useEffect} from "react";
import classes from "./Cockpit.css";

const cockpit = (props) => {

    useEffect(() => {
      console.log('useEfect');
      setTimeout(() =>{
        alert("Save data to cloud");
      },1000);

    },[]);

  const assigned = [];
  let btnclass = "";

  if (props.persons.length <= 2) assigned.push(classes.red);
  if (props.persons.length <= 1) assigned.push(classes.bold);
  if (props.showPersons) {
    btnclass = classes.Red;
  }
  return (
    <div className={classes.Cockpit}>
      <p className={assigned.join(" ")}>Hi i am Jaswwant.</p>
      <button className={btnclass} onClick={props.togglePerson}>
        Show Person
      </button>
    </div>
  );
};

export default React.memo(cockpit);
