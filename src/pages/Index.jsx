import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-bold">Welcome to Betilife</h1>
      <p className="text-lg">Your ultimate betting companion.</p>
      <nav className="space-x-4">
        <Link to="/" className="text-blue-500">Home</Link>
        <Link to="/about" className="text-blue-500">About</Link>
        <Link to="/contact" className="text-blue-500">Contact</Link>
      </nav>
    </div>
  );
};

export default Index;