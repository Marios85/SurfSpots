import React from 'react';
import { withRouter } from "react-router-dom"; // if change to function then can opt for useParams instead
import { Link } from 'react-router-dom'
import NewSpotModal from './NewSpot'

import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'



class Spots extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isShown: false
        }
        
        //this.handleSubmit = this.handleSubmit.bind(this);
    }



    render() {
        var spots
        let region = this.props.match.params.region
        if (region != null) {
            spots = this.props.spots.filter(x => x.region === region)
        }
        else {
            spots = this.props.spots
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
                                <tr key={spot.id}>
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
                <Button onClick={() => this.setState({ isShown: true })}>Add Spot</Button>
                <NewSpotModal show={(this.state.isShown)} onHide={() => this.setState({ isShown: false })} data={this.props} />
            </div>);
    }
}

export default withRouter((Spots));