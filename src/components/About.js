import React from "react";
import Links from "./Links";
import { socials } from "./App";
function About(props) {
    if(!props.bio || props.bio===''){
      return (
        <div id="about">
          <h2>About Me</h2>
          {/* <p>{null}</p> */}
          <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
          {/* add your <Links /> component here */}
          <Links links={socials.github} links1={socials.linkedin}/>
        </div>
      );
    }
  else{
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{props.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links links={socials.github} links1={socials.linkedin} />
    </div>
  );
}
}
export default About;
