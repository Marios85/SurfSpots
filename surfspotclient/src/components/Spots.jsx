import React from 'react';
import { withRouter } from "react-router-dom"; // if change to function then can opt for useParams instead
import { Link } from 'react-router-dom'
import NewSpotModal from './NewSpot'

import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'



class Spots extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isShown: false
        }
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
                <Accordion>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Search Spots
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <div>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Swell Size</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl type="number" step=".1" placeholder="Metres" aria-label="Swell Size" aria-describedby="basic-addon1"/>
                            </InputGroup>
                            </div></Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
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
                <Button onClick={() => this.setState({ isShown: true })}>Add Spot</Button>
                <NewSpotModal show={(this.state.isShown)} onHide={() => this.setState({ isShown: false })} data={this.props} />
            </div>);
    }
}

export default withRouter((Spots));