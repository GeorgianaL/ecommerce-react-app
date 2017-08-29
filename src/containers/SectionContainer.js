import { connect } from 'react-redux';
import Section from '../components/section/Section';
import { filteredProducts } from '../selectors/ProductSelectors';

const mapStateToProps = (state) => {
    return {
        products: filteredProducts(state),
        filter: state.products.sorting,
    };
};

export default connect(mapStateToProps)(Section);