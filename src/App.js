import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Example from "./routes/router";

const BasicExample = () => {
  return (
    <Router>
      <Example />
    </Router>
  );
};

export default BasicExample;
