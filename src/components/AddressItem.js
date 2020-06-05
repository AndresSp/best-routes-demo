
import React from 'react';
import { inject, observer } from 'mobx-react';
import { Draggable } from 'react-beautiful-dnd';
import { Button, List, Ref } from 'semantic-ui-react';

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    borderRadius: '4px',
    padding: '4px',
    // change background colour if dragging
    background: isDragging ? "darkblue" : "transparent",
  
    // styles we need to apply on draggables
    ...draggableStyle
  });

function AddressItem({addressStore}) {
  return (
    addressStore.addresses.map((add, index, arr) => (
        <Draggable key={add.id} draggableId={String(add.id)} index={index}>
            {(provided, snapshot) => (
                <Ref innerRef={provided.innerRef}>
                    <List.Item 
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}

                    style={getItemStyle(
                    snapshot.isDragging,
                    provided.draggableProps.style
                    )}>
                        <List.Content floated='right'>
                            <Button 
                            onClick={() => addressStore.remove(index)}
                            icon='times'
                            inverted></Button>
                        </List.Content>
                        <List.Content verticalAlign='middle'>
                            <List.Header>
                                {index === 0 ? '(Origin)' : ''}
                                {index === (arr.length - 1) ? '(Destination)' : ''}
                            </List.Header>
                            <List.Description>
                                {add.formatted_address}
                            </List.Description>
                        </List.Content>
                    </List.Item>
                </Ref>
            )}
        </Draggable>
    ))
  );
}

export default inject(({ addressStore }) => ({ addressStore }))(observer(AddressItem))