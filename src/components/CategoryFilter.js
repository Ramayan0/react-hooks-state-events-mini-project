import React from "react";

function CategoryFilter({ categories, selectedCategory, clikedCategory }) {
  const displyaCategoryButtons = categories.map((category) => {
    return (
      <button
        key={category}
        className={category === selectedCategory ? "selected" : null}
        onClick={() => clikedCategory(category)}
      >
        {category}
      </button>
    );
  });
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {displyaCategoryButtons}
    </div>
  );
}

export default CategoryFilter;
