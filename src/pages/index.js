import React from "react"

import Layout from "../components/layout"
import SideBySide from "../components/side-by-side"
import ThreeColumn from "../components/3-column"
import CtaComponent from "../components/cta";
import Products from "../components/products"
import FAQ from "../components/faqs"
import PackageCards from "../components/packages"

const IndexPage = () => (
  <Layout>
    <PackageCards />
    <SideBySide />
    <ThreeColumn />
    <CtaComponent />
    <SideBySide />
    <Products />
    <FAQ />
  </Layout>
)

export default IndexPage
