import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

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
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Featured Bet</CardTitle>
          <CardDescription>Check out our featured bet of the day!</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Bet on your favorite team and win big!</p>
        </CardContent>
        <CardFooter>
          <Button variant="outline">Place Bet</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Index;