import React from 'react';
import Table from 'react-bootstrap/Table'

import Layout from './Layout';
import {Link} from 'react-router-dom'


class Spots extends React.Component{
render()
{
    console.log(this.props)
    return(
        <Layout>

        <h1 className="text-left mt-3 mb-3">Surf Spots</h1>
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
            {this.props.spots.map(function(spot){
                return(
                    <tr key={spot.id}>
                    <td  ><Link to={`/Spots/${spot.id}`}>{spot.name}</Link></td>
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
    </Layout>
        );}
}

export {Spots}