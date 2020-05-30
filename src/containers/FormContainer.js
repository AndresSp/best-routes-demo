import Autocomplete from 'react-google-autocomplete';
import { Button, Checkbox, Form } from 'semantic-ui-react'

import React from 'react';
import AutocompleteInput from '../components/AutocompleteInput';

export default class FormContainer extends React.Component {
    ACRef = null

    styleFormContainer = {
        float: 'left',
        width: '40%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    styleForm = {
        width: '90%',
        height: '100%'
    }

    constructor(props){
        super(props)
        this.ACRef = React.createRef()
    }
    render() {
        return (
                <div style={this.styleFormContainer}>
                    <Form style={this.styleForm} inverted>
                        <Form.Field>
                            <label>Search Address</label>
                            <AutocompleteInput/>
                            {/* <input placeholder='Address...' /> */}
                        </Form.Field>
                        <Form.Field style={{marginTop: '50px'}}>
                            <input placeholder='Address 1' disabled value='Address 1' />
                        </Form.Field>
                        <Form.Field>
                            <input placeholder='Address 2' disabled value='Address 2' />
                        </Form.Field>
                            {/* <Button type='submit'>Submit</Button> */}
                    </Form>
                    {/* <Form style={{ width: '450px' }}>
                        <Form.Field>
                            <label>First Name</label>
                            <Autocomplete 
                            ref={this.ACRef} 
                            style={{
                                width: '90%',
                                flex: '1 0 auto',
                            }}
                            onPlaceSelected={(place) => {
                            console.log(place);
                            }}
                            types={['(cities)']}
                            componentRestrictions={{country: "us"}}
                            />  
                        </Form.Field>
                    </Form>             */}
                </div>

        );
      }
}