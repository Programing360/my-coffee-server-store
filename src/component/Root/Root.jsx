import React from 'react';
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';
import ItemList from '../ItemList/ItemList';

const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Header></Header>
            <ItemList></ItemList>
        </div>
    );
};

export default Root;