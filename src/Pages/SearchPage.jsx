import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import "../Styling/SearchPage.css";
import useGoogleSearch from "../useGoogleSearch";
import Search from "../components/Search";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";

const SearchPage = () => {
  const [{ term }] = useStateValue();

  const { data } = useGoogleSearch(term);

  //console.log(data);

  // https://developers.google.com/custom-search/v1/using_rest

  // https://cse.google.com/cse/create/new

  // c3ac920f543e9479c

  return (
    <div className="search_page">
      <div className="searchPage_header">
        <div className="logo">
          <MenuIcon className="menu" />
          <Link to="/">
            <img
              className="searchPage_logo"
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
              alt="Google"
            />
          </Link>
          <Avatar className="avatar" />
        </div>
        <div className="searchPage_headerBody">
          <Search hideButtons term={term} />
          <div className="searchPage_options">
            <div className="searchPage_optionsLeft">
              <div className="searchPage_option">
                <SearchIcon className="active" />
                <Link to="" className="active">
                  All
                </Link>
              </div>
              <div className="searchPage_option">
                <DescriptionIcon />
                <Link to="">News</Link>
              </div>
              <div className="searchPage_option">
                <ImageIcon />
                <Link to="">Images</Link>
              </div>
              <div className="searchPage_option">
                <LocalOfferIcon />
                <Link to="">Shopping</Link>
              </div>
              <div className="searchPage_option">
                <LocationOnIcon />
                <Link to="">Maps</Link>
              </div>
              <div className="searchPage_option">
                <MoreVertIcon />
                <Link to="">More</Link>
              </div>
            </div>
            <div className="searchPage_optionsRight">
              <div className="searchPage_option">
                <Link to="">Settings</Link>
              </div>
              <div className="searchPage_option">
                <Link to="">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term ? (
        <div
          className="searchPage_results"
          key={data?.searchInformation.formattedSearchTime}
        >
          <p className="searchPage_resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>
          <p className="showing_results">Showing Results for ( {term} )</p>
          {data?.items.map((item) => (
            <div className="searchPage_result" key={item.link}>
              <p
                style={{
                  marginBottom: "10px",
                }}
              >
                <a
                  className="link"
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.pagemap?.cse_image?.length > 0 &&
                    item.pagemap?.cse_image[0]?.src && (
                      <img
                        className="searchPage_resultImage"
                        src={item.pagemap?.cse_image[0]?.src}
                        alt="logo"
                      />
                    )}
                  {item.displayLink}
                </a>
              </p>
              <p>
                <a
                  className="show_link"
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.title}
                </a>
              </p>
              <p className="snippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      ) : (
        <h3
          style={{
            textAlign: "center",
            marginTop: "80px",
            fontSize: "24px",
          }}
        >
          OOPS! Something Error!
        </h3>
      )}
    </div>
  );
};

export default SearchPage;
