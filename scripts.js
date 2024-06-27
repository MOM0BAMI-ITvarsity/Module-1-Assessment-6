document.addEventListener('DOMContentLoaded', function() {
    const productDescription = document.querySelector('.product-description p');
    const showMoreContent = document.getElementById('showMoreContent');
    const showMoreBtn = document.getElementById('showMoreBtn');
    const maxChars = 500;

    function truncateText() {
        const content = productDescription.innerHTML;
        if (content.length > maxChars) {
            const truncatedContent = content.substring(0, maxChars);
            const remainingContent = content.substring(maxChars);
            productDescription.innerHTML = truncatedContent;
            showMoreContent.innerHTML = remainingContent;
            showMoreBtn.innerHTML = 'Show More';
        }
    }

    truncateText();

    showMoreBtn.addEventListener('click', function(e) {
        e.preventDefault();

        if (showMoreContent.style.display === 'none' || showMoreContent.style.display === '') {
            showMoreContent.style.display = 'inline';
            showMoreBtn.innerHTML = 'Show Less';
        } else {
            showMoreContent.style.display = 'none';
            showMoreBtn.innerHTML = 'Show More';
        }
    });
});



