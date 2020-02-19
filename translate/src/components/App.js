import React from "react";
import UserCreate from './UserCreate';
import {LanguageStore} from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';

class App extends React.Component {

  render() {
    return (
      <div className="ui container">
      {/* Ya no usamos LanguageContext, sino LanguageStore, que es el nuevo componente que se encarga 
      de la lógica de la app del Contexto 
      Quiero que los dos componentes, LanguageSelector y UserCreate pueda acceder al contexto, then I wrap those two with LanguageStore */}
             
        <LanguageStore>
          <LanguageSelector/>
          <ColorContext.Provider value="red">
             <UserCreate/>
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
