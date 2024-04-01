// JavaScript function to toggle menu visibility and adjust content position

// JavaScript function to toggle visibility of additional recipes
function toggleAdditionalRecipes() {
  var additionalRecipes = document.querySelector('.additional-recipes');
  var viewMoreBtn = document.getElementById('view-more-btn');

  if (additionalRecipes.style.display === 'none') {
    additionalRecipes.style.display = 'block'; // Show additional recipes
    viewMoreBtn.textContent = 'Hide Recipes'; // Change button text
  } else {
    additionalRecipes.style.display = 'none'; // Hide additional recipes
    viewMoreBtn.textContent = 'View More Recipes'; // Change button text
  }
}

// Add click event listener to the "View More" button
document.getElementById('view-more-btn').addEventListener('click', toggleAdditionalRecipes);
