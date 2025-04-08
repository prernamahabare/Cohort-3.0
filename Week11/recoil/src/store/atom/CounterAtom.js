import { atom, selector } from "recoil";

export const CounterAtom = atom({
    default : 0,
    key : "Counter"
})


// A selector represents a piece of **derived state**. You can think of derived state as the output of passing state to a pure function that derives a new value from the said state.
// Derived state is a powerful concept because it lets us build dynamic data that depends on other data.

export const isEvenSelector = selector({
    key:"isEven",
    get: (function({get}){
        const count = get(CounterAtom)
        const isEven = (count % 2 == 0)
        return isEven;
    })
})