import logo from "./logo.svg";
import "./App.css";
import { API, graphqlOperation } from "aws-amplify";
import { useState } from "react";
import { createUser } from "./graphql/mutations";

function App() {
  const [name, setName] = useState("");

  const createUser_ = async e => {
    let user = { name: name };
    await API.graphql(graphqlOperation(createUser, { input: user }));
  };

  return (
    <div className="App">
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={e => createUser_(e)}>Create User</button>
    </div>
  );
}

export default App;
