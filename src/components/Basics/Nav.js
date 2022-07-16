import React from 'react'
import './style.css'

const Nav = ({filterItem, menuList}) => {
    console.log(menuList);
    return (
        <>
            <nav className="navbar">

                <div className="btn-group">
                    {
                        menuList.map((curElem) => {
                            return (
                                <>
                                    <button className="btn-group__item"
                                        onClick= {() => filterItem(curElem)}>
                                        {curElem}
                                    </button>
                                </>
                            );

                        })}
                </div>

            </nav>
        </>
    );
}

export default Nav