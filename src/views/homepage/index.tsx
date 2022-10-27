import React from 'react';
import CreateHackathon from "./sections/createHackathon";
import Hackathons from "./sections/hackathons";
import Opportunity from "./sections/opportunity";

interface IHomepageProps {
    //
}

const Homepage: React.FunctionComponent<IHomepageProps> = (props) => {
  return <div>
    <CreateHackathon />
    <Opportunity />
    <Hackathons />
  </div>;
};

export default Homepage;
