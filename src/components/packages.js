import React from "react"
import styled from "@emotion/styled"
import { LayoutContainer } from "../components/layout"
import {colors} from "../styles/global"
import {packageCards} from "../data/packages.json"


const PackageContainer = styled.div`

  @media screen and (max-width: 830px) {
    padding: 30px 20px;
  }

  .four-column {
    display: flex;

    @media screen and (max-width: 1000px) {
      flex-wrap: wrap;
    }
  }

  .disclaimers {
    max-width: 700px;
    margin: 50px auto;

    span {
      display: block;
      margin-bottom: 15px;
    }

    @media screen and (max-width: 1200px) {
      max-width: 100%;
      margin: 20px auto 0;
    }
  }

  .package-card-layout {
    max-width: 1100px;
  }
`

const PackageCardItem = styled.div`
  width: 25%;
  border-left: 3px solid ${colors.darkergray};
  padding: 20px 20px 100px;
  position: relative;
  box-sizing: border-box;
  background-color: ${colors.white};
  transition: .25s;
  height: 500px;

  .package-details {

    @media screen and (max-width: 830px) {
      display: none;
      padding: 30px 0;
      margin: 20px 0;
      border-top: 2px solid ${colors.blue};

      &.opened {
        display: block;
      }
    }
  }

  @media screen and (max-width: 1000px) {
    width: 50%;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 830px) {
    width: 100%;
    box-shadow: 5px 5px 21px 0px ${colors.darkergray};
    border-left: none;
    height: auto;
  }


  &:hover {

    @media screen and (min-width: 1000px) {

      .package-title {
        color: ${colors.green};
      }

      .package-cta {
        background-color: ${colors.green};
        cursor: pointer;
      }

      .package-title-content {
        border-bottom: 2px solid ${colors.green};
      }
    }

    box-shadow: 5px 5px 21px 0px ${colors.darkergray};
    border-left: 3px solid transparent;
    transform: scale(1.07);
    z-index: 5;


    @media screen and (max-width: 1000px) {
      transform: scale(1);
    }

    @media screen and (max-width: 830px) {
      border-left: none;
    }
  }

  img {
    display: inline-block;
    margin: 5px 10px 0 0;
  }

  h4 {
    display: inline-block;
  }


  .package-title-content {
    border-bottom: 2px solid ${colors.blue};
    margin-bottom: 25px;
    position: relative;
    height: 115px;

    p {
      margin-bottom: 20px;
    }

    @media screen and (max-width: 830px) {
      border-bottom: none;
      margin-bottom: 0;
      height: 100px;
    }
  }

  .show-hide-details {
    display: none;
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
    padding-right: 20px;

    p {
      margin: 0;
    }

    &.active {

      .see-more {
        display: none;
      }

      .see-less {
        display: block;
      }
    }

    @media screen and (max-width: 830px) {
      display: block;
    }
  }

  .see-more,
  .see-less {

    &:after {
      content: "";
      display: block;
      width: 8px;
      height: 8px;
      border: 2px solid ${colors.darkgray};
      position: absolute;
      right: 0;
      border-top: transparent;
      border-left: transparent;
    }
  }

  .see-more {
    display: block;

    &:after {
      top: 3px;
      transform: rotate(45deg);
    }
  }

  .see-less {
    display: none;

    &:after {
      transform: rotate(-135deg);
      top: 7px;
    }
  }

  .package-title {
    text-transform: uppercase;
    font-size: 15px;
    color: ${colors.blue};
  }

  .package-price {
    font-weight: 400;

    .price-bold {
      font-size: 36px;
      font-weight: 500;
    }

    h2 {
      font-weight: 400;
    }

    span {
      font-size: 20px;
      vertical-align: top;
      position: relative;
      font-weight: 400;
    }

    .price-decimal {
      position: relative;
      top: 5px;
    }
  }

  p {
    margin: 5px 0;
    color: ${colors.darkgray};
  }

  .package-cta {
    background-color: ${colors.blue};
    height: 60px;
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
    border-radius: 0 0 10px 10px;
    text-transform: uppercase;
    color: ${colors.white};
    padding: 10px 20px 0;

    span {
      display: block;
      font-size: 21px;
    }
  }

  .package-content-item {
    display: flex;
    align-items: flex-start;
  }
`

const handleClick = (e) => {
  return (
    console.log(e.currentTarget.parentElement.nextElementSibling),
    e.currentTarget.classList.toggle('active'),
    e.currentTarget.parentElement.nextElementSibling.classList.toggle('opened')
  )
}

const PackageCards = () => {
  const displayPackages = packageCards.map((packageCard, i) =>
    <PackageCardItem key={i}>
      <div className="package-title-content">
        <h3 className="package-title">{packageCard.title}</h3>
        <h2 className="package-price"><span className="price-bold">{packageCard.price}</span><span className="price-decimal">00</span>/mo</h2>
        <p className="package-discount">{packageCard.discount}</p>
        <div className="show-hide-details" onClick={ (e) => { return handleClick(e)} }>
          <p className="see-more">See More</p>
          <p className="see-less">See Less</p>
        </div>
      </div>
      <div className="package-details">
        <div className="package-content-item">
          <img src={require(`../images/Bits/Icons/${packageCard['feature-one-icon']}`)} alt="{packageCard['feature-one-alt']}"/>
          <div className="package-content-item-details">
            <h4>{packageCard["feature-one"]}</h4>
            <p>{packageCard["feature-one-description"]}</p>
          </div>
        </div>
        <div className="package-content-item">
          <img src={require(`../images/Bits/Icons/${packageCard['feature-two-icon']}`)} alt="{packageCard['feature-two-alt']}"/>
          <div className="package-content-item-details">
            <h4>{packageCard["feature-two"]}</h4>
            <p>{packageCard["feature-two-description"]}</p>
          </div>
        </div>
        <div className="package-content-item">
          <img src={require(`../images/Bits/Icons/${packageCard['feature-three-icon']}`)} alt="{packageCard['feature-three-alt']}"/>
          <div className="package-content-item-details">
            <h4>{packageCard["feature-three"]}</h4>
            <p>{packageCard["feature-three-description"]}</p>
          </div>
        </div>
      </div>
      <div className="package-cta">{packageCard["cta-text"]}<span>1.888.888.8888</span></div>
    </PackageCardItem>
  )

  return (
    <PackageContainer className="main-container">
      <h2 className="section-title">Brüner's Best Plans:</h2>
      <LayoutContainer className="package-card-layout four-column">
        {displayPackages}
      </LayoutContainer>
      <div className="disclaimers">
        <span>*Does not include The Patriot (2000) for obvious reasons. Independence Day and Red Dawn count, but not the re-makes. Each viewing of either Rocky IV, Iron Eagle, or Top Gun will result in a $5 credit to your account which will be applied to your subsequent bill.</span>
        <span>**Ralph can’t come on Tuesday nights. Bowling league.</span>
        <span>†Badminton match must be within a 45 mile radius of Ogden, UT.</span>
      </div>
    </PackageContainer>
  )
}

export default PackageCards