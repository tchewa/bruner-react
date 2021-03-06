import React from "react"
import styled from "@emotion/styled"
import {colors} from "../styles/global"

/* eslint-disable */
const CtaContainer = styled.div`
  background-color: ${colors.blue};
  text-align: center;
  color: ${colors.white};
  position: relative;
  padding: 30px 20px;

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    background-color: ${colors.blue};
    width: 20px;
    height: 20px;
  }

  .desktop-cta {

    @media screen and (max-width: 600px) {
      display: none;
    }

    a {
      font-size: 15px;
      padding: 20px;
      cursor: pointer;
      height: auto;

      &:hover {
        box-shadow: 0px 5px 15px 1px #2f2f2f;
      }
    }
  }

  .mobile-cta {
    display: none;

    @media screen and (max-width: 600px) {
      display: block;
    }

    a {
      color: ${colors.white};

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .btn {
    width: 175px;
    height: 50px;
    border-radius: 7px;
    color: ${colors.blue};
    display: block;
    margin: 20px auto;
    box-shadow: 0 3px 15px -3px #3759c1;

    &.white {
      background-color: ${colors.white};
    }
  }
`

const CtaComponent = () => (
  <CtaContainer className="main-container">
    <div className="desktop-cta">
      <h2 className="section-title">Get Connected With Brüner Dynamics Today.</h2>
      <a href="tel:1-888-888-8888" className="btn white">Call 1.888.888.8888</a>
    </div>
    <div className="mobile-cta">
      <h2>Click to Call</h2>
      <h2><a href="tel:1-888-888-8888">1.888.888.8888</a></h2>
    </div>
  </CtaContainer>
)

export default CtaComponent