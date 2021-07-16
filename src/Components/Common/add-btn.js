import { Button, Input } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCard, setCategory } from "../../Store/Slices/category-slice";
import { TYPES } from "./types";
const AddBtn = (props) => {
  const [addingCard, setAddingCard] = useState(false);
  const dispatch = useDispatch();

  const addCard = (e) => {
    console.log(e.target.value);
    setAddingCard(false);
    if (props.type === TYPES.CARD) {
      console.log("card type");
      dispatch(setCard(e.target.value, props.category));
    }
    if (props.type === TYPES.CATEGORY) {
      console.log("category type");
      dispatch(setCategory(e.target.value));
    }
  };
  return (
    <div>
      {!addingCard ? (
        <Button
          onClick={() => {
            setAddingCard(true);
          }}
          width={"100%"}
        >
          {props.content}
        </Button>
      ) : (
        <Input onPressEnter={addCard} />
      )}
    </div>
  );
};

export default AddBtn;
