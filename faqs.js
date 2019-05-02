import React from "react"
import styled from "@emotion/styled"
import { LayoutContainer } from "../components/layout"
import {colors} from "../styles/global"
import {faqs} from "../data/faqs.json"

const FaqItem = styled.div`

  .faq-question {
    background-color: ${colors.blue};
    height: 60px;
    width: 80%;
    margin: 20px auto 0;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;

    @media screen and (max-width: 830px) {
      width: 100%;
    }

    &.active {

      .plus-minus-icon {

        span {

          &:last-of-type {
            transform: rotate(1440deg);
          }
        }
      }
    }

    .question {
      color: ${colors.white};
      padding-left: 20px;
      max-width: 80%;
    }

    .plus-minus-icon {

      span {
        width: 20px;
        height: 4px;
        background-color: ${colors.white};
        display: block;
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        transition: .25s;

        &:last-of-type {
          transform: rotate(-90deg);
          top: 28px;
        }
      }
    }
  }

  .faq-answer {
    width: 80%;
    margin: 0 auto;
    background: ${colors.lightgray};
    display: none;

    @media screen and (max-width: 830px) {
      width: 100%;
    }

    p {
      padding: 35px 50px;
      margin: 0;

      @media screen and (max-width: 830px) {
        padding: 20px;
      }
    }

    &.opened {
      display: block;
    }
  }
`

const FaqContainer = styled.div`
  padding: 30px 20px 70px;

  .section-title {
    margin-bottom: 50px;
  }
`

const handleClick = (e) => {
  return (
    console.log(e.currentTarget),
    e.currentTarget.classList.toggle('active'),
    e.currentTarget.nextElementSibling.classList.toggle('opened')
  )
}

const FAQ = () => {

  const displayFaqs = faqs.map((faq) =>
    <FaqItem className="faq-item">
      <div className="faq-question" onClick={ (e) => { return handleClick(e)} }>
        <span className="question">{faq.question}</span>
        <div className="plus-minus-icon">
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="faq-answer">
        <p>{faq.answer}</p>
      </div>
    </FaqItem>
  )

  return (
    <FaqContainer>
      <LayoutContainer>
        <h2 className="section-title">Brüner Dynamics FAQs</h2>
        {displayFaqs}
      </LayoutContainer>
    </FaqContainer>
  )
}

export default FAQ