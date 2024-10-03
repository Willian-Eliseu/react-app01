import React from "react";
export default function Dados(props){
    let n1 = 10;
    let n2 = 5;
    return(
        <section>
            <p>Nome: {props.nome()}</p>
            <p>Email: {props.email}</p>
            <p>Celular: {props.celular}</p>
            <p>{`A soma de ${n1} com ${n2} é igual a ${props.somar(n1,n2)}`}</p>
        </section>
    )
}