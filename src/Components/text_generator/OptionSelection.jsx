import React from "react";

function OptionSelection({arrayItems, selectOption}) {
    return (<>
        <div className="grid-main">
            {arrayItems.map((item) => {
                return <div key={item.id} className="grid-child" onClick={() => selectOption(item.options)}>
                    <img className="item-icon" src={item.icon} alt={item.name}/>
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                </div>
            })}
        </div>
    </>);
}

export default OptionSelection