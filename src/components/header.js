import React from 'react';
import Eu from './img/eu.jpg';

export default function Header(){
    return(
        <header>
            <img src={Eu} />
            <h1 class="text-center red">Curso de React</h1>
        </header>
    )
}