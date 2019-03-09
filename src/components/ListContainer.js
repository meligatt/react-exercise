/* eslint-disable react/prop-types */
import React, { Component, Fragment} from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchData } from '../actions';
import List from './List';
import { withRouter } from 'react-router-dom';
import SearchBar from './SearchBar';

class ListContainer extends Component {
  constructor(){
    super();
    this.state = {
      query: null,
      hasWarning: false
    };
  }

  onButtonClick(){
    return () => {
      if (this.state.query === null ) { 
        this.setState({hasWarning: true}); 
        return; 
      }     
      this.props.fetchData(this.state.query)
        .then(() => {
          this.setState({hasWarning: false});
        });
    };
  }

  onInputChange(value){
    this.setState({query: value});
  }
  
  render(){
    const { hasWarning } = this.state;
    const { items, isFetching } = this.props;
    return(
      <Fragment>
        <SearchBar 
          onInputChange={ (e) => this.onInputChange(e.target.value) }
          onButtonClick={ () => this.onButtonClick() }
          hasWarning={ hasWarning }
        />
        <div role="region" aria-live="polite" aria-label="results">
          <List items={ items } isFetching={ isFetching } />
        </div>        
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  items: state.properties.items,
  isFetching: state.properties.isFetching
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    fetchData
  }, dispatch)
);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ListContainer));