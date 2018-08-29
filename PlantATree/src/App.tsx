import * as React from 'react';
import './App.css';

export default class App extends React.Component<{}> {
  public render() {
    return (
      <div className="container-fluid">
      <div className="centreText">
        {/* React components must have a wrapper node/element */}
        <h1>Plant A Tree . com</h1>
        <h2>Watch this spaces, big things coming soon</h2>
      </div>
    </div>
    );
  }
}