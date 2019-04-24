import React from "react"
import styled from "@emotion/styled"
import { LayoutContainer } from "../components/layout"


const ThreeColumnContainer = styled.div`
  padding: 30px 20px 70px;

  .three-column {
    display: flex;
    justify-content: space-around;

    @media screen and (max-width: 600px) {
      flex-wrap: wrap;
    }
  }
`
const ColumnItem = styled.div`
  width: 33%;
  border-left: 3px solid #009FE3;
  padding: 0 20px 0 20px;

  h3 {
    color: #009FE3;
  }

  hr {
    display: none;
    border: none;
    background-color: #009FE3;
    height: 3px;
    width: 75%;
    margin: 5px 0 0;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    border-left: none;
    padding-left: 0;

    hr {
      display: block;
    }
  }
`

const ThreeColumn = () => (
  <ThreeColumnContainer>
    <h2 className="section-title">It Is Possible To Pay Us More <br/> Money</h2>
    <LayoutContainer className="three-column">
      <ColumnItem>
        <h3>Easy Care</h3>
        <hr/>
        <p>For only $5.99/mo, you can get priority customer support with annual dish relocation, free service calls, and a priority hotline which connects straight to Jimmy’s Pager – faster than a Led Zeppelin guitar solo.  Plus, you can add or cancel Easy Care at anytime. </p>
      </ColumnItem>
      <ColumnItem>
        <h3>Voice</h3>
        <hr/>
        <p>The industry term for digital phone service is VoIP. We want to mention VoIP here a few times so that we sound legit and you will forefit your dollars to us. Voice is the only VoIP connection that doesn’t subtract from your internet data allowing more time for Strongbad emails and Battlestar Galactica chat rooms.</p>
      </ColumnItem>
      <ColumnItem>
        <h3>DIRECTV</h3>
        <hr/>
        <p>If you can get Brüner at your home, you can get DIRECTV and vice versa. If you can get water in your home, you can quench your thirst and take baths. There is a hypothetical situation where you can take a bath, stream patriotic tunes, watch DIRECTV, and quench your thirst all at the same time.</p>
      </ColumnItem>
    </LayoutContainer>
  </ThreeColumnContainer>
)

export default ThreeColumn