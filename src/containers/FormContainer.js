import { List, Form, Ref } from 'semantic-ui-react'
import React from 'react';
import AutocompleteInput from './AutocompleteInput';
import { inject, observer } from 'mobx-react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import AddressItem from '../components/AddressItem';

    // const getItems = count =>
    // Array.from({ length: count }, (v, k) => k).map(k => ({
    //     id: `item-${k}`,
    //     content: `item ${k}`
    // }));

    //({ addressStore })
        const styleFormContainer = {
            float: 'left',
            width: '40%',
            height: '100vh',
            overflow: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }
    
        const styleForm = {
            marginTop: '50px',
            width: '90%',
        }
        const droppableStyleForm = (isDraggingOver) =>  ({
            marginTop: '50px',
            width: '90%',
            //background: isDraggingOver ? "lightblue" : "transparent",
            padding: '8px 0',
            height: '700px',
            overflow: 'auto',
            marginBottom: '20px'
        })

class FormContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            addresses: this.props.addressStore.addresses
        };
        //this.onDragEnd = this.onDragEnd.bind(this);
    }
    
    onDragEnd = (result) => {
        const { addressStore } = this.props
        // dropped outside the list
        if (!result.destination) {
          return;
        }
    
        addressStore.reorder(
            addressStore.addresses,
            result.source.index,
            result.destination.index)
      }

    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
            <div style={styleFormContainer}>
                <Form style={styleForm} inverted>
                    <Form.Field>
                        <label>Search Address</label>
                        <AutocompleteInput/>
                    </Form.Field>
                </Form>
                    <Droppable droppableId="droppable">
                        {(provided, snapshot) => (
                            <Ref innerRef={provided.innerRef}>
                                <List divided verticalAlign='middle'
                                {...provided.droppableProps}
                                style={droppableStyleForm(snapshot.isDraggingOver)} inverted>
                                    <AddressItem provided={provided} snapshot={snapshot} />
                                    {provided.placeholder}
                                </List>
                            </Ref>
                        )}
                    </Droppable>
            </div>
        </DragDropContext>
        )
    }
}


export default inject(({ addressStore }) => ({ addressStore }))(observer(FormContainer))