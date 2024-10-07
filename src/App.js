import { useState } from "react";
// import Header from './components/header';
// import Corpo from './components/Corpo';
//import Dados from './components/Dados';
//import Botao from './components/botao';
import './App.css';

/*
function App() {
	
	const [count, setCount] = useState(0);

    function handleClick(){
        setCount(count + 1);
    }

	return (
		<>
			<section className='caixa'>
				<Header/>
				<Corpo/>
				<Botao count={count} onClick={handleClick}/>
				<Botao count={count} onClick={handleClick}/>
			</section>			
		</>
	);
}

export default App;
*/

//TIC-TAC-TOE
export default function Square(){
	return <button className="square">X</button>;
}