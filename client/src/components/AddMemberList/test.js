import { screen } from '@testing-library/react';
import AddMemberList from '.';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event';
const mockStore = configureStore([]);
let store
let mySocket
let items = [
    {username:'user1', id:1},
    {username:'user2', id:2}
]
describe('App', () => {
    beforeEach(() => {
        store = mockStore({user: {socket: jest.fn()}})
        mySocket = {}
        render(
            <MemoryRouter>
              <Provider store={store}>
                <AddMemberList items={items} />
              </Provider>
            </MemoryRouter>
          );

    });

    test('it renders a list', () => {
        const list = screen.getAllByRole('listitem')
        expect(list).toHaveLength(2)
    })
   
})