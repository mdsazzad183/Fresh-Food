// import React from 'react';
import { Outlet,useLocation } from 'react-router-dom'
import ShopFooter from '../components/ShopFooter';
import ShopHeader from '../components/ShopHeader';

const Main = () => {

const location = useLocation();
    
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');
    
    const excludeHeaderFooter = location.pathname.includes('mycart');
    return (
        <div>
      {!excludeHeaderFooter && !noHeaderFooter && <ShopHeader />}
      <Outlet />
      {!excludeHeaderFooter && !noHeaderFooter && <ShopFooter />}
    </div>
    );
};

export default Main;
