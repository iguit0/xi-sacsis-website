import React from "react";
import Routes from "./routes";
import Header from './pages/root/header';
import "./styles/global";

const App = () => (
    <div>
        <Header/>
        <Routes />
    </div>
);

export default App;
