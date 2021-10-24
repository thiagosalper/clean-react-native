import { atom, selector } from "recoil";

export const cartState = atom({
  key: 'cartState',
  default: [],
});

export const cartCountState = selector({
  key: 'cartCountState',
  get: ({ get }) => {
    const items = get(cartState);
    return items.length;
  },
});
