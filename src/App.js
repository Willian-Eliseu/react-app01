import logo from './logo.svg';
import imagemEu from './components/img/eu.jpg';
import './App.css';

function App() {
	const nome = "WILLIAN ELISEU DA SILVA";
	const curso = "CURSO DE REACT";
	const funcao = () => {
		return nome;
	}

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Meu nome é: {funcao()}
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Estou aprendendo: {curso}
				</a>
				<img src={imagemEu} />
			</header>
		</div>
	);
}

export default App;
