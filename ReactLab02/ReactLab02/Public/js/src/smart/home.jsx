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
            { url: Routes.Characters, text: 'Characters', cssClass:'btn btn-primary' },
            { url: Routes.Planets, text: 'Planets', cssClass: 'btn btn-info' },
            { url: Routes.Layout, text: 'Layout', cssClass: 'btn btn-warning' }
        ];
        this.setState({ routes });
    }

    render() {
        return <Links routes={this.state.routes} />
    }

}

export default Home;
