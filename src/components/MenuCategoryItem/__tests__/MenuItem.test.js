import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux'; 
import configureMockStore from 'redux-mock-store'; 
import MenuCategoryItem from "@/components/MenuCategoryItem"; 

const mockStore = configureMockStore([]);
const store = mockStore({ cart: {} }); 


describe('Check AddButton Component in MenuCategoryItem', () => {
    it('should render the component', () => {
        const testData = {
            category: '其他',
            id: 15,
            image: 'items/15.webp',
            title: '煙燻三文魚漢堡',
            price: 11.5
        }
        const testId = `${testData.id}-${testData.title}`

        render(
            <Provider store={store}>
                <MenuCategoryItem data={testData} />
            </Provider>
        );
        const addButton = screen.getByTestId(testId);
        expect(addButton).toBeInTheDocument();

        // fireEvent.click(addButton);
    });
});
