import { connect } from 'react-redux';
import HomePage from '../components/home/HomePage';
import {
    getBrands,
    orderProductsByPriceAsc,
    orderProductsByPriceDesc,
    getClothing,
    getColor,
} from '../selectors/ProductSelectors';
import { setFilterDesigner } from '../actions/filtersActions';


const mapStateToProps = (state) => {
    return {
        products: state.products.products,
        brands: getBrands(state),
        priceAsc: orderProductsByPriceAsc(state),
        priceDesc: orderProductsByPriceDesc(state),
        clothing: getClothing(state),
        colors: getColor(state),
    };
};

const mapDispatchToProps = (dispatch) => {
  return {
      setFilterDesigner: (value, checked) => {
          dispatch(setFilterDesigner(value, checked));
      }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);