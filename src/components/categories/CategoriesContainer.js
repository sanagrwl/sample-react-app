import React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions/CategoriesActions';
import CategoriesComponent from './CategoriesComponent';

class CategoriesContainer extends React.Component {

    componentWillMount() {
        this.props.getRootCategories();
    }

    render() {
        const {categories} = this.props;
        return <CategoriesComponent categories={categories}/>;
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getRootCategories: () => dispatch(actions.getRootCategories())
    }
};

const mapStateToProps = ({categories}) => categories;

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer);

