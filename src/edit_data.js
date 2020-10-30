import React, { useState } from "react";
import { API, graphqlOperation } from "aws-amplify";

import { createTestTalk as CreateTestTalk } from "./graphql/mutations";

import Subs from "./subs";

const { v4: uuidv4 } = require("uuid");

const CLIENT_ID = uuidv4();

const Crud = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const createTalk = async () => {
    if (name === "" || description === "") return;
    const talk = {
      name,
      description,
      clientId: CLIENT_ID,
    };
    try {
      await API.graphql(graphqlOperation(CreateTestTalk, { input: talk }));
      console.log("item created!");
      setName("");
      setDescription("");
    } catch (err) {
      console.log("error creating talk...", err);
    }
  };
  const onChange = (event) => {
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        return;
      case "description":
        setDescription(event.target.value);
        return;
      default:
        return;
    }
  };
  return (
    <div style={{ margin: 50 }}>
      <p style={{ marginTop: 20, marginBottom: 10 }}>
        This is for testing Crud:
      </p>
      <input name="name" onChange={onChange} value={name} placeholder="name" />
      <input
        name="description"
        onChange={onChange}
        value={description}
        placeholder="description"
      />
      <button onClick={createTalk}>Create Talk</button>
      <p style={{ marginTop: 20, marginBottom: 10 }}>
        This is for testing subscriptions:
      </p>
      <Subs />
    </div>
  );
};

export default Crud;
