import React from 'react';
import Table from 'react-bootstrap/Table'
import data from '../spots.json'

class Spots extends React.Component{
render()
{
    return(
    <Table striped bordered hover>
        <thead>
            <tr>
            <th>name</th>
            <th>country</th>
            <th>region</th>
            <th>tides</th>
            <th>bestTide</th>
            <th>minSwell</th>
            <th>maxSwell</th>
            <th>swellDirection</th>
            <th>bestSwellDirection</th>
            <th>notes</th>
            </tr>
        </thead>
        <tbody>
            {data.spots.map(function(spot){
                return(
                    <tr>
                    <td>{spot.name}</td>
                    <td>{spot.country}</td>
                    <td>{spot.region}</td>
                    <td>{spot.tides}</td>
                    <td>{spot.bestTide}</td>
                    <td>{spot.minSwell}</td>
                    <td>{spot.maxSwell}</td>
                    <td>{spot.swellDirection}</td>
                    <td>{spot.bestSwellDirection}</td>
                    <td>{spot.notes}</td>
                    </tr>
                )
            })}
        </tbody>
    </Table>
        );}
}

export {Spots}