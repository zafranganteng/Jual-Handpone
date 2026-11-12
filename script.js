const products = [
  // APPLE
  { name: "iPhone 16 Pro Max", brand: "Apple", price: 21999000, image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600" },
  { name: "iPhone 16 Pro", brand: "Apple", price: 18999000, image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600" },
  { name: "iPhone 16", brand: "Apple", price: 14999000, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600" },
  { name: "iPhone 15 Pro Max", brand: "Apple", price: 17999000, image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600" },
  { name: "iPhone 15", brand: "Apple", price: 11999000, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600" },
  { name: "iPhone 14", brand: "Apple", price: 9999000, image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600" },

  // SAMSUNG
  { name: "Samsung Galaxy S25 Ultra", brand: "Samsung", price: 20999000, image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600" },
  { name: "Samsung Galaxy S25+", brand: "Samsung", price: 16999000, image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600" },
  { name: "Samsung Galaxy S25", brand: "Samsung", price: 13999000, image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600" },
  { name: "Samsung Galaxy Z Fold6", brand: "Samsung", price: 24999000, image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600" },
  { name: "Samsung Galaxy Z Flip6", brand: "Samsung", price: 15999000, image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600" },

  // XIAOMI
  { name: "Xiaomi 15 Ultra", brand: "Xiaomi", price: 16999000, image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600" },
  { name: "Xiaomi 15", brand: "Xiaomi", price: 11999000, image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600" },
  { name: "Xiaomi 14T Pro", brand: "Xiaomi", price: 8999000, image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600" },
  { name: "Xiaomi 14T", brand: "Xiaomi", price: 6999000, image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600" },

  // REDMI
  { name: "Redmi Note 14 Pro+", brand: "Redmi", price: 5999000, image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600" },
  { name: "Redmi Note 14 Pro", brand: "Redmi", price: 4499000, image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600" },
  { name: "Redmi Note 14", brand: "Redmi", price: 2999000, image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600" },

  // POCO
  { name: "POCO F7 Pro", brand: "POCO", price: 6999000, image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600" },
  { name: "POCO X7 Pro", brand: "POCO", price: 4999000, image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600" },
  { name: "POCO M7 Pro", brand: "POCO", price: 2999000, image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600" },

  // OPPO
  { name: "OPPO Find X8 Pro", brand: "OPPO", price: 15999000, image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=600" },
  { name: "OPPO Reno13 Pro", brand: "OPPO", price: 8999000, image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=600" },
  { name: "OPPO Reno13", brand: "OPPO", price: 6999000, image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=600" },
  { name: "OPPO A5 Pro", brand: "OPPO", price: 3999000, image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=600" },

  // VIVO
  { name: "Vivo X200 Pro", brand: "Vivo", price: 16999000, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600" },
  { name: "Vivo V50", brand: "Vivo", price: 6999000, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600" },
  { name: "Vivo V40", brand: "Vivo", price: 5999000, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600" },
  { name: "Vivo Y29", brand: "Vivo", price: 2999000, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600" },

  // REALME
  { name: "Realme GT 7 Pro", brand: "Realme", price: 10999000, image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600" },
  { name: "Realme 14 Pro+", brand: "Realme", price: 6999000, image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600" },
  { name: "Realme 14 Pro", brand: "Realme", price: 4999000, image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600" },

  // GOOGLE PIXEL
  { name: "Google Pixel 9 Pro XL", brand: "Google Pixel", price: 16999000, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600" },
  { name: "Google Pixel 9 Pro", brand: "Google Pixel", price: 14999000, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600" },
  { name: "Google Pixel 9", brand: "Google Pixel", price: 11999000, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600" }
];

const productList = document.getElementById("productList");

if (productList) {
  const searchInput = document.getElementById("searchProduct");
  const categoryFilter = document.getElementById("categoryFilter");
  const sortPrice = document.getElementById("sortPrice");
  const productCount = document.getElementById("productCount");
  const noProducts = document.getElementById("noProducts");

  const formatPrice = price => new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(price);

  function displayProducts() {
    const keyword = searchInput.value.toLowerCase().trim();
    const category = categoryFilter.value;
    const sorting = sortPrice.value;

    let filtered = products.filter(product => {
      const matchesName = product.name.toLowerCase().includes(keyword);
      const matchesBrand = product.brand.toLowerCase().includes(keyword);
      const matchesCategory = category === "Semua" || product.brand === category;

      return (matchesName || matchesBrand) && matchesCategory;
    });

    if (sorting === "low") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sorting === "high") {
      filtered.sort((a, b) => b.price - a.price);
    }

    productList.innerHTML = filtered.map(product => `
      <article class="product-card">
        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
          onerror="this.src='https://placehold.co/600x400/f7f3ec/171717?text=ZAFRA+PHONE'"
        >
        <div class="product-info">
          <p class="product-brand">${product.brand}</p>
          <h3>${product.name}</h3>
          <p class="product-price">${formatPrice(product.price)}</p>
          <a
            class="buy-btn"
            href="https://wa.me/6281234567890?text=${encodeURIComponent("Halo ZAFRA PHONE, saya tertarik dengan " + product.name)}"
            target="_blank"
            rel="noopener"
          >Tanya / Beli via WhatsApp</a>
        </div>
      </article>
    `).join("");

    productCount.textContent = `Menampilkan ${filtered.length} dari ${products.length} produk`;
    noProducts.hidden = filtered.length !== 0;
  }

  searchInput.addEventListener("input", displayProducts);
  categoryFilter.addEventListener("change", displayProducts);
  sortPrice.addEventListener("change", displayProducts);

  const params = new URLSearchParams(window.location.search);
  const requestedCategory = params.get("category");

  if (requestedCategory) {
    const available = [...categoryFilter.options].some(
      option => option.value === requestedCategory
    );
    if (available) categoryFilter.value = requestedCategory;
  }

  displayProducts();
}
