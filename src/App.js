import React from "react";
import Routes from "./routes";
import "./styles/global";

// Root components
import Header from './pages/root/header';
import Footer from './pages/root/footer';

const App = () => (
    <div className="App">
        <Header />
        <Routes />
        <Footer />
    </div>
);

export default App;
