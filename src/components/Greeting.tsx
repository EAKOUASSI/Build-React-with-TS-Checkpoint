import React from "react";

// 1. Définir une interface pour les props
interface GreetingProps {
  name: string; // Le nom doit être une chaîne de caractères
}

// 2. Spécifier les props avec le type GreetingProps
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  // 3. Le retour est implicitement typé comme JSX.Element
  return <div>Hello, {name}!</div>;
};

export default Greeting;
