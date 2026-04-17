import React from 'react';
import TestimonialCard from './TestimonialCard';

interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Mr. Ajay Verma",
    role: "Alumni, Class of 2018",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&auto=format",
    quote: "I am thankful to Tilak College for their training, guidance and moral support. I am looking forward to having a secured and successful career."
  },
  {
    name: "Mr. Vijay Singh",
    role: "Current Student, MBA",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&auto=format",
    quote: "The quality I like most about the department is how fundamentally they have prepared me for my next step in life, regardless of whether I choose employment or graduate studies."
  },
  {
    name: "Mr. Nikhil Yadav",
    role: "Faculty, Computer Science",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&auto=format",
    quote: "I’m so grateful to being a part of Tilak College, Katni. It nourished me and with greater opportunities towards my bright future."
  },
  {
    name: "Miss. Shreys Gupta",
    role: "Faculty, Computer Science",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&auto=format",
    quote: "I’m so grateful to being a part of Tilak College, Jabalpur. It nourished me and with greater opportunities towards my bright future."
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
            Voices of Excellence
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Hear from our students, alumni, and faculty about their transformative experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}