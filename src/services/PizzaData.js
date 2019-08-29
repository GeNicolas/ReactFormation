import pizzas from "./pizzas.json";

export const fetchPizzas = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(pizzas), 500);
  });
};

//export default fetchPizzas;
//console.log(fetchPizzas);
