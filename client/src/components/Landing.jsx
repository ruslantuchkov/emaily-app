import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {};
}

class Landing extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Emaily!</h1>
        Collect feedback from users.
      </div>
    );
  }
}

export default connect(mapStateToProps)(Landing);
