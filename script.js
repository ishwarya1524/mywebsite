document.getElementById('searchForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const query = document.getElementById('searchInput').value;

    // Send search query to server and fetch results
    try {
        const response = await fetch(`/search?q=${encodeURIComponent(query)}`);
        const data = await response.json();
        
        displaySearchResults(data);
    } catch (error) {
        console.error('Error fetching search results:', error);
    }
});

function displaySearchResults(results) {
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = '';

    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>No results found.</p>';
    } else {
        const resultList = document.createElement('ul');
        results.forEach(result => {
            const listItem = document.createElement('li');
            listItem.textContent = result.title; // Adjust according to your data structure
            resultList.appendChild(listItem);
        });
        resultsContainer.appendChild(resultList);
    }
}
