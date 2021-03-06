import React from 'react';
import { Link } from 'react-router-dom';
import HoverComponents from '../common/HoverComponents';

export default function WelcomePage() {
  return (
    <div className="home-welcome-page">
      <header className="app-header">
        <HoverComponents
          show
          component={
            <img src={require('../../images/rekit-react.png')} className="rekit-logo" alt="logo" />
          }
          hoverComponent={
            <div className="vertical layout fill" style={{ backgroundColor: 'red' }}>
              <div>top</div>
              <div className="flex" />
              <div>bottom</div>
            </div>
          }
        />
        <h1 className="app-title">Welcome to Rekit React</h1>
      </header>
      <div className="app-intro">
        <h3>To get started:</h3>
        <ul>
          <HoverComponents
            component={
              <li>
                Edit component <code>src/features/home/WelcomePage.js</code> for this page.
              </li>
            }
            hoverComponent={
              <div className="horizontal layout" style={{ backgroundColor: 'red' }}>
                <div>left</div>
                <div className="flex" />
                <div>right</div>
              </div>
            }
          />
          <li>
            Edit component <code>src/features/home/App.js</code> for the root container layout.
          </li>
          <li>
            To see examples, access:&nbsp;
            <Link to="/examples">/examples</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
