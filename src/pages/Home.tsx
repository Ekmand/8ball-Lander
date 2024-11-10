import React from 'react';
import { Brain, MessageCircle, Sparkles } from 'lucide-react';

export function Home() {
  return (
    <main className="container mx-auto px-6 pt-20 pb-32">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
          Your Future, Powered by AI
        </h1>
        <p className="text-xl text-gray-400 mb-12">
          Experience the mystical power of the Magic 8 Ball, enhanced with cutting-edge artificial intelligence. 
          Get deeper, more meaningful answers to your questions.
        </p>
        <a 
          href="https://8ball.ekmand.dev" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg shadow-purple-500/25"
        >
          Ask Your Question
        </a>
      </div>

      <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/10 hover:border-purple-500/30 transition-colors">
          <Brain className="w-12 h-12 text-purple-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">AI-Powered Insights</h3>
          <p className="text-gray-400">Advanced machine learning algorithms provide thoughtful and relevant responses to your questions.</p>
        </div>
        <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/10 hover:border-purple-500/30 transition-colors">
          <MessageCircle className="w-12 h-12 text-purple-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Natural Conversations</h3>
          <p className="text-gray-400">Engage in fluid, context-aware dialogues that feel natural and meaningful.</p>
        </div>
        <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/10 hover:border-purple-500/30 transition-colors">
          <Sparkles className="w-12 h-12 text-purple-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Mystical Accuracy</h3>
          <p className="text-gray-400">Combining traditional wisdom with modern technology for enhanced prediction accuracy.</p>
        </div>
      </div>
    </main>
  );
}