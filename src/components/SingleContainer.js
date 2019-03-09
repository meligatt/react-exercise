/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchSingleProperty } from '../actions';
import Single from './Single';

class SingleContainer extends Component {
  componentDidMount(){
    const id = this.props.match.params.id;
    this.props.fetchSingleProperty(id);
  }
  render(){
    const { item } = this.props;
    return (
      <Single item={ item }/>
    );
  }
}

const mapStateToProps = state => ({
  item: state.singleProperty.item
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    fetchSingleProperty,
  }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleContainer);