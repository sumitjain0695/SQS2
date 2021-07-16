import { Card } from "antd";
import React, { useEffect } from "react";
import CategoryCard from "../CategoryCard/category-card";
import "antd/dist/antd.css";
import AddCategory from "./add-category";
import { useSelector } from "react-redux";
import { getCategoryState } from "../../Store/Slices/category-slice";

const gridStyle = {
  width: "25%",
  textAlign: "center",
  backGround: "grey",
};
const BaseLayout = () => {
  const category_data = useSelector(getCategoryState);
  useEffect(() => {
    console.log(category_data);
  }, [category_data]);
  const allowDrop = (e) => {
    e.preventDefault();
  };
  return (
    <Card>
      {category_data &&
        Object.keys(category_data).map((item, index) => (
          <CategoryCard
            key={`${index}_$$${new Date().getTime()}`}
            gridStyle={gridStyle}
            category={item}
            // list={category_data[item]}
            ondragover={allowDrop}
          />
        ))}

      <AddCategory gridStyle={gridStyle} />
    </Card>
  );
};

export default BaseLayout;
