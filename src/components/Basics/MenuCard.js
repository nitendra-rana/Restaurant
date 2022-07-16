import React from 'react'

const MenuCard = ({ menuData }) => {

    return (

        <>
            <section className="main-card--cointainer">
                {menuData.map((currItem) => {

                    const {id, name, category, image, description}= currItem;
                    return (
                        <>
                            <div className="card-container" key={currItem.id}>
                                <div className="card">
                                    <div className="card-body">
                                        <span className="card-number card-circle subtle">{id}</span>
                                        <span className="card-author subtle">{category}</span>
                                        <h1 className="card-title">{name}</h1>
                                        <span className="card-description subtle">{description}</span>
                                        <div className="card-read">read</div>
                                    </div>
                                    <img src={image} alt="Elit" className="card-media" />
                                    <span className="card-tag subtle">Order Now</span>
                                </div>
                            </div>
                        </>
                    )


                })}
            </section>
        </>
    )
}

export default MenuCard