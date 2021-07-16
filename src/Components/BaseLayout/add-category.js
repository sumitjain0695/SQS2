import React from 'react';
import { Card } from 'antd';
import AddBtn from '../Common/add-btn';
import { TYPES } from '../Common/types';
const AddCategory = (props) => {
    return (
        <Card.Grid style={props.gridStyle} hoverable={false}>
            <AddBtn type={TYPES.CATEGORY} content={"+ Add a Category"}/>
        </Card.Grid>
    );
};

export default AddCategory;