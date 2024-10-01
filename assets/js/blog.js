document.addEventListener("DOMContentLoaded", function () {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const categoryCards = document.querySelectorAll('.category-card');
    const itemsPerPage = 3; // Number of items per page
    let currentPage = 1;
    let currentCategory = 'all';
    let totalPages;

    // Function to calculate total pages
    function calculateTotalPages() {
        const visibleCards = Array.from(categoryCards).filter(card => {
            const cardCategory = card.classList.contains(currentCategory) || currentCategory === 'all';
            return cardCategory;
        });
        totalPages = Math.ceil(visibleCards.length / itemsPerPage);
    }

    // Function to show items for a specific page and category
    function showPage(page) {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        let visibleCards = 0;

        categoryCards.forEach((card, index) => {
            const cardCategory = card.classList.contains(currentCategory) || currentCategory === 'all';
            if (cardCategory) {
                if (visibleCards >= startIndex && visibleCards < endIndex) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
                visibleCards++;
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Function to handle category button click
    function handleCategoryButtonClick(categoryButton) {
        categoryButtons.forEach(button => {
            button.classList.remove('cat-btn-active');
        });
        categoryButton.classList.add('cat-btn-active');
        const category = categoryButton.getAttribute('data-category');
        if (category !== currentCategory) {
            currentCategory = category;
            calculateTotalPages();
            showPage(1);
            renderPagination();
        }
    }

    // Add event listener to each category button
    categoryButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default anchor behavior
            handleCategoryButtonClick(this);
        });
    });

    // Programmatically trigger a click event on the "All" category button
    const allCategoryButton = document.querySelector('.category-btn[data-category="all"]');
    handleCategoryButtonClick(allCategoryButton);

    // Pagination
    const paginationContainer = document.querySelector('.pagination-container');

    // Function to render pagination links
    function renderPagination() {
        const paginationList = paginationContainer.querySelector('.pagination');
        paginationList.innerHTML = ""; // Clear existing pagination links

        for (let i = 1; i <= totalPages; i++) {
            const pageLink = document.createElement('a');
            pageLink.href = "#";
            pageLink.classList.add('page-link');
            pageLink.textContent = i;
            pageLink.setAttribute('data-page', i);
            if (i === currentPage) {
                pageLink.classList.add('active');
                pageLink.classList.add('pagination-bg');
            }
            const listItem = document.createElement('li');
            listItem.classList.add('page-item');
            listItem.appendChild(pageLink);
            paginationList.appendChild(listItem);
        }
    }

    // Add event listener to each pagination link
    paginationContainer.addEventListener('click', function(event) {
        const target = event.target;
        if (target.classList.contains('page-link')) {
            event.preventDefault();
            const page = parseInt(target.getAttribute('data-page'));
            if (page !== currentPage) {
                currentPage = page;
                showPage(currentPage);
                renderPagination();
            }
        }
    });

    // Show initial page
    calculateTotalPages();
    renderPagination();
    showPage(currentPage);
});


