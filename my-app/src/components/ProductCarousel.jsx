import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import tree from "../resources/images/tree.jpg";
import "../style/ProductCarousel.css";
 
class ProductCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={tree} />
                    Test
                </div>
                <div>
                <img src={tree} />
                    Test
                </div>
                <div>
                <img src={tree} />
                    Test
                </div>
            </Carousel>
        );
    }
}
 
export default ProductCarousel;