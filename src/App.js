import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Snack from './Snack';
import VendingMachine from './VendingMachine';

const App = function(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/snack/:name' element={<Snack/>} />
                    <Route path='/' element={<VendingMachine/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
