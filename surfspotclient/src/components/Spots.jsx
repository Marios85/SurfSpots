import React from 'react';
import { withRouter } from "react-router-dom"; // if change to function then can opt for useParams instead
import { Link } from 'react-router-dom'

import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'


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
            spots = this.props.spots.filter(x => x.region == region)
        }
        else {
            spots = this.props.spots
            region = "Worldwide"
        }

        function NewSpotModal(props) {
            return (
                <Modal
                    {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            New Spot
                  </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* <h4>Centered Modal</h4> */}
                        <Form>
                            <Form.Row>
                                <Form.Group controlId="spotName" md="4" as={Col}>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="name" placeholder="Spot Name" />
                                </Form.Group>                                             
                                <Form.Group controlId="location" md="4" as={Col}>
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control type="country" placeholder="Country" />
                                </Form.Group>
                                <Form.Group controlId="region" md="4" as={Col}>
                                    <Form.Label>Region</Form.Label>
                                    <Form.Control type="region" placeholder="Region e.g. Lisbon, Cornwall" />
                                </Form.Group>
                                </Form.Row>  
                                <h5>Wave Type</h5>
                            <Form.Row>                        
                            <Form.Group controlId="waveDirection" md="4" as={Col}>                                                    
                                <Form.Check inline type="checkbox" label="Left" />
                                <Form.Check inline type="checkbox" label="Right" />
                            </Form.Group>
                            <Form.Group controlId="waveType" md="8" as={Col}> 
                                <Form.Check inline type="radio" label="Beach"name="waveTypeRadios" id="waveTypeRadios1"/>
                                <Form.Check inline type="radio"label="Reef" name="waveTypeRadios"id="waveTypeRadios2"/>
                                <Form.Check inline type="radio"label="Point"name="waveTypeRadios"id="waveTypeRadios3"/>
                                </Form.Group>
                            </Form.Row>                            
                            <h5>Required Conditions</h5>
                            <Form.Row>
                            <Form.Label md="1" as={Col}>Tide:</Form.Label>
                            <Form.Group controlId="tides" md="8" as={Col}>                          
                                <Form.Check inline type="checkbox" label="Low" />
                                <Form.Check inline type="checkbox" label="Mid" />
                                <Form.Check inline type="checkbox" label="High" />
                            </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group controlId="minSwell"  md="2" as={Col}>
                                    <Form.Label>Min Swell</Form.Label>
                                    <Form.Control type="minSwell" placeholder="Enter Min Swell in Metres" />
                                </Form.Group>
                                <Form.Group controlId="maxSwell" md="2" as={Col}>
                                    <Form.Label>Max Swell</Form.Label>
                                    <Form.Control type="maxSwell" placeholder="Enter Max Swell in metres" />
                                </Form.Group>
                                <Form.Group controlId="swellDirection" md="4" as={Col}>
                                    <Form.Label>Swell Direction</Form.Label>
                                    <Form.Control type="swellDirection" placeholder="Enter (clockwise) Swell Direction e.g. 180-360" />
                                </Form.Group>
                            </Form.Row>
                            <h5>Optimum Conditions</h5>
                            <Form.Row>
                            <Form.Group controlId="bestTide" md="4" as={Col}>
                                    <Form.Label>Tide</Form.Label>
                                    <Form.Check type="radio" label="Low"name="waveTypeRadios" id="tideRadios1"/>
                                    <Form.Check type="radio"label="Mid" name="waveTypeRadios"id="tideRadios2"/>
                                    <Form.Check type="radio"label="High" name="waveTypeRadios"id="tideRadios3"/>
                                </Form.Group>
                                <Form.Group controlId="optimumConditions" md="4" as={Col}>
                                    <Form.Label>Swell Direction</Form.Label>
                                    <Form.Control type="bestSwellDirection" placeholder="Enter (clockwise) Swell Direction e.g. 180-360" />
                                </Form.Group>

                            </Form.Row>
                            <Form.Group controlId="notes">
                                    <Form.Label>Notes</Form.Label>
                                    <Form.Control as="textarea" rows="3" type="notes" placeholder="Enter any Notes" />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={props.onHide}>Cancel</Button>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Modal.Footer>
                </Modal>
            );
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
                <NewSpotModal show={(this.state.isShown)} onHide={() => this.setState({ isShown: false })}
                />
            </div>);
    }
}

export default withRouter((Spots));