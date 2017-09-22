import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';

import Header from '../stalees/table-header';
import { RowCharacterDetail as Tbody } from '../stalees/table-row';

import { Routes } from '../routes';

class CharacterDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            character: {},
            headers: ['Property', 'Value']
        };
    }

    componentWillMount() {
        const { id } = this.props.params;
        axios.get(`https://swapi.co/api/people/${id}`)
            .then(({ data }) => {
                const character = data;
                this.setState({ character });
            })
            .catch((err) => { console.log(err); alert('there was an error retreiving the data.'); });
    }

    render() {

        const { headers, character } = this.state

        const ths = headers.map((item, index) => <Header key={index} text={item} />)

        return (
            <div>
                <Link to={Routes.Home} className="btn btn-warning">Go Home</Link>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            {ths}
                        </tr>
                    </thead>
                    <Tbody character={character} />
                </table>
            </div>
        )
    }

}

export default CharacterDetail;
