import React,{Component} from 'react';
import './bootstrap.min.css';
import Header from './component/Header';
import NuevaCita from './component/NuevaCita';
import ListaCitas from './component/ListaCitas';

class App extends Component {
  state = { 
    citas: []
   }

   //Cuando la aplicacion
   componentDidMount(){
    const citasLS = localStorage.getItem('citas');
    if(citasLS){
      this.setState({
          citas : JSON.parse(citasLS)
        })
    }
   }
   //Cuando  eliminamos o agregamos una nueva cta
   componentDidUpdate(){
     localStorage.setItem('citas',JSON.stringify(this.state.citas));
   }

   crearNuevaCita = datos =>{
    //  //copiar el state actual
       const citas = [...this.state.citas, datos];
       //  //agregar el nuevo state
      this.setState({ 
        citas
      })  
   }
   //Eliminar las citas del state
   eliminarCita = id =>{
    //tomar una copia del state 
    const citasActuales = [...this.state.citas];

    //utilizar filter para sacar rl rlrmrnto @id del arreglo
    const citas = citasActuales.filter(cita => cita.id !== id)

    //actualizar el state
    this.setState({
      citas
    })
   }


  render() { 
    return ( 
     <div className="container">
       <Header
       titulo= 'Administrador Paciente Veterinaria'
       />
       <div className="row">
        <div className="col-md-10 mx-auto">
        <NuevaCita
        crearNuevaCita={this.crearNuevaCita}
        />
        </div> 
        <div className="mt-5 col-md-10 mx-auto">
        <ListaCitas
         citas={this.state.citas}
         eliminarCita={this.eliminarCita}
        
        />
        </div>
        
       </div>
     </div>

     );
  }
}
 
export default App;


//en react existe varias forma de poder realizar lo mismo
//nos enfocaremos en 4 forma
//classes y Props(la forma mas comun, 95% del codigo existente
//en React utiliza);
//
//2-Context API(Disponible desde la version 16.3);
//
//3- React Hooks (Disponible desde la version 16.8);
//nos permite hacer mucho con poco codigo 
//
//4- Redux(la forma mas comun de manejar un statet complejo)
//
//Se pueden utilizar unas con otras
//EJEMPLO: Clases y Props con REDUX
//Hooks con Context
//Hooks con Redux
//Clases y Props con Context