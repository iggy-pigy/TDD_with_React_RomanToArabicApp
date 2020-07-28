import React from 'react';
import { shallow } from 'enzyme';
import Convert from './Convert';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('Convert', () => {
    const convert = shallow(<Convert />);

    it('renders properly', () => {
        expect(convert).toMatchSnapshot();
    });

    it('initializes a string of letters in `state`', () => {
        expect(convert.state()).toEqual({ letters: '' });
    });
});