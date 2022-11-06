import Cart from "./component/Cart/Cart";
import Header from "./component/Layout/Header";
import Meal from "./component/Meal/Meal";

function App() {
  return (
    <>
    <Cart />
      <Header />
      <main>
        <Meal />
      </main>
    </>
  );
}

export default App;
