import React, { Component } from 'react';
import { Form, FormController, FormLabel, Button } from 'react-bootstrap';

class Convert extends Component {
    constructor() {
        super();

        this.state = { letters: '' };
    }
    render() {
        return (
            <div>
                <Form>
                    <FormLabel>Roman Numerals</FormLabel>
                    <FormController
                        className='input-letters'
                        onChange={event => this.setState({ letters: event.target.value })} />
                </Form>
            </div>
        )
    }
};

export default Convert;