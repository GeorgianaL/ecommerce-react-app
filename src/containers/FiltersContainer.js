import { connect } from 'react-redux';
import Filters from '../components/filters/Filters';
import {
    getBrands,
    orderProductsByPriceAsc,
    orderProductsByPriceDesc,
    getClothing,
    getColor,
} from '../selectors/ProductSelectors';
import {setFilterClothing, setFilterDesigner, setFilterColor} from '../actions/filtersActions';

const mapStateToProps = (state) => {
    return {
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
        },
        setFilterClothing: (value, checked) => {
            dispatch(setFilterClothing(value, checked));
        },
        setFilterColor: (value, checked) => {
            dispatch(setFilterColor(value, checked));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);