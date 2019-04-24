import React from "react"
import styled from "@emotion/styled"
import { LayoutContainer } from "../components/layout"
import MoneyIcon from "../images/Bits/Icons/money.svg"
import BellIcon from "../images/Bits/Icons/bell.svg"
import ClapsIcon from "../images/Bits/Icons/claps.svg"
import VideoIcon from "../images/Bits/Icons/video.svg"


const PackageContainer = styled.div`
  padding: 30px 20px 70px;
  .four-column {
    display: flex;

    @media screen and (max-width: 1000px) {
      flex-wrap: wrap;
    }
  }
  .disclaimers {
    max-width: 35%;
    margin: 50px auto;
    span {
      display: block;
      margin-bottom: 15px;
    }
    @media screen and (max-width: 1200px) {
      max-width: 75%;
    }
  }

  .package-card-layout {
    max-width: 1100px;
  }
`

const PackageCardItem = styled.div`
  width: 25%;
  border-left: 3px solid #D1D3D6;
  padding: 20px 20px 100px;
  position: relative;
  box-sizing: border-box;
  background-color: #FFF;
  transition: .25s;
  height: 500px;

  @media screen and (max-width: 1000px) {
    width: 50%;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 830px) {
    width: 100%;
    box-shadow: 5px 5px 21px 0px #D8D8D8;
    border-left: none;
    height: auto;
  }


  &:hover {
    box-shadow: 5px 5px 21px 0px #D8D8D8;
    border-left: 3px solid transparent;
    transform: scale(1.07);
    z-index: 5;

    .package-title {
      color: #99AF21;
    }
    .package-cta {
      background-color: #99AF21;
    }
    .package-title-content {
      border-bottom: 2px solid #99AF21;
    }

    @media screen and (max-width: 1000px) {
      transform: scale(1);
      border-left: none;
    }
  }

  img {
    display: inline-block;
    margin-right: 10px;
  }

  h4 {
    display: inline-block;
  }


  .package-title-content {
    border-bottom: 2px solid #009FE3;
    margin-bottom: 25px;
    p {
      margin-bottom: 20px;
    }
  }

  .package-title {
    text-transform: uppercase;
    font-size: 15px;
    color: #009FE3;
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
    color: #8B8F95;
  }

  .package-cta {
    background-color: #009FE3;
    height: 60px;
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
    border-radius: 0 0 10px 10px;
    text-transform: uppercase;
    color: #FFF;
    padding: 10px 20px 0;

    span {
      display: block;
      font-size: 21px;
    }
  }

  .package-content-item {
    p {
      margin-left: 30px;
    }
  }
`

const PackageCards = () => (
  <PackageContainer>
    <h2 className="section-title">Bruner's Best Plans:</h2>
    <LayoutContainer className="package-card-layout four-column">
      <PackageCardItem>
        <div className="package-title-content">
          <h3 className="package-title">Pamantha</h3>
          <h2 className="package-price"><span className="price-bold">50</span><span className="price-decimal">00</span>/mo</h2>
          <p>$5/mo after we're best friends</p>
        </div>
        <div class="package-content-item">
          <img src={MoneyIcon} alt="Money"/>
          <h4>Free Change</h4>
          <p>Need to break a $20? We can help.</p>
        </div>
        <div class="package-content-item">
          <img src={VideoIcon} alt="Video"/>
          <h4>Free Change</h4>
          <p>Need to break a $20? We can help.</p>
        </div>
        <div class="package-content-item">
          <img src={ClapsIcon} alt="Claps"/>
          <h4>Free Change</h4>
          <p>Need to break a $20? We can help.</p>
        </div>
        <div className="package-cta">Order the pamantha<span>1.888.888.8888</span></div>
      </PackageCardItem>
      <PackageCardItem>
        <div className="package-title-content">
          <h3 className="package-title">el ten eleven</h3>
          <h2 className="package-price"><span className="price-bold">50</span><span className="price-decimal">00</span>/mo</h2>
          <p>$5/mo after we're best friends</p>
        </div>
        <div class="package-content-item">
          <img src={BellIcon} alt="Bell"/>
          <h4>Free Change</h4>
          <p>Need to break a $20? We can help.</p>
        </div>
        <div class="package-content-item">
          <img src={VideoIcon} alt="Video"/>
          <h4>Free Change</h4>
          <p>Need to break a $20? We can help.</p>
        </div>
        <div class="package-content-item">
          <img src={ClapsIcon} alt="Claps"/>
          <h4>Free Change</h4>
          <p>Need to break a $20? We can help.</p>
        </div>
        <div className="package-cta">select el ten eleven<span>1.888.888.8888</span></div>
      </PackageCardItem>
      <PackageCardItem>
        <div className="package-title-content">
          <h3 className="package-title">st. jimmys special</h3>
          <h2 className="package-price"><span className="price-bold">50</span><span className="price-decimal">00</span>/mo</h2>
          <p>$5/mo after we're best friends</p>
        </div>
        <div class="package-content-item">
          <img src={VideoIcon} alt="Video"/>
          <h4>Free Change</h4>
          <p>Need to break a $20? We can help.</p>
        </div>
        <div class="package-content-item">
          <img src={MoneyIcon} alt="Money"/>
          <h4>Free Change</h4>
          <p>Need to break a $20? We can help.</p>
        </div>
        <div class="package-content-item">
          <img src={BellIcon} alt="Bell"/>
          <h4>Free Change</h4>
          <p>Need to break a $20? We can help.</p>
        </div>
        <div className="package-cta">become enlightened<span>1.888.888.8888</span></div>
      </PackageCardItem>
      <PackageCardItem>
        <div className="package-title-content">
          <h3 className="package-title">cult hero classic</h3>
          <h2 className="package-price"><span className="price-bold">50</span><span className="price-decimal">00</span>/mo</h2>
          <p>$5/mo after we're best friends</p>
        </div>
        <div class="package-content-item">
          <img src={MoneyIcon} alt="Money"/>
          <h4>Free Change</h4>
          <p>Need to break a $20? We can help.</p>
        </div>
        <div class="package-content-item">
          <img src={BellIcon} alt="Bell"/>
          <h4>Free Change</h4>
          <p>Need to break a $20? We can help.</p>
        </div>
        <div class="package-content-item">
          <img src={ClapsIcon} alt="Claps"/>
          <h4>Free Change</h4>
          <p>Need to break a $20? We can help.</p>
        </div>
        <div className="package-cta">join the cult<span>1.888.888.8888</span></div>
      </PackageCardItem>
    </LayoutContainer>
    <div className="disclaimers">
      <span>*Does not include The Patriot (2000) for obvious reasons. Independence Day and Red Dawn count, but not the re-makes. Each viewing of either Rocky IV, Iron Eagle, or Top Gun will result in a $5 credit to your account which will be applied to your subsequent bill.</span>
      <span>**Ralph can’t come on Tuesday nights. Bowling league.</span>
      <span>†Badminton match must be within a 45 mile radius of Ogden, UT.</span>
    </div>
  </PackageContainer>
)

export default PackageCards