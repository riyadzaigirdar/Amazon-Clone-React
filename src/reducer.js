export const getTotal = (basket) => {
  const total = basket.reduce(
    (total, item) => (total = item.price * item.count + total),
    0
  );
  return total;
};

export const initialState = {
  basket: [],
  user: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "add_to_cart":
      let basket = [...state.basket];
      let ids = state.basket.map((item) => item.id);
      if (ids) {
        if (ids.includes(action.item.id)) {
          for (let i = 0; i < basket.length; i++) {
            if (basket[i].id === action.item.id) {
              basket[i].count += 1;
            }
          }
        } else {
          basket.push({ ...action.item, count: 1 });
        }
      }

      return {
        ...state,
        basket: basket,
      };
    case "remove_from_cart":
      let newBasket = [...state.basket];
      newBasket = newBasket.filter((item) => {
        if (item.id !== action.id) {
          return item;
        }
      });
      console.log(newBasket);

      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};

// {
//   id: 123123123,
//   title: "Apple AirPods with Wired Charging Case",
//   price: 114.43,
//   rating: 3,
//   image:
//     "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg",
// },
// {
//   id: 544236546,
//   title:
//     "AmazonBasics 48-Count AA High-Performance Alkaline Batteries, 10-Year Shelf Life, Easy to Open Value Pack",
//   price: 15.49,
//   rating: 4,
//   image:
//     "https://images-na.ssl-images-amazon.com/images/I/71UyNLSv2mL._AC_SX679_.jpg",
// }
