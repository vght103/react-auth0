import { Route, Routes } from "react-router-dom";
import "./App.css";
import Auth0User from "./components/Auth0User";
import Header from "./components/Header";
import Home from "./components/Home";
import KeyCloakUser from "./components/KeyCloakUser";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/auth0" element={<Auth0User />} />
        <Route path="/keycloak" element={<KeyCloakUser />} />
      </Routes>
    </>
  );
}

export default App;
