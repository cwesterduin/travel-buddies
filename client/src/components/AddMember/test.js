import { screen } from '@testing-library/react';
import AddMember from '.';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event';
const mockStore = configureStore([]);
let store
let mySocket

describe('App', () => {
    beforeEach(() => {
        store = mockStore({user: {socket: jest.fn()}})
        mySocket = {}
        render(
            <MemoryRouter>
              <Provider store={store}>
                <AddMember />
              </Provider>
            </MemoryRouter>
          );

    });

    test('it renders a button', () => {
        const button = screen.getByRole('button')
        expect(button.textContent).toContain("Add someone +")
    })

    test('on button click it renders a form', () => {
        const button = screen.getByRole('button')
        userEvent.click(button)
        const search = screen.getByRole('searchbox')
        expect(search).toBeInTheDocument()
    })

   
})