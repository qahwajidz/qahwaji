let cart = [];

const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

const categoryLabels = {
  coffee: "Café",
  farm: "Produits de la ferme",
  transform: "Transformations"
};

const categoryOrder = ["coffee", "farm", "transform"];

function renderProducts(category = "all") {
  productList.innerHTML = "";

  const categoriesToRender =
    category === "all" ? categoryOrder : [category];

  categoriesToRender.forEach(cat => {
    const items = products.filter(p => p.category === cat);

    if (items.length === 0) return;

    // Section header
    const sectionHeader = document.createElement("h2");
    sectionHeader.className = "section-title";
    sectionHeader.textContent = categoryLabels[cat];
    productList.appendChild(sectionHeader);

    // Product grid wrapper
    const sectionGrid = document.createElement("div");
    sectionGrid.className = "section-grid";

    items.forEach(p => {
      const div = document.createElement("div");
      div.className = "product";
      div.innerHTML = `
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p class="description">${p.description || ""}</p>
        <p class="price">${p.price} DA</p>
        <span class="badge ${p.available ? "available" : "unavailable"}">
          ${p.available ? "Disponible" : "Bientôt disponible"}
        </span>
        ${
          p.available
            ? `<button onclick="addToCart(${p.id})">Ajouter au panier</button>`
            : ""
        }
      `;
      sectionGrid.appendChild(div);
    });

    productList.appendChild(sectionGrid);
  });
}

function filterCategory(cat) {
  renderProducts(cat);
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  const item = cart.find(i => i.id === id);

  if (item) item.qty++;
  else cart.push({ ...product, qty: 1 });

  updateCart();
}

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(i => {
    total += i.price * i.qty;
    const li = document.createElement("li");
    li.textContent = `${i.name} x${i.qty}`;
    cartItems.appendChild(li);
  });

  cartTotal.textContent = `Total : ${total} DA`;
}

function checkout() {
  let message = "Assalamu aleykoum, je souhaite commander :%0A%0A";
  let total = 0;

  cart.forEach(i => {
    message += `• ${i.name} x${i.qty}%0A`;
    total += i.price * i.qty;
  });

  message += `%0ATotal : ${total} DA%0A%0A`;
  message += "Nom : %0ATéléphone : %0ACommune : ";

  window.open(
    `https://wa.me/213795501981?text=${message}`,
    "_blank"
  );
}

renderProducts();

function toggleAbout() {
  const about = document.getElementById("about");
  about.classList.toggle("hidden");

  // scroll to it when opened
  if (!about.classList.contains("hidden")) {
    about.scrollIntoView({ behavior: "smooth" });
  }
}

