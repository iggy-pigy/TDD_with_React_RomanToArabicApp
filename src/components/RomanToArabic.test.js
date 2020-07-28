import React from 'react';
import { shallow } from 'enzyme';
import Convert from './RomanToArabic';

describe('RomanToArabic', () => {
    const convert = shallow(<Convert />);

    it('renders properly', () => {
        expect(convert).toMachSnapshot();
    });
});