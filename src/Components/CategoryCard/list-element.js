import React from 'react';

const listStyle={
    margin:'10px',
    border:'1px solid black',
    padding:'5px',
    cursor:'move',
    userSelect: 'none'

}
const ListElement = (props) => {
    return (
        <div style={listStyle} {...props}>
            {props.name}
        </div>
    );
};

export default ListElement;