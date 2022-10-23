import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import {Routes, Route} from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import Homepage from "./views/homepage";
import CreateForm from "./views/createForm";
import HackathonPage from "./views/hackathonPage";

interface IAppProps {
  //
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div className="App">
      <Header />
      <Routes>  
        <Route path="/" element={<Homepage />} />
        <Route path="/createForm" element={<CreateForm />} />
        <Route path="/hackathonPage/:id" element={<HackathonPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
