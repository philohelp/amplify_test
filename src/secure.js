import React from "react";
import { withAuthenticator } from "aws-amplify-react";
import Crud from "./edit_data";
const Secure = (props) => {
  return (
    <div style={{ margin: 20 }}>
      <Crud />
    </div>
  );
};

export default withAuthenticator(Secure, { includeGreetings: true });
