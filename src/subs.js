import React, { useState, useEffect } from "react";

import { listTestTalks as ListTestTalks } from "./graphql/queries";
import * as subscriptions from "./graphql/subscriptions";

import { API, graphqlOperation } from "aws-amplify";

const Sub = (props) => {
  const { talks, setTalks } = props;
  useEffect(() => {
    const mySub = API.graphql(
      graphqlOperation(subscriptions.onCreateTestTalk, { name: "this" })
    ).subscribe({
      next: (res) => {
        const { value } = res;
        const { data } = value;
        const { onCreateTestTalk } = data;
        console.log("new talk has arrived", onCreateTestTalk);
        const allTalks = [...talks, onCreateTestTalk];
        setTalks(allTalks);
      },
    });
    return function cleanup() {
      mySub.unsubscribe();
    };
  }, [talks, setTalks]);
  return <div>Hello subscriptions</div>;
};

const SubWithData = (props) => {
  const [talks, setTalks] = useState([]);
  useEffect(function async() {
    getData();
  }, []);

  const getData = async () => {
    try {
      const talkData = await API.graphql(graphqlOperation(ListTestTalks));
      setTalks(talkData.data.listTestTalks.items);
    } catch (err) {
      console.log("error fetching talks...", err);
    }
  };

  return (
    <div>
      <Sub setTalks={setTalks} talks={talks} />
      {talks.map((talk, index) => (
        <div key={index}>
          <h5 style={{ color: "black" }}>
            {talk.name}: "{talk.description}"
          </h5>
        </div>
      ))}
    </div>
  );
};

export default SubWithData;
