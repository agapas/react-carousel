import * as React from 'react';
import '../styles/app.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Welcome to React</h1>
        </header>
        <p className="app-intro">
          To get started, edit <code>src/components/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
