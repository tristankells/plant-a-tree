import React from 'react';
import { shallow} from 'enzyme';
import ReactDOM from 'react-dom';
import App from './App';
import ProfileMenu from './components/ProfileMenu';
import ShippingSummary from './components/ShippingSummary';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ShippingView from './components/ShippingView';
import ShoppingCartItem from './components/ShoppingCartItem';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
})

it('renders the profileMenu', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ProfileMenu />, div);
})

it('renders the ShippingSummary', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ShippingSummary />, div);
})

it('renders the Navbar', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Navbar />, div);
})

it('renders the ProductList', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ProductList />, div);
})

it('renders the ShippingView', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ShippingView />, div);
})

it('renders the ShoppingCartItem', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ShoppingCartItem />, div);
})

test('Visibility of component Categories changes when clicked', 
() => {
//////////////////////////////////////////////////////////////////////
});