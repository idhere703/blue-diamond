import React from 'react';
import ReactDOM from 'react-dom';
import Org from './org';
import TestOrgs from '../data/testOrgs';

class MainSearch extends React.Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Search for an Org" />

        <ul>
          {TestOrgs.map((org, index) => {
            return (<Org key={index} orgName={org} orgId={index}></Org>);
          })}
        </ul>
      </div>
    );
  }
}

export default MainSearch;
