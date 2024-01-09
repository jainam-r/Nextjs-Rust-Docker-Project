import React from 'react';
import Userinterface from '../components/UserInterface';
import UserInterface from '../components/UserInterface';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <UserInterface backendName="rust"/>
    </div>
  );
};

export default Home; 