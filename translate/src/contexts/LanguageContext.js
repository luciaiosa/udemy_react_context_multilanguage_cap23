import React from 'react';

/* export default React.createContext(); */
// Esto es todo para crear un contexto en React. La parte complicada es entender como guardar info en el, y como sacarla para usar esa info!!

// La primera opción para guardar datos en Context, es crearlo con valores por defecto!!
const Context = React.createContext('english');
console.log(Context);

// Par conectar ContextLanguage con el componente Button, vamos a crear un contextType!
// Para usar esos datos en un componente nieto (Field y Button), es accedera al contexto con la propiedad this.context!!

// el valor por defecto del contexto puede ser cualquier cosa: array, objeto, string, ...


//Para cambiar el valor por defecto del contexto, creamos un nuevo componente, Provider, que va a ser el source of information (App component))!!
// NO ES EL MISMO PROVIDER DE REACT-REDUX!!!

// LanguageStore component contendría la lógica de la app y los datos y los pondrá a disposición de otros 
// componentes dentro de nuestra jerarquía de componentes a través del sistema de contexto.

export class LanguageStore extends React.Component {

    state = { language: "english" };

    onLanguageChange = language => {
        this.setState({
          language: language
        });
      };

    render() {
        return (
            /* Estoy pasando en value un nuevo objeto que contiene una copia del estado, y el callback onLanguageChange */
            <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange}}>
            {/* SOLO LOS COMPONENTES QUE ESTÉN DENTRO DE PROVIDER TIENEN ACCESO AL CONTEXTO !!
            POR ESO LE PASO TODOS LOS HIJOS QUE ESTE TIENE */}
               {this.props.children} 
            </Context.Provider>
        );
    }
}

export default Context;