import React, { Suspense } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import routes from './routes';
function App() {
  return (
    <div>
      <nav>
        <h1>This is my app</h1>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
      <Suspense fallback={<></>}>
        <Switch>
          {routes.map(({ isPrivate = false, ...rest }, index) => (
            <Route key={index} {...rest} />
          ))}
        </Switch>
      </Suspense>
    </div>
  );
}
export default App;
