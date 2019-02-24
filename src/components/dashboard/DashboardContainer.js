import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import actions from '../../actions/DashboardActions'
import DashboardComponent from './DashboardComponent';

class DashboardContainer extends React.Component {

  render() {
      const {drawerOpen, openDrawerAction, closeDrawerAction, children} = this.props
      return (
        <DashboardComponent 
          isDrawerOpen={drawerOpen}
          openDrawerAction={openDrawerAction}
          closeDrawerAction={closeDrawerAction}>
        {children}
        </DashboardComponent>
      );
  }
  
}

const mapStateToProps = (state) => state.dashboard

const mapDispatchToProps = (dispatch) => {
  return {
    openDrawerAction: () => dispatch(actions.openDrawerAction()),
    closeDrawerAction: () => dispatch(actions.closeDrawerAction())
  }
};

const connectedDashboard = connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)
export default withRouter(connectedDashboard);