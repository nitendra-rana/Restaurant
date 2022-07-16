import React, { useState } from 'react'
import MenuCard from './MenuCard'
import Menu from "./menuApi.js"
import Nav from "./Nav"
import './style.css'

const uniqueList = [...new Set(
  Menu.map( (curElem) => {
      return curElem.category;
  })
),
"All"
];



const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList)
  console.log();

  const filterItem = (category) => {

      if (category === "All"){
        setMenuData(Menu);
        return;
      }
      const updatedList = Menu.filter( (curElem) =>{
        return curElem.category === category
      });
      setMenuData(updatedList);
  };

  return (
    <>
      <Nav filterItem = {filterItem} menuList = {menuList}/>
      <MenuCard menuData={menuData} />
    </>
  )
}

export default Resturant