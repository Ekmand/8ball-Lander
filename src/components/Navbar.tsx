import React from 'react';
import { Sparkles, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
      <Link to="/" className="flex items-center gap-2">
        <Sparkles className="w-6 h-6 text-purple-500" />
        <span className="text-xl font-bold">Magic 8 Ball AI</span>
      </Link>
      <div className="flex gap-6">
        <Link to="/" className="hover:text-purple-400 transition-colors">Home</Link>
        <Link to="/about" className="hover:text-purple-400 transition-colors">About</Link>
        <a href="https://github.com" className="hover:text-purple-400 transition-colors flex items-center gap-1">
          <Github className="w-4 h-4" />
          GitHub
        </a>
      </div>
    </nav>
  );
}