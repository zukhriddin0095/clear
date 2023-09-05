  
  import React, { Component, Fragment } from 'react'
import Header from '../components/header/header'
import Hero from '../components/hero/hero'
import About from '../components/aboutus/about'
import Product from '../components/product/product'
import Aptap from '../components/abtap/aptap'
import Commond from '../components/commond/commond'
  
  export class HomePage extends Component {
    render() {
      return (
        <Fragment>
          <Header />
          <Hero />
          <About />
          <Product />
          <Aptap />
          <Commond />
        </Fragment>
      )
    }
  }
  
  export default HomePage