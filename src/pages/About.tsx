import React from 'react';
import { Wand2, Shield, Users, Star } from 'lucide-react';

export function About() {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "AI Research Lead",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Michael Rodriguez",
      role: "ML Engineer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Aisha Patel",
      role: "UX Designer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200"
    }
  ];

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
          About Magic 8 Ball AI
        </h1>
        <p className="text-xl text-gray-400">
          Reimagining the classic fortune teller through the lens of artificial intelligence
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
          <p className="text-gray-400">
            We're on a mission to blend the mystical charm of the traditional Magic 8 Ball with 
            cutting-edge AI technology. Our goal is to provide meaningful insights while preserving 
            the enchanting experience that has captivated people for generations.
          </p>
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="flex items-center gap-3">
              <Wand2 className="w-6 h-6 text-purple-500" />
              <span>AI-Powered</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-purple-500" />
              <span>Secure</span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-purple-500" />
              <span>Community</span>
            </div>
            <div className="flex items-center gap-3">
              <Star className="w-6 h-6 text-purple-500" />
              <span>Innovative</span>
            </div>
          </div>
        </div>
        <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/10">
          <h3 className="text-2xl font-bold mb-4">How It Works</h3>
          <div className="space-y-4">
            <p className="text-gray-400">
              Our advanced AI model combines natural language processing with deep learning 
              to understand the context and nuance of your questions. Unlike traditional 
              Magic 8 Balls with limited responses, our AI provides personalized, 
              thoughtful answers while maintaining an air of mystery.
            </p>
            <p className="text-gray-400">
              We've trained our model on vast datasets while implementing ethical AI 
              practices to ensure responsible and meaningful interactions.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-32">
        <h2 className="text-3xl font-bold text-center mb-16">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-purple-500/20"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}