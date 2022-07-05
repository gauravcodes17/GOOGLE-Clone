import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import "../Styling/Search.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

const Search = ({ hideButtons = false }) => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const [,dispatch] = useStateValue();

  const search = (e) => {
    e.preventDefault();

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    navigate("/search");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form className="search">
      <div className="search_input">
        <SearchIcon className="search_inputIcon" />
        <input
          placeholder="Search Google or type a URL"
          value={input}
          onChange={handleChange}
        />
        <MicIcon />
      </div>
      {!hideButtons ? (
        <div className="search_buttons">
          <Button type="submit" variant="outlined" onClick={search}>
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search_buttons">
          <Button
            className="search_buttonsHidden"
            type="submit"
            variant="outlined"
            onClick={search}
          >
            Google Search
          </Button>
          <Button className="search_buttonsHidden" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
};

export default Search;
