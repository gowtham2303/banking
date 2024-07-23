// pages/index.js (or index.tsx)

import ToolBalanceBox from '@/components/ToolBalanceBox';
import HeaderBox from '@/components/HeaderBox';
import React from 'react';
import RightSidebar from '@/components/RightSidebar';

const Home = () => {
    const loggedIn ={firstName : 'Gowtham' ,lastName :"Sree", email :'gowthamt3060@gmail.com'};

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
       RECENT TRANSCITIONS
       </div>
       <RightSidebar user={loggedIn} 
       transactions={[]}
       banks={[{currentBalance :1250.00},{currentBalance:2340.00}]}
       />

    </section>
  );
};


export default Home;
