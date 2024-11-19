function openImage(imageElement) {
    var imgSrc = imageElement.src;
    var modalImage = document.getElementById('modalImage');
    modalImage.src = imgSrc;
}

document.getElementById("downloadResume").addEventListener("click", function(e) {
    e.preventDefault();  // Prevent the default anchor tag behavior

    // Create a new link element
    const link = document.createElement("a");
    link.href = "asserts\GRANDHI VANITHA RESUMEE.pdf";  // Ensure the file path is correct
    link.download = "GRANDHI VANITHA RESUMEE.pdf";  // This triggers the download

    // Append the link to the document body (sometimes required for download to work in some browsers)
    document.body.appendChild(link);
    link.click();  // Programmatically click the link to start the download
    document.body.removeChild(link);  // Remove the link after triggering the download
});


function openModal(image) {
    var modal = new bootstrap.Modal(document.getElementById('imageModal'));
    var modalImg = document.getElementById("modalImage");
    modalImg.src = image.src;
    image.classList.add('clicked');
    modal.show();
    document.getElementById("imageModal").addEventListener('hidden.bs.modal', function() {
        image.classList.remove('clicked');
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const cardImage = document.querySelector(".card-img");
    const siteName = document.querySelector(".SiteName");
  
    cardImage.addEventListener("click", function () {
      siteName.style.opacity = siteName.style.opacity === "1" ? "0" : "1";
      siteName.style.visibility = siteName.style.visibility === "visible" ? "hidden" : "visible";
    });
  });
  


//   filter

document.querySelectorAll('.works button').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.textContent.trim();
        document.querySelectorAll('.card-wrapper').forEach(card => {
            card.style.display = category === 'All' || card.classList.contains(category.toLowerCase()) ? 'block' : 'none';
        });
    });
});
