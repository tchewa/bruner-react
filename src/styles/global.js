import React from "react"
import { Global, css } from '@emotion/core'

export const colors = {
  blue: "#009FE3",
  green: "#99AF21",
  lightgray: "#F6F6F6",
  darkestgray: "#5d6065",
  darkergray: "#D8D8D8",
  darkgray: "#8B8F95",
  white: "#FFF",
  black: "#000"
}

const BaseStyles = () => (
  <Global
  styles={css`
  @import url('https://fonts.googleapis.com/css?family=Maven+Pro:400,500,700%7CSource+Sans+Pro:300,400,700');
  html, body {
    margin: 0px;
    padding: 0;
    font-family: Maven Pro, Helvetica Neue, sans-serif;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  button, input {
    margin: 0px;
    padding: 0px;
    border: none;
  }

  p {
    line-height: 1.25em;
  }

  h2 {
    font-size: 36px;
    font-weight: 400;
    margin: 0px;
  }

  h3 {
    margin: 0px;
    font-size: 24px;
    font-weight: 400;
  }

  h4 {
    margin: 0;
    font-size: 20px;
    font-weight: 400;
  }

  li {
    list-style-type: none;
    line-height: 1.25em;
  }

  .section-title {
    text-align: center;
    margin: 20px auto;

    @media screen and (max-width: 600px) {
      text-align: left;
      margin-top: 0;
    }
  }

  .disclaimers {
    font-size: 10px;
    color: #7D8086;
  }

  .main-container {
    padding: 30px 20px 70px;
  }
  `}
/>
)

export default BaseStyles