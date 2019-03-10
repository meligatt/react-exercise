/* eslint-disable react/prop-types */
import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchSingleProperty } from '../actions';
import Single from './Single';
import { withRouter } from 'react-router-dom';

class SingleContainer extends Component{
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchSingleProperty(id);
  }
  render() {
    const { item, image, isFetching } = this.props;
    return (
      <Fragment>
        { isFetching && <div>Loading data...</div> }
        { !isFetching && image && <Single item = { item } image = { image }/> } 
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  item: state.singleProperty.item,
  image: state.singleProperty.image,
  isFetching: state.singleProperty.isFetching
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    fetchSingleProperty,
  }, dispatch)
);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleContainer));