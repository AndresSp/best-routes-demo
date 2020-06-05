import { Form, Button } from 'semantic-ui-react'
import React from 'react';
import AutocompleteInput from './AutocompleteInput';
import { inject, observer } from 'mobx-react';

    const FormContainer = ({ addressStore }) => {
        const styleFormContainer = {
            float: 'left',
            width: '40%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }
    
        const styleForm = {
            marginTop: '50px',
            width: '90%'
        }

        return (
        <div style={styleFormContainer}>
            <Form style={styleForm} inverted>
                <Form.Field>
                    <label>Search Address</label>
                    <AutocompleteInput/>
                </Form.Field>
            </Form>
            <Form style={styleForm} inverted>
                {addressStore.addresses.map((address, index) => (
                    <Form.Field key={address.id}>
                        <Button 
                        onClick={() => addressStore.remove(index)}
                        labelPosition='right' 
                        icon='times'
                        fluid
                        content={address.formatted_address} 
                        inverted/>
                    </Form.Field>
                    
                ))}
            </Form>
        </div>
        )
    }


export default inject(({ addressStore }) => ({ addressStore }))(observer(FormContainer))