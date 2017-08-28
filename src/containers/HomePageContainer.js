import { connect } from 'react-redux';
import HomePage from '../components/home/HomePage';

const mapStateToProps = (state) => {
    return {
        products: state.products.products,
    };
};

export default connect(mapStateToProps)(HomePage);