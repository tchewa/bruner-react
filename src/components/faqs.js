import React from "react"
import styled from "@emotion/styled"
import { LayoutContainer } from "../components/layout"


const FaqAnswer = styled.div`
  width: 80%;
  margin: 0 auto;
  background: #F6F6F6;
  display: none;

  p {
    padding: 35px 50px;
    margin: 0;
  }

  &.opened {
    display: block;
  }
  `

const FaqQuestion = styled.div`
  background-color: #009FE3;
  height: 60px;
  width: 80%;
  margin: 20px auto 0;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

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
    color: #FFF;
    padding-left: 20px;
  }

  .plus-minus-icon {
    span {
      width: 20px;
      height: 4px;
      background-color: #FFF;
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
  `

  const FaqContainer = styled.div`
    padding: 30px 20px 70px;

    .section-title {
      margin-bottom: 50px;
    }

  `
const handleClick = (e) => {
  return (
    e.currentTarget.classList.toggle('active'),
    e.currentTarget.nextElementSibling.classList.toggle('opened')
  )
};


const FAQ =  () =>
    <FaqContainer>
    <LayoutContainer>
      <h2 className="section-title">Bruner Dynamics FAQs</h2>
      <FaqQuestion className="faq-question" onClick={ (e) => { return handleClick(e)} }>
        <span className="question">Is James listening to my conversation?</span>
        <div className="plus-minus-icon">
          <span></span>
          <span></span>
        </div>
      </FaqQuestion>
      <FaqAnswer>
        <p>Brüner Dynamics is commited to privacy, autonomy, transparency, and idiosyncrasies. In order to maintain our high standard of product, James reserves the right to listen in to conversations in your home. In exceptional circumstances, we reserve the right to have James join your conversation with a really great zinger, joke, quip, or comeback.</p>
      </FaqAnswer>
      <FaqQuestion className="faq-question" onClick={ (e) => { return handleClick(e)} }>
        <span className="question">Why should I get Bruner Dynamics?</span>
        <div className="plus-minus-icon">
          <span></span>
          <span></span>
        </div>
      </FaqQuestion>
      <FaqAnswer>
        <p>Remember when you were a kid in the 80’s and you were obsessed with space and the future? Well, the future is upon us. We’re still waiting for a nuclear-powered flying Delorean that runs on refuse, but we do have satellites. Hi-tech space craft orbiting our planet, beaming down cat videos to an adoring public. Like the majestic Millennium Falcon from long ago, Brüner Dynamics will put you in touch with the future with a bad-ass satellite dish mounted directly onto your house. “Rogue Two checking in.”</p>
      </FaqAnswer>
      <FaqQuestion className="faq-question" onClick={ (e) => { return handleClick(e)} }>
        <span className="question">Who is the guy who keeps walking in front of my place? Is that Ralph?</span>
        <div className="plus-minus-icon">
          <span></span>
          <span></span>
        </div>
      </FaqQuestion>
      <FaqAnswer>
        <p>Ralph doesn’t believe in GPS, so he locates the homes where he performs dish installations via a complicated combination of smell, instinct,  a divining rod, quantum mathematics, and a form of West African witchcraft. If you hear a strange, oddly-loud humming noise, and you look out the window and see a man with a hand-crafted robo-helmet in your front yard, you have likely been found by Ralph.</p>
      </FaqAnswer>
      <FaqQuestion className="faq-question" onClick={ (e) => { return handleClick(e)} }>
        <span className="question">Where does space start?</span>
        <div className="plus-minus-icon">
          <span></span>
          <span></span>
        </div>
      </FaqQuestion>
      <FaqAnswer>
        <p>An excellent question. At Bruner Dynamics, we generally see space as any matter, atmosphere, or void not currently occupied by James Bruner. Therefore, space starts and ends with Mr. Bruner.</p>
      </FaqAnswer>
    </LayoutContainer>
  </FaqContainer>





  export default FAQ