import React from "react";
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
/*     // PRIMERA OPCIÓN PARA USAR LA INFO DEL CONTEXTO:
    // Par conectar ContextLanguage con el componente Button, vamos a crear un contextType!
    // Debe tener este nombre
    // static se usa para añadir una propiedad a la misma clase
    // es lo mismo que Button.contextType = LanguageContext;

    static contextType = LanguageContext;

    // Para usar esos datos en un componente nieto (Field y Button), es accedera al contexto con la propiedad this.context!! */

    renderSubmit = value => {
        return value === 'english' ? 'Submit' : 'Voorleggen';
    }

    renderSubmitButton = (color) => {
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {(value) => this.renderSubmit(value)}
                </LanguageContext.Consumer>
            </button>
        )
    }

    render() {
         /* // PRIMERA OPCIÓN PARA USAR LA INFO DEL CONTEXTO:
        const text = this.context === 'english' ? 'Submit' : 'Voorleggen'; 
        return <button className="ui primary button">{text}</button>;  */

        // SEGUNDA OPCIÓN PARA USAR LA INFO DEL CONTEXTO: CON Consumer component
        /* we are providing a function as a child to React component. That component is going to take that child 
        function and automatically invoke it for us.
        So the is going to be whatever value is currently inside of the pipe. */

        /* So again: any time we make use of a consumer to get a value out of that pipe or that context object 
        we're going to pass in a single function as a child. That child will be called with whatever value is 
        inside of our pipe so we can implement some logic inside of here. */
        return (
            /* I want to access the value of the context object and change some property of the button.
            I'm going to wrap the button in this case with ColorContext Consumer. */

            /* THE ONLY CHILD that we pass to a consumer component is going to be a function!!
            So we now need to pass a function as the only child to this consumer and that function is going to receive
            the current value inside of it, and then from that function we're going to have to return this entire block of jsx */
            <ColorContext.Consumer>
                {(color) => this.renderSubmitButton(color)}
            </ColorContext.Consumer>
            
        )
    }
    
}

export default Button;