/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestDataLoading, requestDataSuccess, requestDataFailure } from '../actions';
import axios from 'axios';
import List from './List';
// import SearchBar from './SearchBar';

class ListContainer extends Component {
  onButtonClick(){
    return () => {
      this.props.requestDataLoading();  
      axios({
        url: 'http://localhost:3000/results',
        method: 'GET'
      }).then( (response) => {
        this.props.requestDataSuccess(response.data); 
      }).catch((error) => {
        this.props.requestDataFailure(error); 
      });
    };
  }
  
  render(){
    const { items, isFetching } = this.props.properties;
    return(
      <div>
        <div style={{padding:'8px'}}>
          <button onClick={ this.onButtonClick() }> Search </button>
        </div>
        <List items={ items } isFetching = { isFetching } />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  properties: state.properties
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    requestDataLoading,
    requestDataSuccess,
    requestDataFailure
  }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListContainer);