// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import BgStarry from "../images/bg-starry.jpg"
import { LayoutContainer } from "../components/layout"
import Logo from "../images/Bruner-Dynamics-White.png"
import MobileLogo  from "../images/bruner-color-logo.jpg"
import HeroContent from "./hero"

const MainHeader = styled.header`
  background-image: url(${BgStarry});
  background-size: cover;
  padding: 30px 20px 70px;

`

const DesktopNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .phone {
    color: #fff;
  }

  @media screen and (max-width: 830px) {
    display: none;
  }
`

const MobileNav = styled.header`
  display: none;

  .mobile-logo {
    img {
      width: 100px;
      margin-left: 30px;
      padding: 10px 0;
    }
  }

  @media screen and (max-width: 830px) {
    display: block;

    .mobile-nav-container {
      display: flex;
      justify-content: space-between;
      margin-right: 30px;
      align-items: center;
      position: absolute;
      top: 0;
      width: 100%;
      left: 0;
      height: 60px;
      background-color: #fff;
    }

    .mobile-menu-items {
      display: none;
      position: absolute;
      left: 0;
      right: 0;
      top: 60px;
      background-color: #FFF;

      &.opened {
        display: block;
      }

      li {
        margin-bottom: 10px;
      }
      a {
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .hamburger-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 30px;
    height: 20px;
    position: relative;
    cursor: pointer;
    right: 30px;

    &:before {
      content: "";
      height: 3px;
      background-color: #009FE3;
      margin-bottom: 4px;
    }

    &:after {
      content: "";
      height: 3px;
      background-color: #009FE3;
      margin-top: 4px;
    }
  }

  .hamburger-menu {
    width: 30px;
    height: 3px;
    background-color: #009FE3;
    display: block;
    position: relative;
  }
`

const NavItems = styled.div`
  display: flex;

  ul {
    padding-left: 30px;
  }

  li {
    list-style-type: none;
    display: inline-block;
    margin-right: 20px;
  }

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .logo {
    width: 150px;
    img {
      width: 100%;
    }
  }
`

const handleClick = (e) => {
  return (
    e.currentTarget.parentElement.nextElementSibling.classList.toggle('opened')
  )
};

const Header = () => (
// class Header extends React.Component{

//   componentDidMount() {
//     const mobileMenu = document.querySelector('.mobile-menu-items'),
//     mobileNavHeight = mobileMenu.clientHeight;

//     mobileMenu.style.top = "-" + mobileNavHeight
//   }

//   render(){

//     return (
      <div className="navigation">
        <MainHeader>
          <LayoutContainer>
            <DesktopNav>
              <NavItems>
                <Link className="logo" to="/">
                  <img src={Logo} alt="logo"/>
                </Link>
                <ul>
                  <li><Link to="/">Plans</Link></li>
                  <li><Link to="/">Speeds</Link></li>
                  <li><Link to="/">About Bruner Dynamics</Link></li>
                  <li><Link to="/">Equipment</Link></li>
                </ul>
              </NavItems>
              <span className="phone">Call Now: 1.888.888.8888</span>
            </DesktopNav>
            <MobileNav>
              <div className="mobile-nav-container">
                <Link className="mobile-logo" to="/">
                  <img src={MobileLogo} alt="logo"/>
                </Link>
                <div className="hamburger-container" onClick={ (e) => { return handleClick(e)} }>
                  <span className="hamburger-menu"></span>
                </div>
              </div>
              <div className="mobile-menu-items">
                <ul>
                  <li><Link to="/">Plans</Link></li>
                  <li><Link to="/">Speeds</Link></li>
                  <li><Link to="/">About Bruner Dynamics</Link></li>
                  <li><Link to="/">Equipment</Link></li>
                </ul>
              </div>
            </MobileNav>
          </LayoutContainer>
          <HeroContent></HeroContent>
        </MainHeader>
      </div>
    )



Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header