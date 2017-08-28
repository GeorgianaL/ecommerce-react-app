/**
 * Created by g.lingurariu on 7/5/2017.
 */
// should have an image, a few lines of text and a price
import React from 'react';
import ProductPage from '../product/ProductPage';
import { Link } from 'react-router-dom';

export default class SectionItem extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-md-4 product-item">
                <Link to="/product" className="link-class">
                    <div className="card card-product">
                        <div className="row card-image">
                            <img src={this.props.imageUrl} />
                        </div>
                        <div className="content">
                            <div className="row">
                                <h4 className="brand">{this.props.name}</h4>
                            </div>
                            <div className="row">
                                <div className="short-description">
                                    <p>{this.props.text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <div className="row card-footer">
                    {
                        this.props.oldPrice && this.props.oldPrice > this.props.price
                            ?
                            <div className="price">
                                <div className="old-price pull-left">{'€ '.concat(this.props.oldPrice.toString())}</div>
                                <div className="new-price pull-right">{'€ '.concat(this.props.price.toString())}</div>
                            </div>
                            :
                            <div className="price">{'€ '.concat(this.props.price.toString())}</div>
                    }
                    <button className="btn btn-simple wishlist-btn pull-right" id="wishlist-btn">
                         <i className="fa fa-heart-o"> Wishlist</i>
                    </button>
                </div>
            </div>
        );
    }
}
