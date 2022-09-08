import {React, useState} from 'react'

function CategoryButton({name, filterData, color}) {



    const setActive = (e) => {
        let actives = document.querySelectorAll(".active")
        actives.forEach(item => {
            item.className = ""
            
        })
        e.target.classList.add("active")
        e.target.classList.add(color)
        
    }

  return (
    <div>
    <button onClick={(e) => {
        filterData(name)
        setActive(e)
    }}>
    {name}
    <div className={`absolute ${color} mx-auto rounded-full w-2 h-2 `}></div>
    </button>
    </div>
  )
}

export default CategoryButton