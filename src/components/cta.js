import React from "react"
import styled from "@emotion/styled"
/* eslint-disable */


const CtaContainer = styled.div`
  background-color: #009FE3;
  text-align: center;
  color: #fff;
  padding: 30px 20px;
  position: relative;
  &:before {
    content: "";
    display: block;
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    background-color: #009FE3;
    width: 20px;
    height: 20px;
  }

  .desktop-cta {
    @media screen and (max-width: 600px) {
      display: none;
    }
  }

  .mobile-cta {
    display: none;

    @media screen and (max-width: 600px) {
      display: block;
    }

    a {
      text-decoration: none;
      color: #FFF;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .btn {
    width: 175px;
    height: 50px;
    border-radius: 7px;
    color: #009FE3;
    display: block;
    margin: 20px auto;
    box-shadow: 0 3px 15px -3px #3759c1;

    &.white {
      background-color: #FFF;
    }
  }
`

const CtaComponent = () => (
  <CtaContainer>
    <div className="desktop-cta">
      <h2 className="section-title">Get Connected With Bruner Dynamics Today.</h2>
      <button className="btn white">Call 1.888.888.8888</button>
    </div>
    <div className="mobile-cta">
      <h2>Click to Call</h2>
      <h2><a tel="1-888-888-8888">1.888.888.8888</a></h2>
    </div>
  </CtaContainer>
)

export default CtaComponent