
// Select all rating buttons and the submit button
const ratingButtons = document.querySelectorAll('.nums button');
const submitBtn = document.getElementById('submit');
let selectedRating = null;

// Add click event to each rating button
ratingButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove 'selected' class from all buttons
        ratingButtons.forEach(b => b.classList.remove('selected'));
        // Add 'selected' class to clicked button
        this.classList.add('selected');
        // Save selected rating
        selectedRating = this.textContent;
    });
});

// On submit, you can use selectedRating
submitBtn.addEventListener('click', function() {
    if(selectedRating) {
        // Hide container1 and show container2
        document.querySelector('.container').style.display = 'none';
        document.querySelector('.container2').style.display = 'block';
        // Set the selected rating in the span inside container2
        const resultSpan = document.getElementById('result-rating');
        if(resultSpan) {
            resultSpan.textContent = selectedRating;
        }
    } else {
        alert('Please select a rating before submitting.');
    }
});
