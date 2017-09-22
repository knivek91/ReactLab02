import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Header from '../stalees/table-header';
import { RowCharacter as Row } from '../stalees/table-row';

import { Routes } from '../routes';

class Character extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            characters: [],
            headers: ['Name', '']
        };
    }

    componentWillMount() {

        axios.get('https://swapi.co/api/people/')
            .then(({ data }) => {
                const characters = data.results;
                this.setState({ characters });
            })
            .catch((err) => { console.log(err); alert('there was an error retreiving the data.'); });

    }

    onClick(index) {
        const { router } = this.context
        if (index < 0) {
            alert('The Id is wrong');
            return;
        }

        const url = this.state.characters[index].url;
        const arr = url.split('/');
        const id = arr[arr.length - 2];
        router.push(`${Routes.CharacterDetail}${id}/`);
    }

    render() {

        const { headers, characters } = this.state

        const ths = headers.map((item, index) => <Header key={index} text={item} />)
        const trs = characters.map((item, index) => <Row key={index} index={index} name={item.name} onClick={this.onClick.bind(this)} />)

        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        {ths}
                    </tr>
                </thead>
                <tbody>
                    {trs}
                </tbody>
            </table>
        )
    }

}

Character.contextTypes = {
    router: PropTypes.object.isRequired
};

export default Character;
