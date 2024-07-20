// pages/index.js (or index.tsx)

import ToolBalanceBox from '@/components/ToolBalanceBox';
import HeaderBox from '@/components/HeaderBox';
import React from 'react';

const Home = () => {
    const loggedIn ={firstName : 'Gowtham '};

  return (
    <section className='home'>
       <div className='home-content'>    
       <header className="home-header">
         <HeaderBox 
         type='greeting'
         title="Welcome"
         user={loggedIn?.firstName || 'Guest'}
         subtext ='Access and Manage Your account and Transactions efficeiently .'
         />
         <ToolBalanceBox
         accounts ={[]}
         totalBanks={1}
         totalCurrentBalance = {1250.35}
         />
          

       </header>
       </div>
    </section>
  );
};


export default Home;
