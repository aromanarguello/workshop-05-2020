import React from "react";
import Form from "./components/form";

function App() {
  return (
    <Form>
      <label name="username">Username</label>
      <input aria-labelledby="username" />
    </Form>
  );
}

export default App;
