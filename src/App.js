import Header from './components/header';
import Corpo from './components/Corpo';
import Dados from './components/Dados';
import Botao from './components/botao';
import './App.css';

function App() {
	return (
		<>
			<section className='caixa'>
				<Header/>
				<Corpo/>
				<Botao/>
			</section>			
		</>
	);
}

export default App;
