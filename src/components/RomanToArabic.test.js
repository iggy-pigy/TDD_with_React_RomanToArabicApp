import React from 'react';
import { shallow } from 'enzyme';
import RomanToArabic from './RomanToArabic';

describe('RomanToArabic', () => {
    const convert = shallow(<Convert />);

    it('renders properly', () => {
        expect(convert).toMachSnapshot();
    });
});