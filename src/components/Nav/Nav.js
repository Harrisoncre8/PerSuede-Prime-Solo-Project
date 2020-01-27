import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';

const Nav = (props) => (
  <>
  {/*<div className="nav"> */}
    {/* <Link to="/home"> */}
      {/* <h2 className="nav-title">Persuede</h2> */}
    {/* </Link> */}
    {/* <div className="nav-right"> */}
      {/* <Link className="nav-link" to="/home"></Link> */}
        {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
        {/* {props.user.id ? 'Home' : 'Login / Register'} */}
      {/* Show the link to the info page and the logout button if the user is logged in */}
      {/* {props.user.id && (
        <div className="logout">
          <Link className="nav-link" to="/outfit">
            Outfits
          </Link>
          <LogOutButton className="nav-link"/>
        </div>
      )} */}
      {/* Always show this link since the about page is not protected */}
      {/* {props.user.id && (
        <div className="fav-link">
          <Link className="nav-link-fav" to="/favorite">
            Favorites
        </Link></div>)} */}
      {/* </div> */}
  {/*</div> */}
  </>
);

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
