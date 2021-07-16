import { Card } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getCategoryState } from "../../Store/Slices/category-slice";
import AddBtn from "../Common/add-btn";
import { TYPES } from "../Common/types";
import ListElement from "./list-element";

const initialDnDState = {
  draggedFrom: null,
  draggedTo: null,
  isDragging: false,
  originalOrder: [],
  updatedOrder: [],
};

const CategoryCard = (props) => {
  const cardlist = useSelector(getCategoryState)[props.category];
  const [dragAndDrop, setDragAndDrop] = useState(initialDnDState);
  const [list, setList] = useState(cardlist);
  useEffect(() => {
    console.log("useeff");
    setList(cardlist);
  }, [cardlist]);
  const onDragStart = (event) => {
    console.log('onDragStart')
    const initialPosition = Number(event.currentTarget.dataset.position);

    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: initialPosition,
      isDragging: true,
      originalOrder: list,
    });
  };

  const onDragOver = (event) => {
      console.log('onDragOver')
    event.preventDefault();

    let newList = dragAndDrop.originalOrder;
    const draggedFrom = dragAndDrop.draggedFrom;
    const draggedTo = Number(event.currentTarget.dataset.position);

    const itemDragged = newList[draggedFrom];
    const remainingItems = newList.filter(
      (item, index) => index !== draggedFrom
    );

    newList = [
      ...remainingItems.slice(0, draggedTo),
      itemDragged,
      ...remainingItems.slice(draggedTo),
    ];

    if (draggedTo !== dragAndDrop.draggedTo) {
      setDragAndDrop({
        ...dragAndDrop,
        updatedOrder: newList,
        draggedTo: draggedTo,
      });
    }
  };

  useEffect( ()=>{
    console.log("From: ", dragAndDrop && dragAndDrop.draggedFrom);
    console.log("Into: ", dragAndDrop && dragAndDrop.draggedTo);
   }, [dragAndDrop])
   
   useEffect( ()=>{
    console.log("List updated!");
   }, [list])

  const onDrop = (event) => {
    console.log('onDrop')
    setList(dragAndDrop.updatedOrder);
    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: null,
      draggedTo: null,
      isDragging: false,
    });
  };

  const onDragLeave = () => {
    console.log('onDragLeave')
    setDragAndDrop({
      ...dragAndDrop,
      draggedTo: null,
    });
  };

  return (
    <Card.Grid style={props.gridStyle} hoverable={false}>
      <p>{props.category}</p>
      {list &&
        list.map((item, index) => (
          <ListElement
            
            key={index}
            name={item.name}
            data-position={index}
            draggable
            onDragStart={onDragStart}
            onDragOver={onDragOver}
            onDrop={onDrop}
            onDragLeave={onDragLeave}
          />
        ))}
      <AddBtn
        type={TYPES.CARD}
        category={props.category}
        content={"+ Add a Card"}
      />
    </Card.Grid>
  );
};

export default CategoryCard;
