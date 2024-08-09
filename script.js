document.addEventListener('DOMContentLoaded', function () {
    // Adicione qualquer código JavaScript adicional aqui
});
document.addEventListener('DOMContentLoaded', function () {
    const searchBar = document.getElementById('search-bar');
    const headings = document.querySelectorAll('h3');
    const sections = document.querySelectorAll('section');

    searchBar.addEventListener('keyup', function () {
        const searchTerm = searchBar.value.toLowerCase();

        headings.forEach((heading, index) => {
            const section = sections[index];
            if (heading.textContent.toLowerCase().includes(searchTerm)) {
                section.style.display = '';
            } else {
                section.style.display = 'none';
            }
        });
    });
});