function openForm(packageName) {
    alert("Заявка на пакет: " + packageName);
}

document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    const data = new FormData(this);

    fetch("https://formspree.io/f/your-id", {
        method: "POST",
        body: data
    });

    alert("Заявка отправлена!");
});
