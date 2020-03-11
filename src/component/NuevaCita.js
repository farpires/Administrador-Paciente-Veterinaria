import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

const stateInicial = {
    cita:{
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas:''
    },
    error: false
}


class NuevaCita extends Component {
    state = {...stateInicial}


//CUANDO EL USUARIO ESCRIBE EN LOS INPUTS
     handlechange = (e)=>{
       console.log(e.target.name + ':' + e.target.value );
    //colocar lo que el usuario escribe en el state 
    this.setState({
        cita:{
            ...this.state.cita,
            [e.target.name] : e.target.value
        }
    })
    } 
     //e.target.name es a donde esta escribiendo
     //e.target.value que es lo que esta escribiendo

//CUANDO EL USUARIO ENVIA EL FORMULARIO
    handleSubmit = (e) =>{
        e.preventDefault();

        //extraer los valores del state
        const{mascota,propietario,fecha,hora,sintomas}=this.state.cita;

        //validar que todos los campos esten llenos
        if(mascota === '' || propietario === ''||fecha === ''|| hora === ''||sintomas === ''){
            this.setState({
                error: true
            })
            //detener la ejecucion con un return
            return;  

        }

        //generar objeto con los datos 
        const nuevaCita = {...this.state.cita};
        nuevaCita.id = uuid();


        //Agregar la cita del state App   
        this.props.crearNuevaCita(nuevaCita);

        //colocar en state el stateInicial, 
        this.setState({
            ...stateInicial
        });

    }
//preventDefault para que puedas escribir el codigo con lo que va
// a ser con lo que envie formulrio



    render() { 
        //extraer valor del state
        const{ error } = this.state;
        return ( 
            <section className="card mt-5 py-5">
                <article className="card-body">
                <h2 className="card-title text-center mb-5">
                    llena el formulario para crear una nueva cita
                </h2>
                {error ? <div className="alert alert-danger mt-2 mb-5 text-center">Todos los campos son obligatorio</div> :  null }
                <form
                onSubmit={this.handleSubmit}
                >
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">
                            Nombre Mascota
                        </label>
                        <div className="col-sm-8 col-lg-10">
                        <input 
                        type="text"
                        className="form-control"
                        placeholder="Nombre Mascota"
                        name="mascota"
                        onChange={this.handlechange}
                        value={this.state.cita.mascota}
                        />
                        </div>
                    </div>{/*form-group*/}
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">
                            Nombre del Dueño
                        </label>
                        <div className="col-sm-8 col-lg-10">
                        <input 
                        type="text"
                        className="form-control"
                        placeholder="Nombre de dueño"
                        name="propietario"
                        onChange={this.handlechange}
                        value={this.state.cita.propietario}
                        />
                        </div>
                    </div>{/*form-group*/}
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">
                          Fecha
                        </label>
                        <div className="col-sm-8 col-lg-4">
                        <input 
                        type="date"
                        className="form-control"
                        name="fecha"
                        onChange={this.handlechange}
                        value={this.state.cita.fecha}
                        />
                        </div>
                        <label className="col-sm-4 col-lg-2 col-form-label">
                            Hora
                        </label>
                        <div className="col-sm-8 col-lg-4">
                        <input 
                        type="time"
                        className="form-control"
                        placeholder="Nombre de dueño"
                        name="hora"
                        onChange={this.handlechange}
                        value={this.state.cita.hora}  
                        />
                        </div>
                    </div>{/*form-group*/}
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">
                           Sintomas
                        </label>
                        <div className="col-sm-8 col-lg-10">
                            <textarea 
                            className="form-control"
                            name="sintomas"
                            placeholder="Describe los sintomas"
                            onChange={this.handlechange}
                            value={this.state.cita.sintomas}
                            ></textarea>
                        </div>
                    </div>{/*form-group*/}
                <input type="submit" 
                className="py-3 mt-2 btn btn-success btn-block" 
                value="Agregar Nueva Cita"/>

                </form>
                </article>

            </section>
         );
    }
}

NuevaCita.propTypes = {
    crearNuevaCita : PropTypes.func.isRequired
} 

 
export default NuevaCita;
    


