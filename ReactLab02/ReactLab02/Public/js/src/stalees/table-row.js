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


export const RowPlanetDetail = ({ planet }) => (
    <tbody>
        <tr>
            <td>Name:</td>
            <td>{planet.name}</td>
        </tr>
        <tr>
            <td>Rotation Period:</td>
            <td>{planet.rotation_period}</td>
        </tr>
        <tr>
            <td>Orbital Period:</td>
            <td>{planet.orbital_period}</td>
        </tr>
        <tr>
            <td>Diameter:</td>
            <td>{planet.diameter}</td>
        </tr>
        <tr>
            <td>Climate:</td>
            <td>{planet.climate}</td>
        </tr>
        <tr>
            <td>Gravity:</td>
            <td>{planet.gravity}</td>
        </tr>
        <tr>
            <td>Terrain:</td>
            <td>{planet.terrain}</td>
        </tr>
        <tr>
            <td>Surface Water:</td>
            <td>{planet.surface_water}</td>
        </tr>
        <tr>
            <td>Population:</td>
            <td>{planet.population}</td>
        </tr>
    </tbody>
);