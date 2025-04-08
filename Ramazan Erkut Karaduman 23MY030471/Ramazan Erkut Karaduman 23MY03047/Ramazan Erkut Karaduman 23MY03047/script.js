function showTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    var time = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock").innerText = time;
    setTimeout(showTime, 1000); // 1 saniyede bir güncelle
}
showTime(); // Fonksiyonu çağır

function searchProducts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const products = document.querySelectorAll('.box');

    products.forEach(product => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        if (productName.includes(searchInput)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}


document.addEventListener("DOMContentLoaded", function() {
    console.log("Sayfa yüklendi.");

    const select = document.querySelector('#categoryFilter');
    const products = document.querySelectorAll('.products .box');

    select.addEventListener('change', (event) => {
        const selected = event.target.value;

        products.forEach(product => {
            const category = product.dataset.category;

            if (selected !== 'All Categories' && category !== selected) {
                product.classList.add('hidden');
            } else {
                product.classList.remove('hidden');
            }
        });
    });
});

function showDate() {
    var date = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var day = date.getDate();
    var month = months[date.getMonth()];
    var year = date.getFullYear();
    var fullDate = day + " " + month + " " + year;
    document.getElementById("date").innerText = fullDate;
}
showDate(); // Tarihi göster



var selectedProducts = []; // Seçilen ürünleri saklamak için bir dizi

// Compare düğmesine tıklandığında çağrılacak işlev
function compareProduct(name, price) {
    var product = { name: name, price: price }; // Seçilen ürünü temsil eden bir nesne

    // Eğer seçilen ürün zaten listeye eklenmişse, listeden çıkar
    var index = selectedProducts.findIndex(function(item) {
        return item.name === product.name && item.price === product.price;
    });
    if (index !== -1) {
        selectedProducts.splice(index, 1);
    } else { // Eğer seçilen ürün listede yoksa, listeye ekle
        selectedProducts.push(product);
    }
}

// Seçilen ürünleri karşılaştırmak için işlev
function compareProducts() {
    if (selectedProducts.length < 2) {
        alert("Please select at least two products to compare.");
        return;
    }

    var minPrice = Number.MAX_VALUE;
    var maxPrice = Number.MIN_VALUE;

    // En düşük ve en yüksek fiyatları bul
    selectedProducts.forEach(function(product) {
        minPrice = Math.min(minPrice, product.price);
        maxPrice = Math.max(maxPrice, product.price);
    });

    // Karşılaştırmayı göster
    alert("Minimum Price: $" + minPrice + "\nMaximum Price: $" + maxPrice);
    // Bildirim kutusu oluşturma
    var notification = document.createElement("div");
    notification.className = "notification";
    notification.textContent = "Selected products have been successfully compared!";
    document.body.appendChild(notification);

    // Belirli bir süre sonra bildirimi kaldırma
    setTimeout(function() {
        notification.style.opacity = "0";
        setTimeout(function() {
            notification.parentNode.removeChild(notification);
        }, 600); // Bildirimin kaybolma animasyonu süresi
    }, 3000); // Bildirimin ekranda kalma süresi (milisaniye cinsinden)
}
let cartItemCount = 0; // Sepet öğe sayısını takip etmek için bir değişken oluşturuyoruz

function addToCart() {
    cartItemCount++; // Her "Add to Cart" tıklamasında öğe sayısını artırıyoruz
    updateCartIcon(); // Sepet ikonunu güncelliyoruz
    showNotification(); // Bildirim gösteriyoruz
}

function updateCartIcon() {
    const cartIcon = document.querySelector('.cart-icon');
    cartIcon.innerHTML = `<i class='bx bxs-cart'></i> (${cartItemCount})`; // Sepet ikonunu güncelliyoruz
}

function showNotification() {
    var notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = 'Product Added to Cart';
    document.body.appendChild(notification);

    // Belirli bir süre sonra bildirimi kaldır
    setTimeout(function() {
        notification.classList.add('hide');
        updateCartIcon(); // Bildirim kapatıldığında sepet ikonunu güncelleyelim
    }, 2000); // 2 saniye sonra bildirimi kaldır
}


// addToCart() fonksiyonuna ek olarak sepet ikonunu güncelleyen updateCartIcon() fonksiyonunu çağırın
function updateCartIcon() {
    // Sepete eklenen öğe sayısını alın
    var cartItemCountElement = document.querySelector('.cart-icon'); // Sepet ikonunu temsil eden element
    // Sepet ikonunu güncelleyin
    if (cartItemCountElement) {
        cartItemCountElement.textContent = cartItemCount; // Sepet ikonunun üzerindeki metni güncelleyin
    }
}
function addToCart() {
    cartItemCount++; // Sepete bir öğe eklediğinizde öğe sayısını artırın
    updateCartIcon(); // Sepet ikonunu güncelleyin
    showNotification(); // Bildirim gösterin
}
























