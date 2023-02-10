import React, { useState } from "react";
import LifecycleMethod from "./LifecycleMethod";
import SuspenseData from "./SuspenseData";
import HOC from "./HOC";

import User from "./User";
const App = () => {
  // state variable, method to update it
  const [firstName, setFirstName] = useState("alina");
  const [age, setAge] = useState(20);
  const [user, setUser] = useState({
    name: "alex",
    designation: "developer",
  });

  const [arr, setArr] = useState([90, 20, 30]);
  const [emp, setEmp] = useState([
    {
      id: 1,
      salary: 90090,
    },
    {
      id: 2,
      salary: 1098290,
    },
  ]);

  const handleChange = () => {
    setFirstName("alex");
    setAge(30);
    setUser({ ...user, designation: "manager" });
    setArr([...arr, 10, 10]);

    //updating array of object
    const empData = [...emp];
    empData[0].salary = 20000;
    setEmp(empData);
  };

  return (
    <>
      <SuspenseData />
      <p>{firstName}</p>
      <p>{age}</p>

      <h2>Object</h2>
      <p>{user.name}</p>
      <p>{user.designation}</p>

      <h2>Array</h2>
      {arr.map((a) => a)}

      <h2>Array of objects</h2>
      {emp.map((e) => {
        return (
          <React.Fragment key={e.id}>
            <p>{e.salary}</p>
          </React.Fragment>
        );
      })}

      <button onClick={() => setFirstName("alex")}>Update String</button>

      <button onClick={() => setAge(30)}>Update Number</button>

      <button onClick={() => setUser({ ...user, designation: "manager" })}>
        Update Object
      </button>

      <button onClick={() => setArr([...arr, 10, 10])}>Update Array</button>

      <button onClick={handleChange}>Update</button>

      <LifecycleMethod />
      <User />
    </>
  );
};

export default HOC(App);

// const a = 20;
// a = 30;

// const arr = [90, 10, 20];
// arr[0] = 200;

//3 ways to make js async
//callback
//promises - ES6
//async await - ES7
