import React from 'react'
import CategoryButton from './CategoryButton'

function CategorySelection({filterData}) {
  return (
    <div class="flex justify-between text-base font-medium items-center w-1/4 ">
        <CategoryButton name={"All"} filterData={filterData} color={"bg-orange-500"}/>
        <CategoryButton name={"Home"} filterData={filterData} color={"bg-blue-500"}/>
        <CategoryButton name={"Work"} filterData={filterData} color={"bg-purple-500"}/>
        <CategoryButton name={"Personal"} filterData={filterData} color={"bg-green-500"}/>
    </div>
  )
}

export default CategorySelection