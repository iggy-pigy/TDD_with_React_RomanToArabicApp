import React from 'react';
import { shallow } from 'enzyme';
import Convert from './Convert';

describe('Convert', () => {
    const convert = shallow(<Convert />);

    it('renders properly', () => {
        expect(convert).toMachSnapshot();
    });
});