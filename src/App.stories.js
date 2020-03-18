import React from "react";
import App from "./App";
import "./App.css";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { action } from '@storybook/addon-actions';
import Lists from "./components/Lists";
import {
  WelcomeContent,
  SearchDoneContent,
  SearchErrorContent,
  MovieDetailContent
} from "./components/Content";
import Search from "./components/Search";

export default {
  title: "App",
  component: App,
  decorators: [withKnobs],
  parameters: {
    backgrounds: [
      { name: 'gray', value: 'gray'},
      { name: 'twitter', value: '#00aced', default: true },
      { name: 'facebook', value: '#3b5998' }
    ]
  }
};

const data = [
  //리스트의 title 및 간략한 정보를 저장 객체
  { Title: "Thor" },
  { Title: "Harry Potter and the Prisoner of Azkaban" },
  { Title: "The Lord of the Rings: The Fellowship of the Ring" },
  { Title: "The Avengers" }
];

export const WelcomePage = () => {
  return (
    <div id="wrapper">
      <Router>
      <div id="left_bar">
        <Search />
        <Lists
          data={data}
        />
      </div>
        <WelcomeContent />
      </Router>
    </div>
  );
};

export const SearchPage = () => {
  return (
    <div id="wrapper">
      <Router>
      <div id="left_bar">
        <Search />
        <Lists
          data={data}
        />
      </div>
        <SearchDoneContent/>
      </Router>
    </div>
  );
};
export const ErrorPage = () => {
  return (
    <div id="wrapper">
      <Router>
      <div id="left_bar">
        <Search />
        <Lists
          data={data}
        />
      </div>
        <SearchErrorContent/>
      </Router>
    </div>
  );
};

export const MovieDetailPage = () => {

  return (
    <div id="wrapper">
      <Router>
      <div id="left_bar">
        <Search />
        <Lists
          data={data}
        />
      </div>
        <Route path="/show/:movieTitle" component={MovieDetailContent} />
      </Router>
    </div>
  );
};