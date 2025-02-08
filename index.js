document.getElementById('search').addEventListener('input', function () {
    let query = this.value.toLowerCase(); // Get the search query and convert it to lowercase
    let paragraphs = document.querySelectorAll('p'); // Select all paragraph elements

    paragraphs.forEach(function (paragraph) {
        let text = paragraph.textContent || paragraph.innerText; // Get the text content of the paragraph
        if (text.toLowerCase().includes(query)) {
            paragraph.style.display = ''; // Show paragraph if it matches the query
        } else {
            paragraph.style.display = 'none'; // Hide paragraph if it doesn't match the query
        }
    });
});