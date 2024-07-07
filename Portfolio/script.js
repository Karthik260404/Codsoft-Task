// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function() {
    // Select the form element
    const form = document.querySelector("form");

    // Add an event listener for form submission
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Fetch all input values
        const fullName = form.querySelector('input[type="text"][placeholder="Full Name..."]').value;
        const email = form.querySelector('input[type="text"][placeholder="Full Email Id..."]').value;
        const mobile = form.querySelector('input[type="text"][placeholder="Full Mobile No..."]').value;
        const address = form.querySelector('textarea').value;

        // You can perform validation here if needed

        // Example: Log the values to console (you can replace this with your desired functionality)
        console.log("Full Name:", fullName);
        console.log("Email:", email);
        console.log("Mobile No:", mobile);
        console.log("Address:", address);

        // Optionally, you can clear the form fields after submission
        form.reset();
    });
});
