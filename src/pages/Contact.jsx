import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-bold">Contact Us</h1>
      <p className="text-lg">Get in touch with us.</p>
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
          <CardDescription>We are here to help you.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Email: support@betilife.com</p>
          <p>Phone: +123 456 7890</p>
        </CardContent>
        <CardFooter>
          <Button variant="outline">Send Message</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Contact;