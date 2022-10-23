import * as React from "react";

interface IFooterProps {
  //
}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="bg-light text-center p-3 fw-bold">
        © 2022 Copyright 
        <a className="text-dark fw-bold  text-decoration-none" href="/">
          <pre className="d-inline fs-5">  DPhi.tech  </pre>  
        </a>
      </div>
    </footer>
  );
};

export default Footer;
