import React from 'react';

/* export default React.createContext(); */
// Esto es todo para crear un contexto en React. La parte complicada es entender como guardar info en el, y como sacarla para usar esa info!!

// La primera opción para guardar datos en Context, es crearlo con valores por defecto!!
const context = React.createContext('english');
console.log(context);
export default context;
// Par conectar ContextLanguage con el componente Button, vamos a crear un contextType!
// Para usar esos datos en un componente nieto (Field y Button), es accedera al contexto con la propiedad this.context!!

// el valor por defecto del contexto puede ser cualquier cosa: array, objeto, string, ...


//Para cambiar el valor por defecto del contexto, creamos un nuevo componente, Provider, que va a ser el source of information (App component))!!
// NO ES EL MISMO PROVIDER DE REACT-REDUX!!!