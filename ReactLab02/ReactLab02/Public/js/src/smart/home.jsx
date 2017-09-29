import React from 'react';
import Links from '../dump/main-links';

import { Routes } from '../routes';

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const routes = [
            { url: Routes.Characters, text: 'Characters', cssClass: 'btn btn-primary' },
            { url: Routes.Planets, text: 'Planets', cssClass: 'btn btn-info' },
            { url: Routes.Layout, text: 'Layout', cssClass: 'btn btn-warning' }
        ]
        return <Links routes={routes} />
    }

}

export default Home;
