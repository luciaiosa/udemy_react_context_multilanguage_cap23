import React from "react";
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {

    static contextType = LanguageContext;

    render() {
        {/* Usando LanguageContext (después de haber creado LanguageStore) */}
        const text = this.context.language === 'english' ? 'Name' : 'Naam';

        /* const text = this.context === 'english' ? 'Name' : 'Naam'; */

        return (
            <div className="ui field">
                <label>{text}</label>
                <input/>
            </div>
        );
    }
}

export default Field;