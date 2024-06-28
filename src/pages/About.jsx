import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-bold">About Betilife</h1>
      <p className="text-lg">Learn more about what we do.</p>
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Our Mission</CardTitle>
          <CardDescription>We aim to provide the best betting experience.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>At Betilife, we believe in fair play and responsible betting.</p>
        </CardContent>
        <CardFooter>
          <Button variant="outline">Learn More</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default About;