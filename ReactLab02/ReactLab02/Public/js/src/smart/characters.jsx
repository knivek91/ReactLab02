import React from 'react';
import axios from 'axios';

import Header from '../stalees/table-header';
import { RowCharacter as Row } from '../stalees/table-row';

import { Routes } from '../routes';

class Home extends React.Component {

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
        const { history } = this.props
        if (index < 0) {
            alert('The Id is wrong');
            return;
        }

        const url = this.state.characters[index].url;
        const arr = url.split('/');
        const id = arr[arr.length - 2];
        history.push(`${Routes.CharacterDetail}${id}`);
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

export default Home;
