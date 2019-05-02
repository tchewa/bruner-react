import React from "react"
import styled from "@emotion/styled"
import { LayoutContainer } from "../components/layout"
import {colors} from "../styles/global"
import {products} from "../data/products.json"


const ProductContainer = styled.div`
  background-color: ${colors.lightgray};
  text-align: center;

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

  .item-container {
    flex-wrap: wrap;
  }

  .flex {
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 600px) {
      flex-wrap: wrap;
    }
  }
`

const ProductItem = styled.div`
  width: 48%;
  background-color: ${colors.white};
  border-radius: 10px;
  box-shadow: 0 4px 10px #A9A9A9;
  margin-bottom: 40px;

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

  .product-name {
    background-color: ${colors.blue};
    color: ${colors.white};
    display: block;
    padding: 15px 20px;
    text-align: left;
    font-size: 25px;
    border-radius: 10px 10px 0 0;
  }
`

const Products = () => {

  const displayProducts = products.map((product, i) =>
    <ProductItem key={i}>
      <span className="product-name">{product.name}</span>
      <p>{product.description}</p>
    </ProductItem>
  )

  return (
    <ProductContainer className="main-container">
      <LayoutContainer>
        <h2 className="section-title">Equipment</h2>
        <p>When you sign up for Brüner Dynamics, we make it easy to get connected. We’ll send a professional technician named Ralph to install your new dish in an optimal location and set up your wifi router inside your home. </p>
        <div className="item-container flex">
          {displayProducts}
        </div>

      </LayoutContainer>
    </ProductContainer>
  )
}

export default Products