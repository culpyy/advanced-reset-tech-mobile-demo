const cart = [];
const SHIP_MIN = 50;

function addToCart(name, price) {
  const existing = cart.find(i => i.name === name);
  existing ? existing.qty++ : cart.push({ name, price, qty: 1 });
  renderCart();
  openCart();
}

function removeFromCart(i) {
  cart.splice(i, 1);
  renderCart();
}

function renderCart() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  const countEl = document.getElementById('cartCount');
  countEl.textContent = count;
  countEl.classList.toggle('visible', count > 0);

  const body   = document.getElementById('cartBody');
  const foot   = document.getElementById('cartFoot');
  const totalEl= document.getElementById('cartTotal');
  const label  = document.getElementById('shipLabel');
  const fill   = document.getElementById('shipFill');

  if (!cart.length) {
    body.innerHTML = '<p class="cart-empty">Your cart is empty.</p>';
    foot.style.display = 'none';
    return;
  }

  body.innerHTML = cart.map((item, idx) => `
    <div class="cart-line">
      <div class="cart-line-name">${item.name}${item.qty > 1 ? ` ×${item.qty}` : ''}</div>
      <div class="cart-line-price">$${(item.price * item.qty).toFixed(2)}</div>
      <button class="cart-line-remove" onclick="removeFromCart(${idx})">×</button>
    </div>
  `).join('');

  totalEl.textContent = `$${total.toFixed(2)}`;
  foot.style.display = 'block';

  const pct = Math.min((total / SHIP_MIN) * 100, 100);
  fill.style.width = pct + '%';
  const rem = SHIP_MIN - total;
  label.textContent = rem > 0 ? `Add $${rem.toFixed(2)} for free shipping` : '✓ You qualify for free shipping!';
  label.style.color = rem <= 0 ? '#16a34a' : '';
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

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeCart(); });
