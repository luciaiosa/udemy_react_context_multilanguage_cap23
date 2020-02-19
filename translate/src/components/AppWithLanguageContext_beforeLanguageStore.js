import React from "react";
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';

class App extends React.Component {
  state = { language: "english" };
  onLanguageChange = language => {
    this.setState({
      language: language
    });
  };

  render() {
    return (
      <div className="ui container">
        <LanguageSelector onLanguageChange={this.onLanguageChange}/>
        {/* Hay que pasarle el language al componente UserCreate, ya que es el el que contiene Button y Field components.
        Para eso, hay que envolver UserCreate con el componente Provider, y pasarle por la prop value (este mismo nombre) el language!!
        ES EN value DONDE SE LE PASA DESDE EL COMPONENTE PADRE AL HIJO EL VALOR DEL language!! */}

        {/* Este UserCreate va a cambiar su language, ya que su valor cambia en función del estado */}
        <ColorContext.Provider value="red">
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate/>
          </LanguageContext.Provider>
        </ColorContext.Provider>

        {/* Este UserCreate NO va a cambiar su language, ya que su valor es el de por defecto. Cada PROVIDER crea su 'pipe' del contexto, no se usa siempre el mismo. Depende del valor que se le pase, se renderiza de nuevo o no (si es dínamico o estatico) */}
{/*         <LanguageContext.Provider value="dutch">
          <UserCreate/>
        </LanguageContext.Provider> */}
        
        {/* Este UserCreate NO va a cambiar su language, ya que SIEMPRE COGE SU VALOR DEL default value, NUNCA SE LE VA A DAR UN VALOR DEL PROVIDER!!! */}
      {/*   <UserCreate/> */}
      </div>
    );
  }
}

export default App;
