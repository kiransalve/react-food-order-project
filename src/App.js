import Cart from "./component/Cart/Cart";
import Header from "./component/Layout/Header";
import Meal from "./component/Meal/Meal";
import { useState } from "react";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandlar = () => {
    setCartIsShown(true);
  };
  const hideCartHandlar = () => {
    setCartIsShown(false);
  };

  return (
    <>
      {cartIsShown && <Cart onClose={hideCartHandlar} />}
      <Header onShowCart={showCartHandlar} />
      <main>
        <Meal />
      </main>
    </>
  );
}

export default App;
