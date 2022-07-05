import React from "react";
import { Link } from "react-router-dom";
import "../Styling/Home.css";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";
import Search from "../components/Search";

const Home = () => {
  return (
    <div className="home">
      <div className="home_header">
        <div className="home_headerLeft">
          <Link to="/">About</Link>
          <Link to="/">Store</Link>
        </div>
        <div className="home_headerRight">
          <Link to="/">Gmail</Link>
          <Link to="/">Images</Link>
          <AppsIcon titleAccess="Google Apps" />
          <Avatar titleAccess="Account" />
        </div>
      </div>
      <div className="home_body">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="Google"
        />
        <div className="home_inputContainer">
          <Search hideButtons />
        </div>
        <div className="news_section">
          <div className="icons">
            <a
              href="https://www.google.com/search?q=news+&ei=_QjAYpnkG_bc4-EPgMuziAE&ved=0ahUKEwjZ1rXJ69n4AhV27jgGHYDlDBEQ4dUDCA4&uact=5&oq=news+&gs_lcp=Cgdnd3Mtd2l6EAMyBAgAEEMyCwgAEIAEELEDEIMBMgsIABCABBCxAxCDATILCAAQgAQQsQMQgwEyCAgAEIAEELEDMgsIABCABBCxAxCDATIECAAQQzIFCC4QgAQyCwgAEIAEELEDEIMBMggIABCABBCxAzoHCAAQRxCwAzoHCAAQsAMQQ0oECEEYAEoECEYYAFDVBljVBmC0CGgCcAF4AIABygGIAcoBkgEDMi0xmAEAoAEByAEKwAEB&sclient=gws-wiz"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://intromaker.com/img/header_photos/256/cat_news.jpg"
                alt="News"
              />
            </a>
            <span className="name">News</span>
          </div>
          <div className="icons">
            <a
              href="https://www.google.com/search?q=recipes&ei=BgnAYvr_HuCM4-EPyIKO2AE&ved=0ahUKEwj6mt7N69n4AhVgxjgGHUiBAxsQ4dUDCA4&uact=5&oq=recipes&gs_lcp=Cgdnd3Mtd2l6EAMyBwgAELEDEEMyBAgAEEMyBAgAEEMyBAgAEEMyBwgAELEDEEMyBwgAELEDEEMyBAgAEEMyCAgAEIAEELEDMggIABCABBCxAzIFCAAQgAQ6BwgAEEcQsAM6CggAEEcQsAMQyQM6BQgAEJECOggILhCxAxCDAToICC4QgAQQsQM6CwguEIAEELEDEIMBOgsIABCABBCxAxCDAToFCC4QgAQ6CAgAELEDEIMBOhAILhCxAxCDARDHARDRAxBDOgoILhDHARDRAxBDOgoIABCxAxCDARBDSgQIQRgASgQIRhgAUPUHWN8SYOcTaAJwAXgBgAHsBIgBzA2SAQswLjMuMS4xLjAuMZgBAKABAcgBCMABAQ&sclient=gws-wiz"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://1.bp.blogspot.com/-bYiIagwJLf8/XoJ5oyt9bkI/AAAAAAAAOb8/lpjeX9JK2J4lo0HlPNvFs1iYJCdtCj2_ACLcBGAsYHQ/s1600/butter%2Bchicken.jpg"
                alt="Recipes"
              />
            </a>
            <span className="name">Recipes</span>
          </div>
          <div className="icons">
            <a
              href="https://www.google.com/search?q=tech&ei=QAnAYoTMD53s4-EP9ZGZmAk&ved=0ahUKEwiE7KLp69n4AhUd9jgGHfVIBpMQ4dUDCA4&uact=5&oq=tech&gs_lcp=Cgdnd3Mtd2l6EAMyBAgAEEMyCAguELEDEIMBMggIABCxAxCDATILCAAQgAQQsQMQgwEyCAgAEIAEELEDMgsILhCABBCxAxCDATIOCC4QgAQQsQMQxwEQowIyBQgAEIAEMggIABCABBCxAzIICAAQsQMQgwE6BwgAEEcQsAM6BwgAELADEEM6CggAEOQCELADGAE6DAguEMgDELADEEMYAjoVCC4QxwEQowIQ1AIQyAMQsAMQQxgCOhEILhCABBCxAxCDARDHARDRAzoKCC4QxwEQowIQQ0oECEEYAEoECEYYAVCGClixD2CcGGgCcAF4AIABlQSIAfAJkgELMC4yLjAuMS4wLjGYAQCgAQHIARHAAQHaAQYIARABGAnaAQYIAhABGAg&sclient=gws-wiz"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://styles.redditmedia.com/t5_2qi4j/styles/communityIcon_a0b0l0lb75k41.png"
                alt="Tech"
              />
            </a>
            <span className="name">Tech</span>
          </div>
          <div className="icons">
            <a
              href="https://www.google.com/search?q=films&ei=UQnAYozRNLWJjuMPt9u2oAU&ved=0ahUKEwjMvdXx69n4AhW1hGMGHbetDVQQ4dUDCA4&uact=5&oq=films&gs_lcp=Cgdnd3Mtd2l6EAMyCwgAELEDEIMBEJECMgUIABCRAjIECAAQQzILCAAQgAQQsQMQgwEyBQgAEIAEMggILhCABBDUAjIICAAQsQMQgwEyBQgAEIAEMgUILhCABDIFCAAQgAQ6BwgAEEcQsAM6BwgAELADEEM6CggAEOQCELADGAE6FQguEMcBEKMCENQCEMgDELADEEMYAjoPCC4Q1AIQyAMQsAMQQxgCOgwILhDIAxCwAxBDGAI6BAguEEM6CggAELEDEIMBEEM6CwguEIAEELEDENQCOg0ILhDHARCjAhDUAhBDOgcILhDUAhBDOggIABCABBCxAzoNCC4QgAQQxwEQ0QMQCkoECEEYAEoECEYYAVCiEVjcGGCnGmgCcAF4AIAB_gGIAaoGkgEFMC4zLjGYAQCgAQHIARPAAQHaAQYIARABGAnaAQYIAhABGAg&sclient=gws-wiz"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://media.nu.nl/m/d80x7atagz9l_sqr256.jpg/nieuw-op-netflix-deze-films-en-series-verschenen-afgelopen-week.jpg"
                alt="Films"
              />
            </a>
            <span className="name">Films</span>
          </div>
          <div className="icons">
            <a
              href="https://www.google.com/search?q=sports+news&ei=jgnAYuTvFpDw4-EPtbyvqAw&ved=0ahUKEwjk7sKO7Nn4AhUQ-DgGHTXeC8UQ4dUDCA4&uact=5&oq=sports+news&gs_lcp=Cgdnd3Mtd2l6EAMyCAgAELEDEJECMgsIABCABBCxAxCDATILCAAQgAQQsQMQgwEyBQgAEJECMgsIABCxAxCDARCRAjIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzILCAAQgAQQsQMQgwEyCwgAEIAEELEDEIMBOgcIABBHELADOgcIABCwAxBDOgoIABDkAhCwAxgBOgwILhDIAxCwAxBDGAI6CwguEMcBEKMCEJECOggIABCABBDJAzoFCAAQkgM6BQgAEIAESgQIQRgASgQIRhgBUL8OWKoUYN4VaAFwAXgAgAH5AYgB3weSAQUwLjMuMpgBAKABAcgBE8ABAdoBBggBEAEYCdoBBggCEAEYCA&sclient=gws-wiz"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://www.visitdubai.com/-/media/gathercontent/event/d/dubai-sports-world-eventorganiser-mar-2022.jpg?&cw=256&ch=256"
                alt="Sports"
              />
            </a>
            <span className="name">Sports</span>
          </div>
          <div className="icons">
            <a
              href="https://www.google.com/search?q=health+news&ei=tAnAYsXVAfHg4-EPhLWyiAM&ved=0ahUKEwjF_7yg7Nn4AhVx8DgGHYSaDDEQ4dUDCA4&uact=5&oq=health+news&gs_lcp=Cgdnd3Mtd2l6EAMyBAgAEEcyBAgAEEcyBAgAEEcyBAgAEEcyBAgAEEcyBAgAEEcyBAgAEEcyBAgAEEc6BwgAEEcQsANKBAhBGABKBQhAEgExSgQIRhgAUKEBWKEBYNQGaAFwAngAgAEAiAEAkgEAmAEAoAEByAEIwAEB&sclient=gws-wiz"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://www.stylist.co.uk/images/app/uploads/2020/05/19122504/mental-health-awareness-week-why-talking-is-important-crop-1589887534-1104x1104.jpg?w=256&h=256&fit=max&auto=format%2Ccompress"
                alt="Health"
              />
            </a>
            <span className="name">Health</span>
          </div>
          <div className="icons">
            <a
              href="https://www.google.com/search?q=investment+news&ei=ugnAYpGtJ8bs4-EPm4Ww6Ao&ved=0ahUKEwiR8tCj7Nn4AhVG9jgGHZsCDK0Q4dUDCA4&uact=5&oq=investment+news&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEJECMgUIABCRAjIGCAAQHhAHMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHMgUIABCABDIGCAAQHhAHMgUIABCABDIGCAAQHhAHOgcIABBHELADOgoIABCxAxCDARBDOggIABCABBCxAzoECAAQQzoECAAQDUoECEEYAEoECEYYAFDWBljYLWDbN2gCcAF4AIABpgOIAdgVkgEJMC41LjYuMC4xmAEAoAEByAEIwAEB&sclient=gws-wiz"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://is3-ssl.mzstatic.com/image/thumb/Purple128/v4/e8/e5/50/e8e550d3-f952-661d-a887-0544f83e9d2c/source/256x256bb.jpg"
                alt="Investm..."
              />
            </a>
            <span className="name">Investm...</span>
          </div>
          <div className="icons">
            <a
              href="https://www.google.com/search?q=education++news&ei=xQnAYqXHEJOQ4-EP2MSzsAY&ved=0ahUKEwjlvdmo7Nn4AhUTyDgGHVjiDGYQ4dUDCA4&uact=5&oq=education++news&gs_lcp=Cgdnd3Mtd2l6EAMyCAgAELEDEJECMgoIABCxAxCDARBDMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIGCAAQHhAHMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHOgcIABBHELADOgcIABCwAxBDOgQIABBDOggIABAeEAcQCjoECAAQDUoECEEYAEoECEYYAFClBlj5G2C_IWgCcAF4AIABiQKIAekQkgEFMC41LjWYAQCgAQHIAQrAAQE&sclient=gws-wiz"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://www.k12irc.org/_tmg/256-1000t/v130/v130305.jpg"
                alt="Education"
              />
            </a>
            <span className="name">Education</span>
          </div>
          <div className="icons">
            <a
              href="https://www.google.com/search?q=fashion+news&ei=1gnAYt2TIf3V4-EPrs2foAg&ved=0ahUKEwjd1vew7Nn4AhX96jgGHa7mB4QQ4dUDCA4&uact=5&oq=fashion+news&gs_lcp=Cgdnd3Mtd2l6EAMyCwgAELEDEIMBEJECMgYIABAeEAcyBggAEB4QBzIFCAAQgAQyBQgAEIAEMgUIABCABDIGCAAQHhAHMgUIABCABDIGCAAQHhAHMgYIABAeEAc6BwgAEEcQsAM6CggAEEcQsAMQyQM6BwgAELADEENKBAhBGABKBAhGGABQgQ5YqRlgiBtoAnABeACAAfsBiAHlDJIBBTAuNS4zmAEAoAEByAEKwAEB&sclient=gws-wiz"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://news.artnet.com/app/news-upload/2021/02/DIOR_WINTER21_LOOK_14-256x256.jpg"
                alt="Fashion"
              />
            </a>
            <span className="name">Fashion</span>
          </div>
        </div>
        <div className="top_sites">
          <div className="sites">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/facebook-logo-2019-1597680-1350125.png"
                alt="facebook"
              />
              <span className="sites_name">Facebook</span>
            </a>
          </div>
          <div className="sites">
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              <img
                src="https://www.shareicon.net/data/256x256/2016/07/10/119962_youtube_512x512.png"
                alt="Youtube"
              />
              <span className="sites_name">Youtube</span>
            </a>
          </div>
          <div className="sites">
            <a
              href="https://twitter.com/i/flow/login"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://cdn.iconscout.com/icon/premium/png-256-thumb/twitter-social-network-tweet-50189.png"
                alt="Twitter"
              />
              <span className="sites_name">Twitter</span>
            </a>
          </div>
          <div className="sites">
            <a
              href="https://in.pinterest.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://heidicohen.com/wp-content/uploads/Pinterest-icon.png"
                alt="Pinterest"
              />
              <span className="sites_name">Pinterest</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
