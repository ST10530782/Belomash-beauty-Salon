document.addEventListener("DOMContentLoaded", function () {

    // Back to Top button
    const backToTop = document.getElementById("backToTop");

    if (backToTop) {
        backToTop.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // Enquiry Form Validation
    const enquiryForm = document.getElementById("enquiryForm");
    const enquiryMessage = document.getElementById("formMessage");

    if (enquiryForm) {
        enquiryForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (enquiryForm.checkValidity()) {
                const customerName =
                    document.getElementById("fullname").value;

                enquiryMessage.textContent =
                    "Thank you, " + customerName +
                    "! Your enquiry has been completed successfully. " +
                    "Please note that this is a demonstration form.";

                enquiryMessage.style.color = "green";
                enquiryForm.reset();
            } else {
                enquiryForm.reportValidity();
            }
        });
    }

    // Contact Form Validation
    const contactForm = document.getElementById("contactForm");
    const contactResult =
        document.getElementById("contactMessageResult");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (contactForm.checkValidity()) {
                const customerName =
                    document.getElementById("contactName").value;

                contactResult.textContent =
                    "Thank you, " + customerName +
                    "! Your message has been completed successfully. " +
                    "Please note that this is a demonstration form.";

                contactResult.style.color = "green";
                contactForm.reset();
            } else {
                contactForm.reportValidity();
            }
        });
    }

    // Gallery Image Enlargement
    const galleryImages = document.querySelectorAll(".gallery img");

    galleryImages.forEach(function (image) {
        image.style.cursor = "pointer";

        image.addEventListener("click", function () {
            window.open(image.src, "_blank");
        });
    });

});
//REFERENCE
//openAl(2026)ChatGPT
//WEDE5020_MO.docx
//Mr.Garanganga kincade