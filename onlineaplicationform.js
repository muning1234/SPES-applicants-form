// JavaScript for form validation and redirection
function validateForm() {
    // Validate passport photo file size (max 2MB)
    const passportPhoto = document.getElementById('passportPhoto');
    const passportPhotoFile = passportPhoto.files[0];
    if (passportPhotoFile && passportPhotoFile.size > 2 * 1024 * 1024) {
        alert("Passport photo file size exceeds the 2MB limit.");
        return false;
    }

    // Validate document file size (max 5MB)
    const documents = document.getElementById('documents');
    const documentFiles = documents.files;
    for (let i = 0; i < documentFiles.length; i++) {
        if (documentFiles[i].size > 5 * 1024 * 1024) {
            alert("One or more of your documents exceed the 5MB file size limit.");
            return false;
        }
    }

    // Validate contact number (must be in the proper format)
    const contact = document.getElementById('contact').value;
    const contactPattern = /^[0-9]{10}$/; // 10-digit number
    if (!contactPattern.test(contact)) {
        alert("Please enter a valid 10-digit contact number.");
        return false;
    }

    // Validate email address format
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // If all validations pass, redirect to the employment program dashboard
    window.location.href = "https://your-dashboard-url.com"; // Replace with your dashboard URL

    return true;  // Ensure the form submits (redirect happens after validation)
}
