import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../page/home';
import Questions from '../page/questions';

export interface IRoutesProps {
    element: any;
}

const AppRouter: React.FunctionComponent<IRoutesProps> = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/questions" element={<Questions />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
