document.getElementById('back-to-motherboard').addEventListener('click', function () {
    document.body.classList.remove('fade-in');
    document.body.classList.add('fade-out');

    setTimeout(() => {
        window.location.href = "index.html";
    }, 500);
});