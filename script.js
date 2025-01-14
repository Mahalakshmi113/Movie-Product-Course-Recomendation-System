document.addEventListener("DOMContentLoaded", () => {
  const domainSelect = document.getElementById("domain");
  const recommendationsSection = document.getElementById("recommendations");
  const selectedDomainTitle = document.getElementById("selected-domain");
  const recommendationList = document.getElementById("recommendation-list");

  // Event Listener for Domain Selection
  domainSelect.addEventListener("change", async () => {
    const selectedDomain = domainSelect.value;

    if (selectedDomain) {
      // Update Recommendations Section
      selectedDomainTitle.textContent = `Top ${selectedDomain.charAt(0).toUpperCase() + selectedDomain.slice(1)} Recommendations`;
      recommendationsSection.classList.remove("hidden");

      // Fetch Recommendations from Backend (Mocked API)
      const recommendations = await fetchRecommendations(selectedDomain);

      // Render Recommendations
      renderRecommendations(recommendations);
    }
  });

  // Mocked Function to Fetch Recommendations
  async function fetchRecommendations(domain) {
    // Simulating a backend API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockData = {
          movies: [
            { image: "Images\inception-9781608870158_hr.jpg", title: "Inception", rating: 4.5, description: "A mind-bending thriller." },
            { image: "https://via.placeholder.com/300x200?text=Interstellar", title: "Interstellar", rating: 4.7, description: "A journey beyond the stars." },
            { image: "Images\inception-9781608870158_hr.jpg", title: "Titanic", rating: 4.5, description: "A mind-bending thriller." },
            { image: "https://via.placeholder.com/300x200?text=Interstellar", title: "Interstellar", rating: 4.7, description: "A journey beyond the stars." },
            { image: "Images\inception-9781608870158_hr.jpg", title: "Inception", rating: 4.5, description: "A mind-bending thriller." },
            { image: "https://via.placeholder.com/300x200?text=Interstellar", title: "Interstellar", rating: 4.7, description: "A journey beyond the stars." },
            { image: "Images\inception-9781608870158_hr.jpg", title: "Titanic", rating: 4.5, description: "A mind-bending thriller." },
            { image: "https://via.placeholder.com/300x200?text=Interstellar", title: "Interstellar", rating: 4.7, description: "A journey beyond the stars." },
            { image: "Images\inception-9781608870158_hr.jpg", title: "Inception", rating: 4.5, description: "A mind-bending thriller." },
            { image: "https://via.placeholder.com/300x200?text=Interstellar", title: "Interstellar", rating: 4.7, description: "A journey beyond the stars." },
            { image: "Images\inception-9781608870158_hr.jpg", title: "Titanic", rating: 4.5, description: "A mind-bending thriller." },
            { image: "https://via.placeholder.com/300x200?text=Interstellar", title: "Interstellar", rating: 4.7, description: "A journey beyond the stars." },
            { image: "Images\inception-9781608870158_hr.jpg", title: "Inception", rating: 4.5, description: "A mind-bending thriller." },
            { image: "https://via.placeholder.com/300x200?text=Interstellar", title: "Interstellar", rating: 4.7, description: "A journey beyond the stars." },
            { image: "Images\inception-9781608870158_hr.jpg", title: "Titanic", rating: 4.5, description: "A mind-bending thriller." },
            { image: "https://via.placeholder.com/300x200?text=Interstellar", title: "Interstellar", rating: 4.7, description: "A journey beyond the stars." },
        ],
          courses: [
            { image: "https://via.placeholder.com/300x200?text=JavaScript+Essentials", title: "JavaScript Essentials", rating: 4.6, description: "Master JavaScript from scratch." },
            { image: "https://via.placeholder.com/300x200?text=Web+Development+Bootcamp", title: "Web Development Bootcamp", rating: 4.8, description: "Build responsive websites." },
            { image: "https://via.placeholder.com/300x200?text=JavaScript+Essentials", title: "JavaScript Essentials", rating: 4.6, description: "Master JavaScript from scratch." },
            { image: "https://via.placeholder.com/300x200?text=Web+Development+Bootcamp", title: "Web Development Bootcamp", rating: 4.8, description: "Build responsive websites." },
            { image: "https://via.placeholder.com/300x200?text=JavaScript+Essentials", title: "JavaScript Essentials", rating: 4.6, description: "Master JavaScript from scratch." },
            { image: "https://via.placeholder.com/300x200?text=Web+Development+Bootcamp", title: "Web Development Bootcamp", rating: 4.8, description: "Build responsive websites." },  
        ],
          ecommerce: [
            { image: "https://via.placeholder.com/300x200?text=Smartphone+X", title: "Smartphone X", rating: 4.3, description: "A high-performance smartphone." },
            { image: "https://via.placeholder.com/300x200?text=Wireless+Earbuds", title: "Wireless Earbuds", rating: 4.5, description: "Crystal clear sound." },
            { image: "https://via.placeholder.com/300x200?text=Smartphone+X", title: "Smartphone X", rating: 4.3, description: "A high-performance smartphone." },
            { image: "https://via.placeholder.com/300x200?text=Wireless+Earbuds", title: "Wireless Earbuds", rating: 4.5, description: "Crystal clear sound." },
            { image: "https://via.placeholder.com/300x200?text=Smartphone+X", title: "Smartphone X", rating: 4.3, description: "A high-performance smartphone." },
            { image: "https://via.placeholder.com/300x200?text=Wireless+Earbuds", title: "Wireless Earbuds", rating: 4.5, description: "Crystal clear sound." },
            { image: "https://via.placeholder.com/300x200?text=Smartphone+X", title: "Smartphone X", rating: 4.3, description: "A high-performance smartphone." },
            { image: "https://via.placeholder.com/300x200?text=Wireless+Earbuds", title: "Wireless Earbuds", rating: 4.5, description: "Crystal clear sound." },
        ],
        };
        resolve(mockData[domain]);
      }, 1000);
    });
  }

  // Render Recommendations in the UI
  function renderRecommendations(recommendations) {
    recommendationList.innerHTML = ""; // Clear previous content

    recommendations.forEach((item) => {
      const recommendationItem = document.createElement("div");
      recommendationItem.classList.add("recommendation-item");

      recommendationItem.innerHTML = `
        <img src="${item.image}" alt="${item.title}" class="recommendation-image">
        <div class="recommendation-details">
          <h3>${item.title}</h3>
          <p class="rating">⭐ ${item.rating}</p>
          <p>${item.description}</p>
        </div>
      `;

      recommendationList.appendChild(recommendationItem);
    });
  }
});
