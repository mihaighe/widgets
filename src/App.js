import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";
import logo from "./images/react.png";
import js from "./images/js.svg";
import google from "./images/google.png";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "What is one feature of React",
    content: "You use React by creating components",
  },
  {
    title: "What is React used for",
    content:
      "React is a JavaScript library that specializes in helping developers build user interfaces, or UIs",
  },
  {
    title: "Is Facebook written in React?",
    content:
      "It is maintained by Facebook and a community of individual developers and companies",
  },
  {
    title: "Where do I start with React?",
    content: "Read the official documentation by React",
  },
  {
    title: "Is Netflix build with React?",
    content:
      "All of Netflix's webpages are served by server-side rendered React, serving the generated HTML and then serving the client-side application",
  },
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "What is one feature of React",
    content: "You use React by creating components",
  },
  {
    title: "What is React used for",
    content:
      "React is a JavaScript library that specializes in helping developers build user interfaces, or UIs",
  },
  {
    title: "Is Facebook written in React?",
    content:
      "It is maintained by Facebook and a community of individual developers and companies",
  },
  {
    title: "Where do I start with React?",
    content: "Read the official documentation by React",
  },
  {
    title: "Is Netflix build with React?",
    content:
      "All of Netflix's webpages are served by server-side rendered React, serving the generated HTML and then serving the client-side application",
  },
];

const options = [
  {
    label: "JavaScript",
    value: "javascript",
  },
  {
    label: "Java",
    value: "java",
  },
  {
    label: "C/C++",
    value: "c",
  },
  {
    label: "Python",
    value: "pyhton",
  },
  {
    label: "Swift",
    value: "swift",
  },
  {
    label: "PHP",
    value: "php",
  },
  {
    label: "Ruby",
    value: "ruby",
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div
      className="ui container"
      style={{ paddingTop: 20, paddingLeft: 160, paddingRight: 160 }}
    >
      <Header />
      <Route path="/">
        <img alt="logo" src={logo} style={{ width: "200px" }}></img>
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <img alt="logo" src={js} style={{ width: "74px" }}></img>
        <Dropdown
          label=""
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <img alt="logo" src={google} style={{ width: "354px" }}></img>
        <Translate />
      </Route>
    </div>
  );
};
