/* eslint-disable eqeqeq */
import React , {useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { fetchspot } from '../reducers/spots'

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'

export default function Spot(props) {

function backHandler()
{
    history.goBack()
}

        let params = useParams();
        let dispatch = useDispatch()
        let history = useHistory()
        useEffect(() => 
        {
            dispatch(fetchspot(params.id))
        });
        const spot =  useSelector(state => state.spot)
        return (
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
                        {spot != null &&
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
                        }
                    </tbody>
                </Table>
                <Button onClick={backHandler}>Back</Button>
            </div>
        );
    
}