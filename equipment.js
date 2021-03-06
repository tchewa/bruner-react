import React from "react"
import styled from "@emotion/styled"
import { LayoutContainer } from "../components/layout"
import {colors} from "../styles/global"


const EquipmentContainer = styled.div`
  background-color: ${colors.lightgray};
  text-align: center;
  padding: 30px 20px 70px;

  @media screen and (max-width: 830px) {
    text-align: left;
  }

  p {
    max-width: 75%;
    margin: 20px auto 30px;

    @media screen and (max-width: 830px) {
      max-width: 100%;
    }
  }

  .flex {
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 600px) {
      flex-wrap: wrap;
    }
  }
`

const EquipmentItem = styled.div`
  width: 48%;
  background-color: ${colors.white};
  border-radius: 10px;
  box-shadow: 0 4px 10px #A9A9A9;

  @media screen and (max-width: 600px) {
    width: 100%;
    margin-bottom: 20px;
    box-shadow: none;
  }

  p {
    margin: 0 auto;
    padding: 30px 10px 40px;

    @media screen and (max-width: 830px) {
      padding: 20px;
    }
  }

  .equipment-name {
    background-color: ${colors.blue};
    color: ${colors.white};
    display: block;
    padding: 15px 20px;
    text-align: left;
    font-size: 25px;
    border-radius: 10px 10px 0 0;
  }
`

const Equipment = () => (
  <EquipmentContainer>
    <LayoutContainer>
      <h2 className="section-title">Equipment</h2>
      <p>When you sign up for Brüner Dynamics, we make it easy to get connected. We’ll send a professional technician named Ralph to install your new dish in an optimal location and set up your wifi router inside your home. </p>

      <div className="item-container flex">
        <EquipmentItem>
          <span className="equipment-name">Brüner Satellite Dish</span>
          <p>To access Brüner you’ll need a Brüner Satellite Dish. Jimmy’s cousin Ralph will test for the best installation location and install the dish on your abode. He’ll probably stay for dinner.</p>
        </EquipmentItem>
        <EquipmentItem>
          <span className="equipment-name">Brüner Wi-Fi Modem</span>
          <p>The Brüner WiFi Modem gives you wireless internet throughout your home. It also includes a Voice service adapter so we can listen and see if anything cool is happening at your place. </p>
        </EquipmentItem>
      </div>

    </LayoutContainer>
  </EquipmentContainer>
)

export default Equipment