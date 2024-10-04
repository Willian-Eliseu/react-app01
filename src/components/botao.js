import React from "react";
import { useState } from "react";

export default function Botao() {
    const products = [
        { title: 'Cabbage', isFruit: false, id: 1 },
        { title: 'Garlic', isFruit: false, id: 2 },
        { title: 'Apple', isFruit: true, id: 3 },
    ];

    const listItems = products.map(product =>
        <li 
            key={product.id}
            style={{
                color: product.isFruit ? 'magenta' : 'darkgreen'
            }}
        >
            {product.title}
        </li>
    );

    const [count, setCount] = useState(0);

    function handleClick(){
        setCount(count + 1);
    }

    return (
        <>
            {/* <ul>{listItems}</ul> */}
            <button onClick={handleClick}>
                Clicked {count} times
            </button>
        </>
    );
}