import React,{useEffect,useRef,useContext} from "react";
import classes from "./Cockpit.css";
import AuthContext from "../../context/auth-context";

const cockpit = (props) => {
  const authContext = useContext(AuthContext);
  const toggleBtnRef = useRef(null);
    useEffect(() => {
      console.log('useEfect');
      // setTimeout(() =>{
      //   alert("Save data to cloud");
      // },1000);
      toggleBtnRef.current.click();
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
      <button ref={toggleBtnRef} className={btnclass} onClick={props.togglePerson}>
        Show Person
      </button>
       <button onClick={authContext.login}>Login</button>
    </div>
  );
};

export default React.memo(cockpit);
