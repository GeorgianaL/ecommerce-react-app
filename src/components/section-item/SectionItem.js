/**
 * Created by g.lingurariu on 7/5/2017.
 */
// should have an image, 5 lines of text and a price
import React from 'react';

export default class SectionItem extends React.Component{
    render() {
        const {id, imageUrl, name, text, price} = this.props;
        return (
            <div className="row col-md-4">
                <div className="card card-product card-plain">
                    <div className="row card-image">
                        <img src={imageUrl} />
                    </div>
                    <div className="content">
                        <div className="row">
                            <h4 className="brand">{name}</h4>
                        </div>
                        <div className="row">
                            <div className="short-description">
                                <p>{text}</p>
                            </div>
                        </div>
                        <div className="row card-footer">
                            <div className="price">
                                {price}
                            </div>
                            {/*<div className="price price-old"></div>*/}
                            {/*<div className="price price-new"></div>*/}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
