import React from 'react';

export const RowCharacter = ({ name, index, onClick }) => (
    <tr>
        <td>{name}</td>
        <td>
            <button type="button" className="btn default" onClick={() => { onClick(index) }}>Detail</button>
        </td>
    </tr>
);

export const RowCharacterDetail = ({ character }) => (
    <tbody>
        <tr>
            <td>Name:</td>
            <td>{character.name}</td>
        </tr>
        <tr>
            <td>Height:</td>
            <td>{character.height}</td>
        </tr>
        <tr>
            <td>Hair Color:</td>
            <td>{character.hair_color}</td>
        </tr>
        <tr>
            <td>Skin Color:</td>
            <td>{character.skin_color}</td>
        </tr>
        <tr>
            <td>Eye Color:</td>
            <td>{character.eye_color}</td>
        </tr>
        <tr>
            <td>Birth Year:</td>
            <td>{character.birth_year}</td>
        </tr>
        <tr>
            <td>Gender:</td>
            <td>{character.gender}</td>
        </tr>
    </tbody>
);