import React from "react";
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {
    static contextType = LanguageContext;

    render() {
        console.log(this.context);

        return (
            <div>
                Select a language:
                {/* Ahora onLanguageChange se le pasa por param desde el padre, y la lógica queda en el padre (App)!! */}
                {/* <i
                    className="flag us"
                    onClick={() => this.props.onLanguageChange("english")}
                />
                <i
                    className="flag nl"
                    onClick={() => this.props.onLanguageChange("dutch")}
                /> */}

{/* Usando LanguageContext (después de haber creado LanguageStore) */}
                <i
                    className="flag us"
                    onClick={() => this.context.onLanguageChange("english")}
                />
                <i
                    className="flag nl"
                    onClick={() => this.context.onLanguageChange("dutch")}
                />
            </div>
        );
    }
}

export default LanguageSelector;