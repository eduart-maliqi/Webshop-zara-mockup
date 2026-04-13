// ZARA Mockup - Warenkorb mit Web Storage API
(function () {
    const STORAGE_KEY = "zara_cart";

    function readCart() {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
        } catch (e) {
            return [];
        }
    }

    function writeCart(cart) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
        updateCartBadge();
    }

    function totalCount(cart) {
        return cart.reduce((sum, item) => sum + item.quantity, 0);
    }

    function totalPrice(cart) {
        return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }

    function updateCartBadge() {
        const count = totalCount(readCart());
        document.querySelectorAll("[data-cart-count]").forEach(el => {
            el.textContent = count;
        });
    }

    function addItem(item) {
        const cart = readCart();
        const existing = cart.find(
            i => i.id === item.id && i.size === item.size
        );
        if (existing) {
            existing.quantity += item.quantity;
        } else {
            cart.push(item);
        }
        writeCart(cart);
    }

    function removeItem(id, size) {
        const cart = readCart().filter(
            i => !(i.id === id && i.size === size)
        );
        writeCart(cart);
        renderCartPage();
    }

    function updateQuantity(id, size, quantity) {
        const cart = readCart();
        const item = cart.find(i => i.id === id && i.size === size);
        if (item) {
            item.quantity = Math.max(1, quantity);
            writeCart(cart);
            renderCartPage();
        }
    }

    function clearCart() {
        writeCart([]);
        renderCartPage();
    }

    // Add-to-cart handler for product detail pages
    function initAddToCart() {
        const form = document.querySelector("[data-add-to-cart]");
        if (!form) return;

        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const size = form.querySelector("[name='size']").value;
            const quantity = parseInt(
                form.querySelector("[name='quantity']").value,
                10
            );
            if (!size) return;

            const item = {
                id: form.dataset.productId,
                name: form.dataset.productName,
                price: parseFloat(form.dataset.productPrice),
                image: form.dataset.productImage,
                url: form.dataset.productUrl,
                size: size,
                quantity: quantity
            };
            addItem(item);
        });
    }

    // Cart page rendering
    function renderCartPage() {
        const container = document.querySelector("[data-cart-list]");
        if (!container) return;

        const cart = readCart();
        const emptyMsg = document.querySelector("[data-cart-empty]");
        const summary = document.querySelector("[data-cart-summary]");
        const orderForm = document.querySelector("[data-cart-order-form]");

        if (cart.length === 0) {
            container.innerHTML = "";
            if (emptyMsg) emptyMsg.style.display = "block";
            if (summary) summary.style.display = "none";
            if (orderForm) orderForm.style.display = "none";
            return;
        }

        if (emptyMsg) emptyMsg.style.display = "none";
        if (summary) summary.style.display = "block";
        if (orderForm) orderForm.style.display = "block";

        const artNr = id => String(id).padStart(10, "0");

        container.innerHTML = cart
            .map(
                item => `
            <article class="cart-item">
                <a href="${item.url}" class="cart-item__image-wrap">
                    <img src="${item.image}" alt="${item.name}" class="cart-item__image">
                </a>
                <div class="cart-item__info">
                    <p class="cart-item__brand">ZARA MOCKUP SELECTION</p>
                    <a href="${item.url}" class="cart-item__name">${item.name}</a>
                    <p class="cart-item__price-top">CHF ${item.price.toFixed(2)}</p>
                    <dl class="cart-item__specs">
                        <dt>Art.-Nr.:</dt><dd>${artNr(item.id)}</dd>
                        <dt>Farbe:</dt><dd>Wie abgebildet</dd>
                        <dt>Grösse:</dt><dd>${item.size}</dd>
                        <dt>Menge:</dt><dd>${item.quantity}</dd>
                        <dt>Gesamtsumme:</dt><dd><strong>CHF ${(item.price * item.quantity).toFixed(2)}</strong></dd>
                    </dl>
                    <div class="cart-item__controls">
                        <button type="button" class="cart-item__icon-btn" aria-label="Artikel entfernen"
                            data-remove-id="${item.id}" data-remove-size="${item.size}">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/>
                                <line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/>
                            </svg>
                        </button>
                        <div class="cart-item__qty-group">
                            <button type="button" class="cart-item__qty-btn" aria-label="Weniger"
                                data-qty-minus data-qty-id="${item.id}" data-qty-size="${item.size}">−</button>
                            <span class="cart-item__qty-value">${item.quantity}</span>
                            <button type="button" class="cart-item__qty-btn" aria-label="Mehr"
                                data-qty-plus data-qty-id="${item.id}" data-qty-size="${item.size}">+</button>
                        </div>
                    </div>
                </div>
            </article>
        `
            )
            .join("");

        const subtotal = totalPrice(cart);
        const shipping = subtotal > 0 ? 2.45 : 0;
        const total = subtotal + shipping;

        const subEl = document.querySelector("[data-cart-subtotal]");
        if (subEl) subEl.textContent = "CHF " + subtotal.toFixed(2);
        const shipEl = document.querySelector("[data-cart-shipping]");
        if (shipEl) shipEl.textContent = "CHF " + shipping.toFixed(2);
        const totalEl = document.querySelector("[data-cart-total]");
        if (totalEl) totalEl.textContent = "CHF " + total.toFixed(2);

        const hiddenEl = document.querySelector("[data-cart-hidden]");
        if (hiddenEl) {
            hiddenEl.value = cart
                .map(
                    i =>
                        `${i.name} (Grösse ${i.size}) x${i.quantity} = CHF ${(
                            i.price * i.quantity
                        ).toFixed(2)}`
                )
                .join("\n") + `\n\nTotal: CHF ${totalPrice(cart).toFixed(2)}`;
        }

        container.querySelectorAll("[data-remove-id]").forEach(btn => {
            btn.addEventListener("click", () => {
                removeItem(btn.dataset.removeId, btn.dataset.removeSize);
            });
        });
        container.querySelectorAll("[data-qty-plus]").forEach(btn => {
            btn.addEventListener("click", () => {
                const current = readCart().find(
                    i => i.id === btn.dataset.qtyId && i.size === btn.dataset.qtySize
                );
                if (current) updateQuantity(btn.dataset.qtyId, btn.dataset.qtySize, current.quantity + 1);
            });
        });
        container.querySelectorAll("[data-qty-minus]").forEach(btn => {
            btn.addEventListener("click", () => {
                const current = readCart().find(
                    i => i.id === btn.dataset.qtyId && i.size === btn.dataset.qtySize
                );
                if (current && current.quantity > 1) {
                    updateQuantity(btn.dataset.qtyId, btn.dataset.qtySize, current.quantity - 1);
                }
            });
        });
    }

    function initClearButton() {
        const btn = document.querySelector("[data-cart-clear]");
        if (btn) btn.addEventListener("click", clearCart);
    }

    document.addEventListener("DOMContentLoaded", function () {
        updateCartBadge();
        initAddToCart();
        renderCartPage();
        initClearButton();
    });
})();
