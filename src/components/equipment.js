import React from "react"
import styled from "@emotion/styled"
import { LayoutContainer } from "../components/layout"


const EquipmentContainer = styled.div`
  background-color: #F6F6F6;
  text-align: center;
  padding: 30px 20px 70px;

  p {
    max-width: 75%;
    margin: 20px auto 30px;
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
  background-color: #FFF;
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
  }

  .equipment-name {
    background-color: #009FE3;
    color: #FFF;
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
          <span className="equipment-name">Bruner Satellite Dish</span>
          <p>To access Brüner you’ll need a Brüner Satellite Dish. Jimmy’s cousin Ralph will test for the best installation location and install the dish on your abode. He’ll probably stay for dinner.</p>
        </EquipmentItem>
        <EquipmentItem>
          <span className="equipment-name">Bruner Wi-Fi Modem</span>
          <p>The Brüner WiFi Modem gives you wireless internet throughout your home. It also includes a Voice service adapter so we can listen and see if anything cool is happening at your place. </p>
        </EquipmentItem>
      </div>

    </LayoutContainer>
  </EquipmentContainer>
)

export default Equipment