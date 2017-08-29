import { connect } from 'react-redux';
import Filters from '../components/filters/Filters';
import {
    getBrands,
    getClothing,
    getColor
} from '../selectors/ProductSelectors';
import {setFilterClothing, setFilterDesigner, setFilterColor, setFilterPrice} from '../actions/filtersActions';

const mapStateToProps = (state) => {
    return {
        brands: getBrands(state),
        clothing: getClothing(state),
        colors: getColor(state)
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
        setFilterPrice: (value) => {
            dispatch(setFilterPrice(value));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);