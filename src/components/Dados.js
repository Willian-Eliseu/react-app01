import React from "react";
export default function Dados(props){
    return(
        <section>
            <p>Nome: {props.nome}</p>
            <p>Email: {props.email}</p>
            <p>Celular: {props.celular}</p>
        </section>
    )
}