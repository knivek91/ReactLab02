import React from 'react';

export const RowCharacter = ({ name, index, onClick }) => (
    <tr>
        <td>{name}</td>
        <td>
            <button type="button" className="btn default" onClick={() => { onClick(index) }}>Detail</button>
        </td>
    </tr>
);