  // Function to toggle between displaying and hiding full details
  function toggleDetails() {
    var itemDetails = document.getElementById("itemDetails");
    var fullDetails = document.getElementById("fullDetails");
    var readMoreBtn = document.getElementById("readMoreBtn");

    // Toggle the visibility of full details
    fullDetails.style.display = (fullDetails.style.display === 'none') ? 'block' : 'none';

    // Toggle the button text
    readMoreBtn.innerHTML = (fullDetails.style.display === 'none') ? 'Read more' : 'Read less';

    // Adjust the maximum height of item details container for smooth transition
    itemDetails.style.maxHeight = (itemDetails.style.maxHeight === '100px') ? fullDetails.clientHeight + "px" : "100px";
  }

  // Show the "Read more" button after the page has loaded
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("readMoreBtn").style.display = "block";
  });