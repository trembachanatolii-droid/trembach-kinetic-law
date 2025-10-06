import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      <button
        onClick={() => onSelectCategory('All')}
        className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
          selectedCategory === 'All'
            ? 'bg-[#007AFF] text-white shadow-lg shadow-[#007AFF]/30'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        All Articles
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
            selectedCategory === category
              ? 'bg-[#007AFF] text-white shadow-lg shadow-[#007AFF]/30'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
