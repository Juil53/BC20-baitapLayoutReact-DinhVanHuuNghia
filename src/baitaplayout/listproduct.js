import React, { Component } from "react";
import Product from "./product";
class Listproduct extends Component {
  render() {
    return (
      <section id="smartphone" class="container-fluid pt-5 pb-5">
        <h1 class="text-white text-center">BEST SMARTPHONE</h1>
        <div class="row">
        <Product />
        <Product />
        <Product />
        <Product />
        </div>
    </section> 
    );
  }
}
export default Listproduct;
