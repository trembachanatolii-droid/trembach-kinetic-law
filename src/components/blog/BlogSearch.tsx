import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface BlogSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export const BlogSearch: React.FC<BlogSearchProps> = ({ value, onChange }) => {
  return (
    <div className="relative max-w-2xl mx-auto mb-12">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <Input
        type="text"
        placeholder="Search articles..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-12 h-14 text-base border-gray-300 rounded-2xl focus:ring-2 focus:ring-[#007AFF] focus:border-transparent transition-all"
      />
    </div>
  );
};
