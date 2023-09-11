import reducer, { add, remove } from "@/datas/slice/cartSlice";

test("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({});
});

test("should handle adding an item to the cart", () => {
    const previousState = {};
    const updatedState = reducer(previousState, add({ id: 2 }));
    const afterState = { 2: 1 };
    expect(updatedState).toEqual(afterState);

    //繼續測試
    const previousState2 = { 2: 1 };
    const updatedState2 = reducer(previousState2, add({ id: 2 }));
    const afterState2 = { 2: 2 };
    expect(updatedState2).toEqual(afterState2);
});

test("should handle removing an item from the cart", () => {
    const previousState = { 1:1, 7: 1 };
    const updatedState = reducer(previousState, remove({ id: 7 }));
    const afterState = { 1:1, 7: 0 };
    expect(updatedState).toEqual(afterState);

    const previousState2 = { 1:1, 7: 0 };
    const updatedState2 = reducer(previousState2, remove({ id: 1 }));
    const afterState2 = { 1:0, 7: 0 };
    expect(updatedState2).toEqual(afterState2);

});

