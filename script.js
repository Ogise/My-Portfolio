document.getElementById("dark-mode-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

document.getElementById("contact-form")?.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Message sent!");
});
