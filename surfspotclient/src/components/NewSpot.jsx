import React, {useState} from 'react';
import axios from 'axios'
import {Constants} from '../constants'
import {addspot} from '../reducers/spots'

import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


export default function NewSpotModal(props) {          
    const initialFormData = Object.freeze({name: "", country: "", region:"", left:false, right:false, beach:false, reef:false, point:false,
    lowTide: false, midTide: false, highTide: false, minSwell: 0, maxSwell: 0, swellDirection:"", bestLowTide: false, bestMidTide: false,
    bestHighTide: false, bestSwellDirection: "", notes: ""});

    const [formData, updateFormData] = useState(initialFormData);
    
    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.type === 'number' ? parseFloat(e.target.value) : e.target.value.trim()
        });
        };

    const handleCheckChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.checked
        });
        };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData)
        axios.post(Constants.webApiUrl+'spots', formData, {	headers: {'Access-Control-Allow-Origin': '*',
            }}).then((response) => {
            console.log(response.data)
            if(!response.data){
                return console.error('Failed to save')
                }
                console.log('Saved!')
                props.data.dispatch(addspot(response.data))
                updateFormData(formData,{});
                props.onHide()
            })
        }

        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">New Spot</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                <Modal.Body>
                        <Form.Row>
                            <Form.Group controlId="spotName" md="4" as={Col}>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Spot Name" name="name" onChange={handleChange} required/>
                            </Form.Group>                                             
                            <Form.Group controlId="country" md="4" as={Col}>
                                <Form.Label>Country</Form.Label>
                                <Form.Control type="text" placeholder="Country" name="country" onChange={handleChange} required/>
                            </Form.Group>
                            <Form.Group controlId="region" md="4" as={Col}>
                                <Form.Label>Region</Form.Label>
                                <Form.Control type="text" placeholder="Region e.g. Lisbon, Cornwall" name="region" onChange={handleChange} required/>
                            </Form.Group>
                            </Form.Row>  
                            <h5>Wave Type</h5>
                        <Form.Row>                        
                        <Form.Group controlId="waveDirection" md="4" as={Col}>                                                    
                            <Form.Check inline type="checkbox" label="Left" name="left" onChange={handleCheckChange}/>
                            <Form.Check inline type="checkbox" label="Right" name="right" onChange={handleCheckChange}/>
                        </Form.Group>
                        <Form.Group controlId="waveType" md="8" as={Col}> 
                            <Form.Check inline type="radio" label="Beach"name="breaktype" value="beach" id="waveTypeRadios1" onChange={handleChange}/>
                            <Form.Check inline type="radio"label="Reef" name="breaktype" value="reef" id="waveTypeRadios2" onChange={handleChange}/>
                            <Form.Check inline type="radio"label="Point"name="breaktype" value="point" id="waveTypeRadios3" onChange={handleChange}/>
                            </Form.Group>
                        </Form.Row>                            
                        <h5>Required Conditions</h5>
                        <Form.Row>
                        <Form.Label md="1" as={Col}>Tide:</Form.Label>
                        <Form.Group controlId="tides" md="8" as={Col}>                          
                            <Form.Check inline type="checkbox" label="Low" name="lowTide" onChange={handleCheckChange}/>
                            <Form.Check inline type="checkbox" label="Mid" name="midTide" onChange={handleCheckChange}/>
                            <Form.Check inline type="checkbox" label="High" name="highTide" onChange={handleCheckChange}/>
                        </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group controlId="minSwell"  md="2" as={Col}>
                                <Form.Label>Min Swell</Form.Label>
                                <Form.Control type="number" step=".1" min="0" placeholder="Metres" name="minSwell" onChange={handleChange}/>
                            </Form.Group>
                            <Form.Group controlId="maxSwell" md="2" as={Col}>
                                <Form.Label>Max Swell</Form.Label>
                                <Form.Control type="number" step=".1" min="0" placeholder="Metres" name="maxSwell" onChange={handleChange}/>
                            </Form.Group>
                            <Form.Group controlId="swellDirection" md="4" as={Col}>
                                <Form.Label>Swell Direction</Form.Label>
                                <Form.Control type="text" step=".01"  placeholder="Clockwise e.g. 180-360" name="swellDirection" onChange={handleChange}/>
                            </Form.Group>
                        </Form.Row>
                        <h5>Optimum Conditions</h5>
                        <Form.Row>
                        <Form.Group controlId="bestTide" md="4" as={Col}>
                                <Form.Label>Tide</Form.Label>
                                <Form.Check type="radio" label="Low" name="bestLowTide" id="tideRadios1" onChange={handleCheckChange}/>
                                <Form.Check type="radio"label="Mid" name="bestMidTide"id="tideRadios2" onChange={handleCheckChange}/>
                                <Form.Check type="radio"label="High" name="bestHighTide"id="tideRadios3" onChange={handleCheckChange}/>
                            </Form.Group>
                            <Form.Group controlId="optimumConditions" md="4" as={Col}>
                                <Form.Label>Swell Direction</Form.Label>
                                <Form.Control type="bestSwellDirection" name="bestSwellDirection" placeholder="Clockwise e.g. 180-360" onChange={handleChange}/>
                            </Form.Group>    
                        </Form.Row>
                        <Form.Group controlId="notes">
                                <Form.Label>Notes</Form.Label>
                                <Form.Control as="textarea" rows="3" type="textarea" name="notes" placeholder="Enter any Notes" onChange={handleChange}/>
                        </Form.Group>                         
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => props.onHide}>Cancel</Button>
                    <Button variant="primary" type="submit">Submit</Button>
                </Modal.Footer>
                </Form>
            </Modal>
        );
    }