import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setActiveCity } from '../actions';

class City extends Component {
  selectCity = () => {
    this.props.setActiveCity(this.props.city);
  }

  render() {
    return (
      <div className="list-group-item" onClick={this.selectCity} >
        {this.props.city.name}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setActiveCity },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(City);
