import PrivateRoute from '.';
import React from 'react';
import { MemoryRouter, Redirect } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { screen } from '@testing-library/react';
const mockStore = configureStore([]);
let store 
describe('test Private route', () => {
  it('should render component if user has been authenticated', () => {
    store = mockStore({user: {socket: jest.fn(), logged_in:true}})
    const AComponent = () => <div>AComponent</div>;
    const props = { path: '/aprivatepath', component: AComponent };
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[props.path]}>
          <PrivateRoute component={AComponent} path="/profile" />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/AComponent/)).toBeInTheDocument();
  });

  it('should redirect if user is not authenticated', () => {
    store = mockStore({user: {socket: jest.fn(), logged_in:false}})
    const AComponent = () => <div>AComponent</div>;
    const props = { path: '/aprivatepath', component: AComponent };
    render(
        <Provider store={store}>
        <MemoryRouter initialEntries={[props.path]}>
          <PrivateRoute component={AComponent} path="/profile" />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.queryByText(/AComponent/)).not.toBeInTheDocument();
  });
});