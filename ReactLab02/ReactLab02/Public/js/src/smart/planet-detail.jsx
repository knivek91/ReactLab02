import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';

import Header from '../stalees/table-header';
import { RowPlanetDetail as Tbody } from '../stalees/table-row';

import { Routes } from '../routes';

class PlanetDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            planet: {},
            headers: ['Property', 'Value']
        };
    }

    componentWillMount() {
        const { id } = this.props.params;
        axios.get(`https://swapi.co/api/planets/${id}`)
            .then(({ data }) => {
                const planet = data;
                this.setState({ planet });
            })
            .catch((err) => { console.log(err); alert('there was an error retreiving the data.'); });
    }

    render() {

        const { headers, planet } = this.state

        const ths = headers.map((item, index) => <Header key={index} text={item} />)

        return (
            <div>
                <Link to={Routes.Home} className="btn btn-warning">Go Home</Link>
                <Link onClick={() => { this.props.history.goBack(); }} className="btn btn-default">Go Back</Link>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            {ths}
                        </tr>
                    </thead>
                    <Tbody planet={planet} />
                </table>
            </div>
        )
    }

}

export default PlanetDetail;
