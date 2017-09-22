import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Router as RouterRoutes } from './routes';

import Characters from './smart/characters';
import Planets from './smart/planets';
import Home from './smart/home';
import CharacterDetail from './smart/character-detail';

const Layout = (props) => (
    <div className="jumbotron">
        <p>Layout</p>
        {props.children}
    </div>
);

render(
    <Router history={browserHistory} >
        <Route path={RouterRoutes.Home} component={Home} />
        <Route path={RouterRoutes.Characters} component={Characters} />
        <Route path={RouterRoutes.CharacterDetail} component={CharacterDetail} />
        <Route path={RouterRoutes.Planets} component={Planets} />
        <Route path={RouterRoutes.Layout} component={Layout} >
            <Route path={RouterRoutes.LayoutAbout} component={Home} />
        </Route>
    </Router>,
    document.getElementById('app')
);