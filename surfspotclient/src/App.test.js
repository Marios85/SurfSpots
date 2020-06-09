import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter as Router, Route } from 'react-router-dom';


import Spots from './components/Spots'
import data from './spots.json'


configure({adapter: new Adapter()});

test('Lists Spots in Table', () => {
  const wrapper = mount(<Router> <Spots spots={data.spots} match={{params: {}, isExact: true, path: "", url: ""}}/></Router>);
  const rows = wrapper.find('#spot-table-row')
  //console.log(wrapper.debug());

  expect(rows.length).toEqual(data.spots.length)
})

test('Filters Spots by Region', () => {
  const wrapper = mount(<Router initialEntries={['/Spots/Lisbon']}> <Route exact path="/Spots/:region" >
     <Spots spots={data.spots} match={{params: {region: 'Lisbon'}, isExact: true, path: "", url: ""}}/> </Route></Router>);
  const rows = wrapper.find('#spot-table-row')

  expect(rows.length).toEqual(3)
})