/* eslint-disable react/prop-types */
import React, { Component } from 'react';
// import Single from './Single';
import { connect } from 'react-redux';

class SingleContainer extends Component {
  render(){
    // items[itemIndex]
    return (
      // <Single id={this.props.match.params.id} item={}/>
      <div>SingleContainer</div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.properties.items
});

export default connect(
  mapStateToProps,
  null
)(SingleContainer);