import React from 'react';
import { connect } from 'react-redux';
import {getRootCategories} from '../../actions/CategoriesActions';
import CategoriesComponent from './CategoriesComponent';

class CategoriesContainer extends React.Component {

    componentWillMount() {
        this.props.getRootCategories();
    }

    render() {
        return <CategoriesComponent />;
    }
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        getRootCategories: () => {
            dispatch(getRootCategories())
        }
    }
};

const mapStateToProps = (state) => {return {}}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer);

