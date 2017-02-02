import React from 'react';
import { Route, IndexRoute } from 'react-router';

import CoreLayout from '../layouts/Core.js';

import InsertMessageView from '../views/InsertMessage.js';
import HomeView from '../views/Home.js';

export default (<Route>
  <Route path='/' component={ CoreLayout }>
    <IndexRoute component={ HomeView } />
    <Route path='/insert' component={ InsertMessageView } />
    // This is required for zendesk to route correctly.
    <Route path='/index.html' component={ HomeView } />
  </Route>
</Route>);
