import React, { useEffect } from "react";
import { Auth } from "aws-amplify";

import SecurePart from "./secure";
import Crud from "./edit_data";

const App = () => {
  useEffect(function async() {
    getData();
  }, []);

  const getData = async () => {
    const user = await Auth.currentAuthenticatedUser();
    console.log("user:", user);
    console.log("user info:", user.signInUserSession.idToken.payload);
  };

  return (
    <div style={{ margin: 100, color: "green" }}>
      This is the public part
      <Crud />
      <div style={{ marginTop: 100, color: "red" }}>
        <SecurePart />
      </div>
    </div>
  );
};

export default App;
