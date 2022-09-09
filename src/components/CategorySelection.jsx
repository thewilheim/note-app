import React from "react";
import CategoryButton from "./CategoryButton";

function CategorySelection({ filterDataByType }) {
  return (
    <div class="flex justify-between text-base font-medium items-center w-1/4 ">
      <CategoryButton
        name={"All"}
        filterDataByType={filterDataByType}
        color={"bg-orange-500"}
      />
      <CategoryButton
        name={"Home"}
        filterDataByType={filterDataByType}
        color={"bg-blue-500"}
      />
      <CategoryButton
        name={"Work"}
        filterDataByType={filterDataByType}
        color={"bg-purple-500"}
      />
      <CategoryButton
        name={"Personal"}
        filterDataByType={filterDataByType}
        color={"bg-green-500"}
      />
    </div>
  );
}

export default CategorySelection;
