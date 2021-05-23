import { screen } from '@testing-library/react';
import MarkerModal, { util } from './index';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event';
const mockStore = configureStore([]);
let store
let component 
let mySocket = {}

const mockHandleClose = jest.fn()
describe('App', () => {
    beforeEach(() => {
        store = mockStore({user: {socket: jest.fn()}})
        mySocket.emit = jest.fn()
        component = render(
            <MemoryRouter>
              <Provider store={store}>
                <MarkerModal handleClose={mockHandleClose} show={true} />
              </Provider>
            </MemoryRouter>
          );

    });

    test('has modal title New Marker', () => {
        const title = screen.getByRole('heading')
        expect(title.textContent).toContain("New Marker")
    })

    test('renders with three buttons', () => {
        const buttons = screen.getAllByRole('button')
        expect(buttons).toHaveLength(3)
    })

    test('renders with a form with two inputs', () => {
        const textareas = screen.getAllByRole('textbox')
        expect(textareas).toHaveLength(2)
    })

    test('handles user input in form', () => {
        const textarea = screen.getAllByRole('textbox')[0]
        userEvent.type(textarea, "Hello")
        expect(textarea.value).toBe('Hello')
        const textarea2 = screen.getAllByRole('textbox')[1]
        userEvent.type(textarea2, "Hello")
        expect(textarea2.value).toBe('Hello')
    })

    test('cancel button calls handleClose function', () => {
        const button = screen.getAllByRole('button')[2]
        userEvent.click(button)
        expect(mockHandleClose).toHaveBeenCalled()
    })
})