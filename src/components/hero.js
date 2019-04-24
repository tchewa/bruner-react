import React from "react"
import styled from "@emotion/styled"
import { LayoutContainer } from "./layout"

const HeroContainer = styled.div`
  text-align: center;
  color: white;
  margin-top: 30px;

  @media screen and (max-width: 830px) {
    text-align: left;
  }

  h1 {
    font-size: 3.5em;
    font-weight: 100;
    max-width: 75%;
    margin: 0 auto;

    @media screen and (max-width: 830px) {
      margin: inherit;
      font-size: 2.5em;
    }
  }

  p {
    margin-top: 30px;
  }

  .zipField {
    margin: 40px auto 0;
    width: 50%;
    display: flex;

    @media screen and (max-width: 500px) {
      display: flex;
      width: 100%;
    }

    input {
      padding: 11px;
      border-radius: 5px 0 0 5px;
      width: 50%;
      font-size: 15px;
      box-sizing: border-box;

      @media screen and (max-width: 830px) {
        height: auto;
      }
    }

    button {
      padding: 11px;
      border-radius: 0px 5px 5px 0px;
      background-color: #009FE3;
      color: #fff;
      cursor: pointer;
      width: 50%;
      font-size: 15px;
      box-sizing: border-box;
    }
  }
`

const HeroContent = () => (
  <LayoutContainer>
    <HeroContainer>
      <h1>Discover Bruner Satellite Internet Bundles</h1>
      <p>Jimmy B is here to make the world a better place. One connection at a time.</p>
      <div className="zipField">
        <input type="text" name="zipcode" placeholder="Enter Zip"/>
        <button>Connect with the Bruner</button>
      </div>
    </HeroContainer>
  </LayoutContainer>
)

export default HeroContent