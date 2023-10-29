const searchBar = document.getElementById("search-bar");
const searchButton = document.getElementById("search-button");
const searchResults = document.getElementById("search-results");

// Contoh data hasil pencarian (jurnal) dengan gambar
const journalEntries = [
    { title: "Teori Humanist - Abraham Maslow", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "https://tse2.mm.bing.net/th?id=OIP.OQlaOpzq71BEDiW5UBt3zgHaFj&amp;pid=Api&amp;P=0&amp;h=220" },
    { title: "Proyek Demokrasi Fase D", content: "Demokrasi adalah pemilihan pemimpin berdasarkan rakyat, ", image: "image2.jpg" },
    { title: "Entry 3", content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.", image: "image3.jpg" }
];

// Fungsi untuk menampilkan hasil pencarian dalam format jurnal
function displaySearchResults(results) {
    searchResults.innerHTML = ""; // Menghapus hasil pencarian sebelumnya

    if (results.length > 0) {
        results.forEach(result => {
            const journalEntry = document.createElement("div");
            journalEntry.className = "journal-entry";
            journalEntry.innerHTML = `
                <img src="${result.image}" alt="Entry Image">
                <div>
                    <h2>${result.title}</h2>
                    <p>${result.content}</p>
                </div>
            `;
            searchResults.appendChild(journalEntry);
        });
    } else {
        const noResultItem = document.createElement("div");
        noResultItem.className = "journal-entry";
        noResultItem.textContent = "No results found.";
        searchResults.appendChild(noResultItem);
    }
}

// Memproses pencarian
function performSearch() {
    const searchQuery = searchBar.value.toLowerCase();
    const filteredResults = journalEntries.filter(entry =>
        entry.title.toLowerCase().includes(searchQuery) || entry.content.toLowerCase().includes(searchQuery)
    );
    displaySearchResults(filteredResults);
}

// Memproses pencarian ketika tombol "Enter" ditekan
searchBar.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        performSearch();
    }
});

// Memproses pencarian ketika tombol "Search" ditekan
searchButton.addEventListener("click", performSearch);
