import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App', () => {
    const app = shallow(<App />);

    it('renders properly', () => {
        expect(app).toMatchSnapshot();
    });

    it('initializes the `state` with an empty list of letters', () => {
        expect(app.state().letters).toEqual([]);
    });

    describe('Convert', () => {
        it('creates a Convert component', () => {
            expect(app.find('Convert').exists()).toBe(true);
        });
    });
});