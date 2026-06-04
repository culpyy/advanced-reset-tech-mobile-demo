const cart = [];
const FREE_SHIP_THRESHOLD = 50;

function addToCart(name, price) {
  const existing = cart.find(i => i.name === name);
  existing ? existing.qty++ : cart.push({ name, price, qty: 1 });
  renderCart();
  openCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

function renderCart() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  const countEl = document.getElementById('cartCount');
  countEl.textContent = count;
  countEl.classList.toggle('visible', count > 0);

  const bnavBadge = document.getElementById('bnavBadge');
  if (bnavBadge) {
    bnavBadge.textContent = count;
    bnavBadge.classList.toggle('visible', count > 0);
  }

  const itemsEl   = document.getElementById('cartItems');
  const footerEl  = document.getElementById('cartFooter');
  const totalEl   = document.getElementById('cartTotal');
  const labelEl   = document.getElementById('freeShipLabel');
  const fillEl    = document.getElementById('freeShipFill');

  if (cart.length === 0) {
    itemsEl.innerHTML = '<p class="cart-empty">Your cart is empty.</p>';
    footerEl.style.display = 'none';
    return;
  }

  itemsEl.innerHTML = cart.map((item, idx) => `
    <div class="cart-item">
      <div class="cart-item-name">${item.name}${item.qty > 1 ? ` <span style="color:#aaa">×${item.qty}</span>` : ''}</div>
      <div class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</div>
      <button class="cart-item-remove" onclick="removeFromCart(${idx})" aria-label="Remove">×</button>
    </div>
  `).join('');

  totalEl.textContent = `$${total.toFixed(2)}`;
  footerEl.style.display = 'block';

  const pct = Math.min((total / FREE_SHIP_THRESHOLD) * 100, 100);
  fillEl.style.width = pct + '%';

  const remaining = FREE_SHIP_THRESHOLD - total;
  labelEl.textContent = remaining > 0
    ? `Add $${remaining.toFixed(2)} more for free shipping`
    : '✓ You qualify for free shipping!';
  labelEl.style.color = remaining <= 0 ? '#22a55b' : '';
}

function openCart() {
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function toggleCart() {
  document.getElementById('cartDrawer').classList.contains('open') ? closeCart() : openCart();
}

function toggleMenu() {
  document.getElementById('mobileNav').classList.toggle('open');
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeCart(); });
