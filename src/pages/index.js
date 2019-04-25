import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SideBySide from "../components/side-by-side"
import ThreeColumn from "../components/3-column"
import CtaComponent from "../components/cta";
import BrunerDevices from "../images/bruner-devices.png"
import Satellite from "../images/satellite.png"
import Equipment from "../components/equipment"
import FAQ from "../components/faqs"
import PackageCards from "../components/packages"

const IndexPage = () => (
  <Layout>
    <SEO title="Bruner Site" keywords={[`gatsby`, `application`, `react`]} />
    <PackageCards></PackageCards>
    <SideBySide imgsrc={BrunerDevices} imgalt="Bruner Devices" bgcolor="gray">
        <h2>We're Here to Brand Everything, Everywhere, Anytime</h2>
        <p>Flat screen tv? Wireless device? Tablet? Laptop? We can put our brand image on all of them. We can do it whenever we want, but mostly you'll see our logo on your screen when you're experiencing technical difficulties: This way, you will associate our brand with some of your most emotional moments.</p>
    </SideBySide>
    <ThreeColumn></ThreeColumn>
    <CtaComponent></CtaComponent>
    <SideBySide imgsrc={Satellite} imgalt="Satellite" bgcolor="white">
      <h2>What is a Bruner?</h2>
      <p>You might as well ask what salt tastes like or how water feels. Until you've interacted with a Bruner first hand, you can only imagine how great you'll feel. A warm handshake, a compliment, a rubix cube coaching session, or just a chat about your weekend will leave you feeling better about your self and the world in general.</p>
      <p>Bruner Dynamics is on course to change the world:</p>
      <ul>
        <li>98% of Americans have never hung out with Jimmy. That's about to change. With satellite technology, you can hang with him all day, every day.</li>
        <li>You've probably seen our ambiguous guerilla marketing stickers plastered at various locations from laptops to street lamps.</li>
      </ul>
    </SideBySide>
    <Equipment></Equipment>
    <FAQ></FAQ>
  </Layout>
)

export default IndexPage
