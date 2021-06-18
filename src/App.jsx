import React, { Suspense } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Grommet, Heading } from 'grommet';
import routes from './routes';
function App() {
  return (
    <Grommet className='App'>
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
            <li>
              <Link to='/date'>Date</Link>
            </li>
            <li>
              <Link to='/hospital'>Hospital</Link>
            </li>
          </ul>
        </nav>
        <Heading size='large' color='#00739D'>
          I've Mastered Grommet! 1.1
        </Heading>
        <Suspense fallback={<></>}>
          <Switch>
            {routes.map(({ isPrivate = false, ...rest }, index) => (
              <Route key={index} {...rest} />
            ))}
          </Switch>
        </Suspense>
      </div>
    </Grommet>
  );
}
export default App;
