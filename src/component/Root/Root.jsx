import React from 'react';
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';
import ItemList from '../ItemList/ItemList';
import ProductList from '../ProductList/ProductList';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Header></Header>
            <ItemList></ItemList>
            <ProductList></ProductList>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;