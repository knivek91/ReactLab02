import React from 'react';
import Links from '../dump/main-links';

import { Routes } from '../routes';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            routes: []
        };
    }

    componentWillMount() {
        const routes = [
            { url: Routes.Character, text: 'Characters' },
            { url: Routes.Planet, text: 'Planets' },
            { url: Routes.Layout, text: 'Layout' }
        ];
        this.setState({ routes });
    }

    render() {
        return <Links routes={this.state.routes} />
    }

}

export default Home;
