/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestDataLoading, requestDataSuccess, requestDataFailure } from '../actions';
import axios from 'axios';
import List from './List';
// import SearchBar from './SearchBar';

class ListContainer extends Component {
  constructor(){
    super();
    this.state = {
      query: null,
      warning: false
    };
  }

  onButtonClick(){
    return () => {
      if (this.state.query === null ) { 
        this.setState({warning: true}); 
        return; 
      }
      this.props.requestDataLoading();
      axios({
        url: 'http://localhost:3000/results',
        params: {
          city: this.state.query
        },
        method: 'GET'
      }).then( (response) => {
        this.props.requestDataSuccess(response.data);
        this.setState({warning: false});
      }).catch((error) => {
        this.props.requestDataFailure(error); 
      });
    };
  }

  onInputChange(e){
    this.setState({query: e.target.value});
  }
  
  render(){
    const { warning } = this.state;
    const { items, isFetching } = this.props;
    return(
      <div>
        <div style={{padding:'8px'}}>
          <input type="text" onChange={(e) => this.onInputChange(e) }/>
          <button onClick={ this.onButtonClick() }> Search </button>
        </div>
        { warning ? <div>Enter a city to search </div> : <List items={ items } isFetching = { isFetching } />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.properties.items,
  isFetching: state.properties.isFetching
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