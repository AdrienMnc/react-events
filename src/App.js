import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [stockNumber, setStockNumber] = useState([]);

  function stockingNumber() {
    setCount(Math.floor(Math.random() * 90) + 1);
    if (stockNumber.indexOf(count) === -1) {
      setStockNumber([...stockNumber, count]);
    }
  }

  return (
    <>
      <div className="App">
        <p>Count: {count}</p>

        <div>
          <button
            onClick={() => {
              stockingNumber();
            }}
          >
            tirer au sort
          </button>
        </div>

        <div>
          <ul>
            {stockNumber.map((number) => (
              <li>{number}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;

/**
 * 
 *  - Créez un nouveau projet React.
    - Dans le composant principal App, créez une variable d'état "tirage" contenant la future valeur
      tirée au sort et attribuez lui la valeur par défaut 0.
    - Ajoutez un bouton "Tirer au sort". Lors du click, un nombre aléatoire compris entre 1 et 90
      doit être stocké dans la variable détat "tirage".
    - Affichez la variable d'état tirage sur la page.



    - Créez une seconde variable d'état "historiqueTirage", sa valeur par défaut doit être un
      tableau vide.
    - Lors de chaque tirage, stockez dans le tableau "historiqueTirage" la nouvelle valeur tirée en
      plus de la stocker dans la variable d'état "tirage".
    - Améliorez la fonction de tirage au sort pour que, si le nombre tiré est déjà dans le tableau
      "historiqueTirage", un nouveau nombre soit tiré au sort.
    - Affichez sur la page à l'aide d'une boucle l'ensemble des nombre tirés contenus dans le
      tableau "historiqueTirage".
 */
