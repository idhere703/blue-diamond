import React from 'react';
import ReactDOM from 'react-dom';

class Org extends React.Component {
  render() {
    return (
      <li id={this.props.orgId}>{this.props.orgName}-{this.props.orgId}</li>
    );
  }

}

export default Org;
