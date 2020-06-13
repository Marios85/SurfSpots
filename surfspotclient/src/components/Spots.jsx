import React, {useState} from 'react';
import { Link, useParams } from 'react-router-dom'
import NewSpotModal from './NewSpot'

import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

export default function Spots (props) {
        const [isShown, setIsShown] = useState(false)
        const params = useParams()

        var spots
        let region = params.region
        if (region != null) {
            spots = props.spots.filter(x => x.region === region)
        }
        else {
            spots = props.spots
            region = "Worldwide"
        }

        return (
            <div>
                <h1 className="text-left mt-3 mb-3">{region}</h1>
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
                        {spots != null && spots.map(function (spot) {
                            return (
                                <tr key={spot.id} id="spot-table-row">
                                    <td><Link to={`/Spots/Spot/${spot.id}`}>{spot.name}</Link></td>
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
                <Button onClick={() => setIsShown(true)}>Add Spot</Button>
                <NewSpotModal show={isShown} onHide={() => setIsShown(false)} data={props} />
            </div>);
}