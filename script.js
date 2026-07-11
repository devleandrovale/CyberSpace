document.addEventListener('DOMContentLoaded', () => {
    
    const elementsToReveal = document.querySelectorAll('.reveal');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    elementsToReveal.forEach(element => {
        revealOnScroll.observe(element);
    });

    let cart = [];
    const cartCountEl = document.getElementById('cart-count');
    const buyButtons = document.querySelectorAll('.btn-buy');
    const toastContainer = document.getElementById('toast-container');
    
    const cartBtn = document.getElementById('cart-btn');
    const closeCartBtn = document.getElementById('close-cart');
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalPriceEl = document.getElementById('cart-total-price');

    function toggleCart() {
        cartSidebar.classList.toggle('open');
        cartOverlay.classList.toggle('open');
    }

    cartBtn.addEventListener('click', toggleCart);
    closeCartBtn.addEventListener('click', toggleCart);
    cartOverlay.addEventListener('click', toggleCart);

    function updateCartUI() {
        const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
        cartCountEl.textContent = totalItems;

        cartItemsContainer.innerHTML = '';
        let totalPrice = 0;

        cart.forEach(item => {
            totalPrice += item.price * item.quantity;
            const itemEl = document.createElement('div');
            itemEl.classList.add('cart-item');
            itemEl.innerHTML = `
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <span>R$ ${item.price.toFixed(2)}</span>
                </div>
                <div class="cart-item-qty">Qtd: ${item.quantity}</div>
            `;
            cartItemsContainer.appendChild(itemEl);
        });

        cartTotalPriceEl.textContent = `R$ ${totalPrice.toFixed(2)}`;
    }

    function showToast(productName) {
        const toast = document.createElement('div');
        toast.classList.add('toast');
        toast.textContent = `${productName} adicionado ao carrinho!`;
        
        toastContainer.appendChild(toast);
        
        setTimeout(() => {
            toast.remove();
        }, 3000);
    }

    buyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const card = e.target.closest('.product-card');
            const id = card.getAttribute('data-id');
            const name = card.querySelector('.product-name').textContent;
            const price = parseFloat(card.querySelector('.price').getAttribute('data-value'));

            const existingItem = cart.find(item => item.id === id);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ id, name, price, quantity: 1 });
            }

            updateCartUI();
            showToast(name);
        });
    });

    document.getElementById('checkout-btn').addEventListener('click', () => {
        if (cart.length === 0) return;
        alert('Simulação de compra finalizada com sucesso!');
        cart = [];
        updateCartUI();
        toggleCart();
    });
});