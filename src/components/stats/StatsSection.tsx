import React from 'react';
import { statsData } from '../../data/mockData';
import { Users, Laptop, FolderGit2, Award } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Users':
        return <Users className="w-6 h-6 text-red-600" />;
      case 'Laptop':
        return <Laptop className="w-6 h-6 text-blue-600" />;
      case 'FolderGit2':
        return <FolderGit2 className="w-6 h-6 text-emerald-600" />;
      case 'Award':
        return <Award className="w-6 h-6 text-amber-500" />;
      default:
        return <Users className="w-6 h-6 text-red-600" />;
    }
  };

  return (
    <section className="py-12 bg-slate-50/70 border-y border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat) => (
            <div
              key={stat.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                  {stat.value}
                </span>
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getIcon(stat.iconName)}
                </div>
              </div>
              <h3 className="font-bold text-slate-900 text-base">{stat.label}</h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
