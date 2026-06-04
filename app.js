// Prevent iOS refresh jumping to hash anchor — must run before DOM is ready
if (location.hash) history.replaceState(null, '', location.pathname);
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
window.addEventListener('load', () => window.scrollTo(0, 0));

// Smooth scroll all anchor links without writing hash to URL
document.addEventListener('click', e => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  const target = document.querySelector(link.getAttribute('href'));
  if (!target) return;
  e.preventDefault();
  target.scrollIntoView({ behavior: 'smooth' });
});

// ─── PRODUCT CARD CLICKS ────────────────────────────────────
document.addEventListener('click', e => {
  const card = e.target.closest('.product-card[data-url]');
  if (!card) return;
  if (e.target.closest('.btn-add')) return;
  window.open(card.dataset.url, '_blank');
});

// ─── CART ───────────────────────────────────────────────────
const cart = [];
const SHIP_MIN = 50;

function sanitize(str) {
  const div = document.createElement('div');
  div.textContent = String(str);
  return div.innerHTML;
}

function addToCart(name, price) {
  if (typeof price !== 'number' || price < 0 || !name) return;
  const existing = cart.find(i => i.name === name);
  existing ? existing.qty++ : cart.push({ name, price, qty: 1 });
  renderCart();
  openCart();
}

function removeFromCart(i) {
  if (i < 0 || i >= cart.length) return;
  cart.splice(i, 1);
  renderCart();
}

function renderCart() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  const countEl = document.getElementById('cartCount');
  countEl.textContent = count;
  countEl.classList.toggle('visible', count > 0);

  const body    = document.getElementById('cartBody');
  const foot    = document.getElementById('cartFoot');
  const totalEl = document.getElementById('cartTotal');
  const label   = document.getElementById('shipLabel');
  const fill    = document.getElementById('shipFill');

  if (!cart.length) {
    body.innerHTML = '<p class="cart-empty">Your cart is empty.</p>';
    foot.style.display = 'none';
    return;
  }

  body.innerHTML = cart.map((item, idx) => `
    <div class="cart-line">
      <div class="cart-line-name">${sanitize(item.name)}${item.qty > 1 ? ` <span style="color:#aaa">×${item.qty}</span>` : ''}</div>
      <div class="cart-line-price">$${(item.price * item.qty).toFixed(2)}</div>
      <button class="cart-line-remove" onclick="removeFromCart(${idx})" aria-label="Remove item">×</button>
    </div>
  `).join('');

  totalEl.textContent = `$${total.toFixed(2)}`;
  foot.style.display = 'block';

  const pct = Math.min((total / SHIP_MIN) * 100, 100);
  fill.style.width = pct + '%';
  const rem = SHIP_MIN - total;
  label.textContent = rem > 0
    ? `Add $${rem.toFixed(2)} for free shipping`
    : '✓ Free shipping applied!';
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

function handleCheckout() {
  if (!cart.length) return;
  window.location.href = 'https://advancedresettech.com/cart/';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeCart(); });
