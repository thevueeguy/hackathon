import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import {Routes, Route} from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import Homepage from "./views/homepage";
import CreateForm from "./views/createForm";

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
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
