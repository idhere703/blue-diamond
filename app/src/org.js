import React from 'react';
import ReactDOM from 'react-dom';

class Org extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      orgInfo: {
        
      }
    };
  }

  render() {
    return (
      <li id={this.props.orgId}>{this.props.orgName}-{this.props.orgId}</li>
    );
  }

}

export default Org;
