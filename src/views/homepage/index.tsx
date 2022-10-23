import * as React from 'react';
import CreateHackathon from "./sections/createHackathon";
import Opportunity from "./sections/opportunity";
import Hackathons from "./sections/hackathons";

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
