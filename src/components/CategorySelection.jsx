import React from "react";
import CategoryButton from "./CategoryButton";

function CategorySelection({ setActiveType }) {
  return (
    <div class="flex justify-between text-base font-medium items-center w-1/4 ">
      <CategoryButton
        name={"All"}
        setActiveType={setActiveType}
        color={"bg-orange-500"}
      />
      <CategoryButton
        name={"Home"}
        setActiveType={setActiveType}
        color={"bg-blue-500"}
      />
      <CategoryButton
        name={"Work"}
        setActiveType={setActiveType}
        color={"bg-purple-500"}
      />
      <CategoryButton
        name={"Personal"}
        setActiveType={setActiveType}
        color={"bg-green-500"}
      />
    </div>
  );
}

export default CategorySelection;
