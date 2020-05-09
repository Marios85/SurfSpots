/* eslint-disable eqeqeq */
import React from 'react';
import Table from 'react-bootstrap/Table';

class Spot extends React.Component
{
    render (){
        console.log(this.props)
        let spot = this.props.spots.find(element=>element.id == this.props.match.params.id)
        return(
            <div>
                <h1>Spot Details</h1>
                <Table>
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
        </tbody>
                </Table>    
                </div>      
        );}
}

export {Spot};