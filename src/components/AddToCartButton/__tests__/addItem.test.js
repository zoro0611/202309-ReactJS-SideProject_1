import { render, fireEvent } from "@testing-library/react";
import AddButton from "@/components/AddToCartButton";
// import { TrashIcon } from "@radix-ui/react-icons";

describe("AddButton", () => {
    it("add item to cart", () => {
		const fn = jest.fn();

		const { getByTestId } = render(<AddButton onAdd={fn} count={1} />);

		const addBtn = getByTestId("plusIcon");
        const count = getByTestId("count");
		fireEvent.click(addBtn);

        // expect(count.textContent).toBe("1");
		expect(fn).toHaveBeenCalledTimes(1);

        setTimeout(() => {
            expect(count.textContent).toBe("2"); 
        }, 0);
	});

    it("remove item from cart", () => {
        const fn = jest.fn();
        const { getByTestId } = render(<AddButton  onRemove={fn} count={2} />);
        const removeBtn = getByTestId("removeIcon");
        const count = getByTestId("count");
        fireEvent.click(removeBtn);

		// expect(count.textContent).toBe("2");
		expect(fn).toHaveBeenCalledTimes(1);


        setTimeout(() => {
            expect(count.textContent).toBe("1"); 
        }, 0); 

    })
})