import React from "react";
import Counter from "./components/Counter"; //
import Greeting from "./components/Greeting"; //

// Optionnel : Définir une interface si votre App a des props
interface AppProps {
  // Vous pouvez ajouter des props ici si nécessaire
  // Par exemple : title?: string;
}

const App: React.FC<AppProps> = () => {
  return (
    <div className="app">
      {/* Utilisation du composant Greeting avec la prop name typée */}
      <Greeting name="TypeScript" />

      {/* Utilisation du composant Counter */}
      <Counter />

      {/* Exemple supplémentaire */}
      <div style={{ marginTop: "20px" }}>
        <Greeting name="Développeur" />
      </div>
    </div>
  );
};

export default App;
