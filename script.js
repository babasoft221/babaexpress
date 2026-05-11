// Données des produits
const products = [
    { id: 1, name: 'iPhone 15 Pro', price: 1199, image: '📱', category: 'Smartphone', rating: 4.8 },
    { id: 2, name: 'MacBook Air M2', price: 1499, image: '💻', category: 'Ordinateur', rating: 4.9, new: true },
    { id: 3, name: 'AirPods Pro 2', price: 279, image: '🎧', category: 'Audio', rating: 4.7 },
    { id: 4, name: 'iPad Pro', price: 999, image: '📱', category: 'Tablette', rating: 4.6 },
    { id: 5, name: 'Apple Watch Ultra', price: 899, image: '⌚', category: 'Montre', rating: 4.8, new: true },
    { id: 6, name: 'Chargeur 65W', price: 59, image: '🔌', category: 'Accessoire', rating: 4.5 }
];

let cart = [];

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    updateCartCount();
    
    // Cart modal
    document.getElementById('cartIcon').addEventListener('click', openCart);
    document.getElementById('closeCart').addEventListener('click', closeCart);
    window.addEventListener('click', function(e) {
        const modal = document.getElementById('cartModal');
        if (e.target === modal) closeCart();
    });
    
    // Checkout
    document.querySelector('.checkout-btn').addEventListener('click', checkout);
    
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

function renderProducts() {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = products.map(product => `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image ${product.new ? 'new' : ''}">
                ${product.image}
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="product-rating">
                    ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}
                    <span style="font-size: 0.9rem; color: #6b7280; margin-left: 0.5rem;">(${product.rating})</span>
                </div>
                <div class="product-price">${product.price.toLocaleString()}€</div>
                <button class="product-add" onclick="addToCart(${product.id})">
                    <i class="fas fa-cart-plus"></i> Ajouter au panier
                </button>
            </div>
        </div>
    `).join('');
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartCount();
    updateCartModal();
    
    // Animation feedback
    const button = event.target;
    button.innerHTML = '<i class="fas fa-check"></i> Ajouté !';
    button.style.background = '#10b981';
    setTimeout(() => {
        button.innerHTML = '<i class="fas fa-cart-plus"></i> Ajouter au panier';
        button.style.background = '';
    }, 1500);
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

function openCart() {
    updateCartModal();
    document.getElementById('cartModal').style.display = 'block';
}

function closeCart() {
    document.getElementById('cartModal').style.display = 'none';
}

function updateCartModal() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #6b7280;">Votre panier est vide</p>';
        cartTotal.textContent = '0€';
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">${item.image}</div>
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>${item.price.toLocaleString()}€ x 
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </p>
                <p><strong>${(item.price * item.quantity).toLocaleString()}€</strong></p>
            </div>
            <button onclick="removeFromCart(${item.id})" style="background: #ef4444; color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer;">Suppr</button>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `${total.toLocaleString()}€`;
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== productId);
        }
        updateCartCount();
        updateCartModal();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    updateCartModal();
}

function checkout() {
    if (cart.length === 0) {
        alert('Votre panier est vide !');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`Merci pour votre commande !\nTotal: ${total.toLocaleString()}€\nLivraison prévue sous 24h 🚚`);
    
    // Reset cart
    cart = [];
    updateCartCount();
    updateCartModal();
    closeCart();
}

function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// Animations au scroll
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});