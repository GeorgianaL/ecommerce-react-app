import { connect } from 'react-redux';
import HomePage from '../components/home/HomePage';
import { getBrands, orderProductsByPriceAsc } from '../selectors/ProductSelectors';


const mapStateToProps = (state) => {
    return {
        products: state.products,
        brands: getBrands(state),
        priceAsc: orderProductsByPriceAsc(state),
    };
};

export default connect(mapStateToProps)(HomePage);