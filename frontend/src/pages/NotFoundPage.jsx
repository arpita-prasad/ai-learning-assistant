import React from 'react';
import { Link } from 'react-router-dom';
import { BrainCircuit, ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-50">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] opacity-30" />
      
      <div className="relative text-center px-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-emerald-400 to-teal-500 shadow-lg shadow-emerald-500/25 mb-6">
          <BrainCircuit className="w-8 h-8 text-white" strokeWidth={2} />
        </div>

        <h1 className="text-8xl font-bold text-slate-900 tracking-tight mb-4">
          4<span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-500 to-teal-500">0</span>4
        </h1>

        <h2 className="text-2xl font-semibold text-slate-700 mb-3">
          Page Not Found
        </h2>

        <p className="text-slate-500 text-sm mb-8 max-w-sm mx-auto leading-relaxed">
          Looks like this page doesn't exist or has been moved. Let's get you back on track!
        </p>

        <Link
          to="/dashboard"
          className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-emerald-500/25 active:scale-95"
        >
          <ArrowLeft className="w-4 h-4" strokeWidth={2.5} />
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;