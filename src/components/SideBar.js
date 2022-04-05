import React from "react";
import image from "../assets/images/Game-Soul.png";
import ContentWrapper from "./ContentWrapper";
import GamesInDb from "./GamesInDb";
import LastGameInDb from "./LastGameInDb.js";
import NotFound from "./NotFound";
import { Link, Route, Switch } from "react-router-dom";
import ContentRowSmallCards from "./ContentRowSmallCards.jsx";
import "../assets/css/sideBar.css";

function SideBar() {
  return (
    <React.Fragment>
      {/*<!-- Sidebar -->*/}
      <ul
        className="navbar-nav sidebar sidebar-dark accordion colorSideBar"
        id="accordionSidebar"
      > 
        {/*<!-- Sidebar - Brand -->*/}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/"
        >
          <div className="sidebar-brand-icon">
            <img className="imagen" src={image} alt="Game Soul" />
          </div>
        </a>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider my-0" />

        {/*<!-- Nav Item - Dashboard -->*/}
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard GameSoul</span>
          </Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider" />

        {/*<!-- Heading -->*/}
        <div className="sidebar-heading">Actions</div>

        {/*<!-- Nav Item - Pages -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/GamesInDb">
            <i className="fas fa-fw fa-folder"></i>
            <span>Juegos por genero</span>
          </Link>
        </li>

        {/*<!-- Nav Item - Charts -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/LastGameInDb">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Ultimo juego agregado</span>
          </Link>
        </li>

        {/*<!-- Nav Item - Tables -->*/}
        <li className="nav-item nav-link">
          <Link className="nav-link" to="/ContentRowSmallCards">
            <i className="fas fa-fw fa-table"></i>
            <span>Info</span>
          </Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
      {/*<!-- End of Sidebar -->*/}

      {/*<!-- Microdesafio 1 -->*/}
      {/*<!--<Route exact path="/">
                <ContentWrapper />
            </Route>
            <Route path="/GenresInDb">
                <GenresInDb />
            </Route>
            <Route path="/LastMovieInDb">
                <LastMovieInDb />
            </Route>
            <Route path="/ContentRowMovies">
                <ContentRowMovies />
            </Route>*/}
      {/*<!-- End Microdesafio 1 -->*/}

      {/*<!-- End Microdesafio 2 -->*/}
      <Switch>
        <Route exact path="/">
          <ContentWrapper />
        </Route>
        <Route path="/GamesInDb">
          <GamesInDb />
        </Route>
        <Route path="/LastGameInDb">
          <LastGameInDb />
        </Route>
        <Route path="/ContentRowSmallCards">
          <ContentRowSmallCards />
        </Route>
        <Route component={NotFound} />
      </Switch>
      {/*<!-- End Microdesafio 2 -->*/}
    </React.Fragment>
  );
}
export default SideBar;
