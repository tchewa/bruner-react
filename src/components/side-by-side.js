import React from "react"
import { LayoutContainer } from "./layout"
import styled from "@emotion/styled"
import {colors} from "../styles/global"



const SideBySideContainer = styled.div`
  padding-top: 70px;

  &.white {
    background-color: ${colors.white};
  }

  &.gray {
    background-color: ${colors.lightgray};
  }

  @media screen and (max-width: 830px) {
    padding: 30px;
  }

  .side-by-side {
    display: flex;

    @media screen and (max-width: 830px) {
      display: block;
    }
  }

  .half-width {
    width: 50%;
    padding: 0 20px;

    @media screen and (max-width: 830px) {
      width: 100%;
      padding: 0;
    }

    img {
      width: 100%;

      @media screen and (max-width: 830px) {
        max-width: 50%;
        display: block;
      }

      @media screen and (max-width: 600px) {
        max-width: 75%;
      }
    }
  }

  li {
    list-style-type: disc;
    margin-bottom: 20px;
  }
`

const SideBySide = ({children, imgsrc, imgalt, bgcolor}) => (
  <SideBySideContainer className={bgcolor + " main-container"}>
    <LayoutContainer className="side-by-side">
      <div className="half-width left-content">
        <img src={imgsrc} alt={imgalt}/>
      </div>
      <div className="half-width right-content">
        {children}
      </div>
    </LayoutContainer>
  </SideBySideContainer>
)

export default SideBySide