import React from "react";
import Dados from './Dados';
export default function Corpo() {
    
    const nomeInicial = 'WILLIAN ELISEU DA SILVA';
	const emailInicial = 'w.eliseu@gmail.com';
	const celularInicial = '(14)98102-4180';

    return (
        <main>
            <h2>Título do corpo</h2>
            <p>
                Lorem Ipsum is simply dummy text of the printing 
                and typesetting industry. Lorem Ipsum has been 
                the industry's standard dummy text ever since the 
                1500s, when an unknown printer took a galley of 
                type and scrambled it to make a type specimen 
                book. It has survived not only five centuries,
                 but also the leap into electronic typesetting, 
                 remaining essentially unchanged. It was popularised 
                 in the 1960s with the release of Letraset sheets 
                 containing Lorem Ipsum passages, and more recently 
                 with desktop publishing software like Aldus PageMaker 
                 including versions of Lorem Ipsum.
            </p>
            <Dados 
				nome={nomeInicial}
				email={emailInicial}
				celular={celularInicial}
			/>
        </main>
    )
}