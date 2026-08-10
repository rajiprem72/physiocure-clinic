/* =====================================================
   PHYSIOCURE FLOATING CONTACT BUTTON
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const floatingContact =
        document.getElementById("floatingContact");

    const floatingContactBtn =
        document.getElementById("floatingContactBtn");


    if (!floatingContact || !floatingContactBtn) {
        return;
    }


    floatingContactBtn.addEventListener("click", function () {

        floatingContact.classList.toggle("active");


        const isOpen =
            floatingContact.classList.contains("active");


        floatingContactBtn.setAttribute(
            "aria-expanded",
            isOpen
        );


        /* Change icon */

        const icon =
            floatingContactBtn.querySelector(
                ".contact-main-icon"
            );


        if (isOpen) {

            icon.textContent = "✕";

        } else {

            icon.textContent = "💬";

        }

    });


    /* Close when clicking outside */

    document.addEventListener("click", function (event) {

        if (!floatingContact.contains(event.target)) {

            floatingContact.classList.remove("active");

            floatingContactBtn.setAttribute(
                "aria-expanded",
                "false"
            );


            const icon =
                floatingContactBtn.querySelector(
                    ".contact-main-icon"
                );

            if (icon) {
                icon.textContent = "💬";
            }

        }

    });

});
