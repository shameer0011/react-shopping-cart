import React from "react";
import Main from "../components/main/main";
import data from "../data.json";
const MainPage = () => {
  return (
    <div>
      <Main
        title="Product Main page"
        sidebar="Cart Items"
        data={data}
        cartLabel="Add to card"
      />
    </div>
  );
};
export default MainPage;
