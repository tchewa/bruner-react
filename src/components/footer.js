import React from "react"
import { LayoutContainer } from "./layout"
import FooterLogo from '../images/bruner-color-logo.jpg'
import BgFooter from '../images/bg-footer.jpg'
import styled from "@emotion/styled"


const FooterContent = styled.div`
  width: 30%;
  margin-top: 50px;

  @media screen and (max-width: 830px) {
    width: 100%;
    margin-top: 0px;
  }
`

const FooterContainer = styled.footer`
  background-image: url(${BgFooter});
  background-size: cover;
  height: 600px;
  padding: 30px 20px 70px;

  @media screen and (max-width: 830px) {
    height: 300px;
  }

  @media screen and (max-width: 830px) {
    padding: 30px;
  }

  .footer-logo {
    width: 150px;
  }

  hr {
    border: none;
    background-color: #BED733;
    height: 2px;
  }

  h3 {
    font-size: 24px;
    font-weight: 100;
  }
  span {
    display: block;
    padding-top: 20px;
  }
`

const Footer = () => (
  <FooterContainer>
    <LayoutContainer>
        <FooterContent>
          <img src={FooterLogo} className="footer-logo" alt='footer logo'/>
          <hr/>
          <h3>Order Now</h3>
          <h3>1.888.888.8888</h3>
          <span className="disclaimers">© 2018. All rights reserved. Privacy Policy | Terms & Conditions</span>
        </FooterContent>
    </LayoutContainer>
  </FooterContainer>
)

export default Footer