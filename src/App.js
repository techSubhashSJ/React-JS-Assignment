import React, { useState } from "react";
import data from "./data.json";
import Card from "./Card";
import Card2 from "./Card2";
import { AppstoreOutlined, MenuOutlined } from "@ant-design/icons";

const App = () => {
  const [userData, setUserData] = useState(data);
  const [toggle, setToggle] = useState(false);

  const handleDeleteUser = (userId) => {
    setUserData((udata) => udata.filter((user) => user.id !== userId));
  };

  return (
    <>
      <div className="toggle">
        <button className="toggle-button" onClick={() => setToggle((t) => !t)}>
          {toggle ? <AppstoreOutlined /> : <MenuOutlined />}
        </button>
      </div>
      {!toggle ? (
        <div className="App">
          {userData.map((user) => {
            return (
              <Card
                key={user.id}
                user={user}
                handleDeleteUser={handleDeleteUser}
              />
            );
          })}
        </div>
      ) : (
        <div className="App2">
          {userData.map((user) => {
            return (
              <Card2
                key={user.id}
                user={user}
                handleDeleteUser={handleDeleteUser}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default App;
