import React from "react"
import styled from "@emotion/styled"
import { LayoutContainer } from "../components/layout"
import {colors} from "../styles/global"
import {columns} from "../data/columns.json"


const ThreeColumnContainer = styled.div`

  @media screen and (max-width: 600px) {

    br {
      display: none;
    }
  }

  .three-column {
    display: flex;
    justify-content: space-around;

    @media screen and (max-width: 600px) {
      flex-wrap: wrap;

      br {
        display: none;
      }
    }
  }
`
const ColumnItem = styled.div`
  width: 33%;
  border-left: 3px solid ${colors.blue};
  padding: 0 20px 0 20px;

  h3 {
    color: ${colors.blue};
  }

  hr {
    display: none;
    border: none;
    background-color: ${colors.blue};
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

const ThreeColumn = () => {

  const displayColumns = columns.map((column, i) =>
    <ColumnItem key={i}>
      <h3>{column.title}</h3>
      <hr/>
      <p>{column.columnContent}</p>
    </ColumnItem>
  )

  return (
    <ThreeColumnContainer className="main-container">
      <h2 className="section-title">It is Possible to Pay Us More <br/> Money</h2>
      <LayoutContainer className="three-column">
        {displayColumns}
      </LayoutContainer>
    </ThreeColumnContainer>
  )
}

export default ThreeColumn