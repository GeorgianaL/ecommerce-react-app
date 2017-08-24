import { connect } from 'react-redux';
import Section from '../components/section/Section';

const mapStateToProps = (state) => {
    return {
        products: state.products
    };
};

export default connect(mapStateToProps)(Section);