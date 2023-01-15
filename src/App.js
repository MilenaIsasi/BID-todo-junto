import './App.css';
import Contendido from './componentes/contenido';



const App =() =>{
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <Contendido
        firstName='Doe'
        lastName='Jane'
        Age={45}
        hairColor='Black'
        />
          <Contendido
        firstName='Smith'
        lastName='John'
        Age={88}
        hairColor='Brown'
        />

      </div>
    </div>
  );
}

export default App;
