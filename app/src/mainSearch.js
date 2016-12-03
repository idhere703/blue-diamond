import React from 'react';
import ReactDOM from 'react-dom';
import Org from './org';
import TestOrgs from '../data/testOrgs';

class MainSearch extends React.Component {
  render() {

    let content = (
      <div className="container">
        <input type="text" placeholder="Search for an Org" />

        <ul>
          {TestOrgs.map((org, index) => {
            return (<Org key={index} orgName={org} orgId={index}></Org>);
          })}
        </ul>
      </div>
    );

    return content;
  }
}

export default MainSearch;
