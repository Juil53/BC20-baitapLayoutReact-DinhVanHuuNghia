import React, { Component } from "react";
import Header from "./header";
import Carousel from "./carousel";
import Listproduct from "./listproduct";
import Footer from "./footer";

class BaitapLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Carousel />
        <Listproduct />
        <Footer />
      </div>
    );
  }
}
export default BaitapLayout;
