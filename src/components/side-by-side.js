import React from "react"
import { LayoutContainer } from "./layout"
import styled from "@emotion/styled"
import {colors} from "../styles/global"
import { sideBySides } from "../data/sideBySides.json"


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
`

const SideBySideItem = styled.div`
  &.side-by-side {
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


const SideBySide = () => {
  const displaySideBySides = sideBySides.map((sideBySide, i) =>
    <SideBySideItem className="side-by-side" key={i}>
      <div className="half-width left-content">
        <img src={require(`../images/${sideBySide["imageSrc"]}`)} alt={sideBySide.imageAlt} />
      </div>
      <div className="half-width right-content">
        <h2>{sideBySide.heading}</h2>
        <p>{sideBySide.content.text[0]}</p>
      </div>
    </SideBySideItem>
  )

  return (
    <LayoutContainer>
      <SideBySideContainer className="main-container">
        {displaySideBySides}
      </SideBySideContainer>
    </LayoutContainer>
  )
}

export default SideBySide