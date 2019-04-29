import React from "react"
import styled from "@emotion/styled"
import { LayoutContainer } from "../components/layout"
import {colors} from "../styles/global"
import {columns} from "../data/columns.json"


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

  const displayColumns = columns.map((column) =>
    <ColumnItem>
      <h3>{column.title}</h3>
      <p>{column.columnContent}</p>
    </ColumnItem>
  )

  return (
    <ThreeColumnContainer>
      <LayoutContainer className="three-column">
        {displayColumns}
      </LayoutContainer>
    </ThreeColumnContainer>
  )
}

export default ThreeColumn