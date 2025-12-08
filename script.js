// Функції для кнопок "Купити"
document.getElementById("buy1").addEventListener("click", function() {
    alert("Ви обрали iPad Pro!");
});

document.getElementById("buy2").addEventListener("click", function() {
    alert("Ви обрали Samsung Tab S8!");
});

document.getElementById("buy3").addEventListener("click", function() {
    alert("Ви обрали Lenovo Tab P11!");
});

// Кнопка "Назад до приставок"
document.getElementById("backBtn").addEventListener("click", function() {
    window.location.href = "index.html"; // Повертаємось на головну сторінку
});
