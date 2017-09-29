import React from 'react';
import Links from '../dump/main-links';
import { Routes } from '../routes';

class Layout extends React.Component {


    render() {

        const routes = [
            { url: Routes.LayoutCharacters, text: 'Characters', cssClass: 'btn btn-danger' },
            { url: Routes.LayoutPlanets, text: 'Planets', cssClass: 'btn btn-default' }
        ]
        return (
            <div className="Jumbotron">
                <h1>Layout</h1>
                <Links routes={routes} />
                {this.props.children}
            </div>
        );
    }

}


export default Layout;