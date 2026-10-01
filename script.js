'use strict';

const products = [
  {id:1,name:'iPhone 15 Pro',price:750000,image:'iphone15pro.jpeg',category:'Smartphone',rating:4.8,new:true},
  {id:2,name:'MacBook Air M2',price:950000,image:'https://media.power-cdn.net/images/h-45e5d5b35ed60f9eab952fa55ceda4db/products/3746370/3746370_3_1200x1200_w_g.jpg',category:'Ordinateur',rating:4.9,new:true},
  {id:3,name:'AirPods Pro 2',price:175000,image:'https://s3-ap-southeast-2.amazonaws.com/wc-prod-pim/JPEG_1000x1000/APAIRPRO2C_B_airpods_pro_2nd_generation_with_magsafe_case_usb_c_.jpg',category:'Audio',rating:4.7},
  {id:4,name:'iPad Pro',price:625000,image:'https://bizweb.dktcdn.net/100/459/953/products/ipad-pro-m2-silver-ede8804e-d454-4b10-b063-a5ca7a247b3d.jpg?v=1723807563663',category:'Tablette',rating:4.6},
  {id:5,name:'Apple Watch Ultra',price:560000,image:'https://static1.nordic.pictures/37745099-thickbox_default/apple-watch-ultra-gps-cellular-49mm-alpine-loop-s-orange-mnhh3el-a.jpg',category:'Montre',rating:4.8,new:true},
  {id:6,name:'Chargeur 65W',price:37000,image:'https://pecsipc.hu/files/uploads/2025/02/ugreen-nexode-s-65w-3-port-gan-fast-charger-eu-grey_1.jpg',category:'Accessoire',rating:4.5},
  {id:7,name:'Samsung Galaxy S24',price:620000,image:'https://media.gadgetbytenepal.com/2024/01/Samsung-Galaxy-S24-Marble-Grey.jpg',category:'Smartphone',rating:4.6,new:true},
  {id:8,name:'Samsung Galaxy A55',price:245000,image:'https://www.fonel.com/web/image/product.template/2501/image_1024?unique=668405e',category:'Smartphone',rating:4.4},
  {id:9,name:'Dell XPS 13',price:880000,image:'https://cdn.lesnumeriques.com/optim/product/75/75507/d49fd532-xps-13-2024-core-ultra-2_png__1200_900__overflow.jpg',category:'Ordinateur',rating:4.7},
  {id:10,name:'HP Pavilion 15',price:410000,image:'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6510/6510528_sd.jpg',category:'Ordinateur',rating:4.3},
  {id:11,name:'Enceinte JBL Flip 6',price:65000,image:'jblflip6.jpeg',category:'Audio',rating:4.6,new:true},
  {id:12,name:'Casque Sony WH-1000XM5',price:220000,image:'casquesony.jpeg',category:'Audio',rating:4.9,new:true},
  {id:13,name:'Samsung Galaxy Tab S9',price:480000,image:'https://www.arlt.com/out/pictures/master/product/1/Samsung_SM-X710NZAAEUE_INT_1.jpg',category:'Tablette',rating:4.5},
  {id:14,name:'Montre connectée Amazfit',price:65000,image:'https://storeimages.kickmobiles.com/ebayimages/amazfit/gts_4/wifi_bt/black/1.jpg',category:'Montre',rating:4.2},
  {id:15,name:'Batterie externe 20000mAh',price:22000,image:'powerbank.jpeg',category:'Accessoire',rating:4.4},
  {id:16,name:'Support téléphone voiture',price:8000,image:'https://item-shopping.c.yimg.jp/i/n/amuza-butiko_20240819-17523_6_d_20240819104757',category:'Accessoire',rating:4.1},
  {id:17,name:'Sac à dos PC 15"',price:28000,image:'https://coralrsprod.blob.core.windows.net/storage/media/images/products/2026/03/0-56691700-1771500018_6d3eef60.jpg',category:'Accessoire',rating:4.5},
  {id:18,name:'Souris sans fil Logitech',price:18000,image:'https://techlifebd.com/public/uploads/products/meta/WOnZksWeh1duLIzeNpojJbJMhrJTzpCWTPY1vQ9X.jpeg',category:'Accessoire',rating:4.6},
{id:19,name:'Téléviseur Samsung 55" Smart TV',price:425000,image:'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=900&q=85',category:'Téléviseur',rating:4.8,new:true},
  {id:20,name:'Téléviseur LG 50" 4K',price:365000,image:'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=900&q=85',category:'Téléviseur',rating:4.6},
  {id:21,name:'Panier fruits & légumes bio',price:15000,image:'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=85',category:'Produits bio',rating:4.8,new:true},
  {id:22,name:'Huile d’olive bio premium',price:12000,image:'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=900&q=85',category:'Produits bio',rating:4.7},
  {id:23,name:'Coffret soins visage',price:18500,image:'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=85',category:'Cosmétiques',rating:4.7,new:true},
  {id:24,name:'Parfum femme premium',price:28000,image:'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=85',category:'Cosmétiques',rating:4.8},
  {id:25,name:'T-shirt premium unisexe',price:12000,image:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85',category:'Vêtements',rating:4.6},
  {id:26,name:'Ensemble streetwear',price:32000,image:'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85',category:'Vêtements',rating:4.7},
  {id:27,name:'Sneakers Nike style sport',price:45000,image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85',category:'Chaussures',rating:4.8,new:true},
  {id:28,name:'Sneakers urbaines',price:38000,image:'https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=900&q=85',category:'Chaussures',rating:4.5},
  {id:29,name:'Menu restaurant — Grillades',price:8500,image:'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=85',category:'Restaurant',rating:4.8,new:true},
  {id:30,name:'Burger gourmet & frites',price:6500,image:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85',category:'Restaurant',rating:4.7},
  {id:31,name:'Pizza',price:5000,image:'images/pizza.jpeg',category:'Restaurant',rating:4.8,new:true},
  {id:32,name:'Brochette',price:1500,image:'images/brochette.jpeg',category:'Restaurant',rating:4.7},
  {id:33,name:'Tacos',price:2600,image:'images/tacos.jpeg',category:'Restaurant',rating:4.7},
  {id:34,name:'Fataya',price:1000,image:'images/fataya.jpeg',category:'Restaurant',rating:4.6},
  {id:35,name:'Chawarma',price:1500,image:'images/chawarma.jpeg',category:'Restaurant',rating:4.8},
  {id:36,name:'Poulet pané',price:3500,image:'images/poulet-pane.jpeg',category:'Restaurant',rating:4.8}
];

const BUSINESS_WHATSAPP='221782759595';
const DAKAR_CENTER=[14.6928,-17.4467];
const TRACKING_STEPS=['Commande reçue','En préparation','En cours de livraison','Livré'];
const TRACKING_ROUTE=[[14.6928,-17.4467],[14.7000,-17.4550],[14.7100,-17.4650],[14.7200,-17.4700],[14.7300,-17.4750],[14.7400,-17.4467]];
let activeCategory='Tous';
let searchTerm='';
let cart=JSON.parse(localStorage.getItem('babaCart')||'[]');
let liveMap,userMarker,userAccuracyCircle,watchId,trackingMap,trackingMarker,trackingRouteLine,trackingInterval,trackingStepIndex=0;
let authMode='login';

const $=id=>document.getElementById(id);
const money=n=>`${Number(n).toLocaleString('fr-FR')} F`;

window.addEventListener('DOMContentLoaded',()=>{
  $('closeProductDetails').addEventListener('click',closeProductDetails);
  renderCategoryFilters();renderProducts();updateCartCount();restoreTheme();updateAccountButton();
  $('cartIcon').addEventListener('click',openCart);initHomeBanners();initVoiceSearch();$('closeCart').addEventListener('click',closeCart);
  $('closeTicket').addEventListener('click',closeTicket);$('printTicketBtn').addEventListener('click',printTicket);
  $('checkoutBtn').addEventListener('click',checkout);$('locateBtn').addEventListener('click',locateUser);$('trackBtn').addEventListener('click',trackPackage);
  $('productSearch').addEventListener('input',e=>{searchTerm=e.target.value.trim().toLowerCase();renderProducts()});$('clearSearch').addEventListener('click',()=>{$('productSearch').value='';searchTerm='';renderProducts();$('productSearch').focus()});
  $('themeToggle').addEventListener('click',toggleTheme);$('accountBtn').addEventListener('click',openAuth);$('closeAuth').addEventListener('click',closeAuth);$('authForm').addEventListener('submit',handleAuth);
  document.querySelectorAll('.auth-tab').forEach(t=>t.addEventListener('click',()=>setAuthMode(t.dataset.auth)));
  document.querySelectorAll('.service-open').forEach(btn=>btn.addEventListener('click',()=>openService(btn.dataset.service)));
  document.querySelectorAll('.category-shortcut').forEach(btn=>btn.addEventListener('click',()=>{activeCategory=btn.dataset.shortcut;renderCategoryFilters();renderProducts();$('products').scrollIntoView({behavior:'smooth'});}));$('closeService').addEventListener('click',closeService);$('serviceForm').addEventListener('submit',submitService);
  document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const target=document.querySelector(a.getAttribute('href'));if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth'});$('navMenu').classList.remove('active');$('hamburger').classList.remove('active')}}));
  $('hamburger').addEventListener('click',()=>{$('navMenu').classList.toggle('active');$('hamburger').classList.toggle('active')});
  window.addEventListener('click',e=>{['cartModal','ticketModal','authModal','serviceModal','productDetailsModal'].forEach(id=>{const m=$(id);if(e.target===m)m.classList.remove('open')})});
  initLiveMap();
});

function renderCategoryFilters(){const c=$('categoryFilters');const cats=['Tous',...new Set(products.map(p=>p.category))];c.innerHTML=cats.map(cat=>`<button class="category-btn ${cat===activeCategory?'active':''}" data-category="${cat}">${cat}</button>`).join('');c.querySelectorAll('.category-btn').forEach(b=>b.addEventListener('click',()=>{activeCategory=b.dataset.category;renderCategoryFilters();renderProducts()}));}
function productDescription(p){const descriptions={
'Téléviseur':'Profitez d’une image immersive et de fonctionnalités connectées pour vos films, séries, sports et divertissements.',
'Produits bio':'Produit sélectionné pour une consommation quotidienne, avec une présentation soignée et une livraison pratique.',
'Cosmétiques':'Un produit de soin et de beauté choisi pour compléter votre routine quotidienne avec élégance.',
'Vêtements':'Article tendance pensé pour un style moderne, confortable et facile à porter au quotidien.',
'Chaussures':'Chaussures au style moderne, adaptées aux sorties, au quotidien et à un usage urbain.',
'Restaurant':'Préparation savoureuse à commander en ligne avec possibilité de livraison à Dakar.',
'Smartphone':'Smartphone moderne combinant performances, écran de qualité, appareil photo et connectivité.',
'Ordinateur':'Ordinateur conçu pour le travail, les études, la création et les usages numériques quotidiens.',
'Audio':'Solution audio pensée pour une écoute claire, immersive et confortable.',
'Tablette':'Tablette polyvalente adaptée au divertissement, à la navigation et au travail mobile.',
'Montre':'Montre connectée pratique pour suivre votre activité et recevoir vos informations au quotidien.',
'Accessoire':'Accessoire pratique conçu pour compléter et faciliter l’utilisation de vos équipements.'
};return descriptions[p.category]||`Découvrez ${p.name}, disponible chez BABA Express avec livraison à Dakar.`}
function productSpecs(p){return `<div class="detail-specs"><div><span>Catégorie</span><strong>${escapeHtml(p.category)}</strong></div><div><span>Évaluation</span><strong>★ ${p.rating}/5</strong></div><div><span>Disponibilité</span><strong class="available"><i class="fas fa-circle"></i> Disponible</strong></div><div><span>Livraison</span><strong>À Dakar</strong></div></div>`}
function openProductDetails(id){const p=products.find(x=>x.id===id);if(!p)return;$('productDetailsBody').innerHTML=`<div class="product-detail-layout"><div class="product-detail-image"><img src="${p.image}" alt="${escapeHtml(p.name)}" onerror="this.src='powerbank.jpeg'"></div><div class="product-detail-info"><span class="detail-category">${escapeHtml(p.category)}</span><h2>${escapeHtml(p.name)}</h2><div class="product-rating detail-rating">${'★'.repeat(Math.floor(p.rating))}${'☆'.repeat(5-Math.floor(p.rating))}<span>(${p.rating}/5)</span></div><div class="detail-price">${money(p.price)}</div><h4>Description</h4><p class="detail-description">${productDescription(p)}</p>${productSpecs(p)}<button class="btn-primary detail-add" data-detail-add="${p.id}"><i class="fas fa-cart-plus"></i> Ajouter au panier</button></div></div>`;$('productDetailsModal').classList.add('open');const btn=$('[data-detail-add]');if(btn)btn.addEventListener('click',e=>addToCart(Number(btn.dataset.detailAdd),e));}
function closeProductDetails(){$('productDetailsModal').classList.remove('open')}
function renderProducts(){const grid=$('productsGrid');const filtered=products.filter(p=>(activeCategory==='Tous'||p.category===activeCategory)&&(!searchTerm||`${p.name} ${p.category}`.toLowerCase().includes(searchTerm)));$('productCounter').textContent=`${filtered.length} produit${filtered.length>1?'s':''}`;grid.innerHTML=filtered.map((p,i)=>`<article class="product-card" data-id="${p.id}" style="animation-delay:${i*35}ms"><div class="product-image ${p.new?'new':''}"><img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='powerbank.jpeg'"></div><div class="product-info"><h3>${p.name}</h3><div class="product-rating">${'★'.repeat(Math.floor(p.rating))}${'☆'.repeat(5-Math.floor(p.rating))}<span style="color:var(--muted);margin-left:.4rem">(${p.rating})</span></div><p class="product-description">${productDescription(p)}</p><div class="product-price">${money(p.price)}</div><div class="product-actions"><button class="product-details-btn" data-details="${p.id}"><i class="fas fa-eye"></i> Voir détails</button><button class="product-add" data-add="${p.id}"><i class="fas fa-cart-plus"></i> Ajouter</button></div></div></article>`).join('');$('emptyProducts').hidden=filtered.length>0;grid.querySelectorAll('[data-add]').forEach(btn=>btn.addEventListener('click',e=>addToCart(Number(btn.dataset.add),e)));grid.querySelectorAll('[data-details]').forEach(btn=>btn.addEventListener('click',()=>openProductDetails(Number(btn.dataset.details))));}
function addToCart(id,e){const p=products.find(x=>x.id===id);if(!p)return;const existing=cart.find(x=>x.id===id);existing?existing.quantity++:cart.push({...p,quantity:1});persistCart();updateCartCount();updateCartModal();const b=e.currentTarget;b.innerHTML='<i class="fas fa-check"></i> Ajouté !';setTimeout(()=>{b.innerHTML='<i class="fas fa-cart-plus"></i> Ajouter au panier'},900)}
function persistCart(){localStorage.setItem('babaCart',JSON.stringify(cart))}
function updateCartCount(){$('cartCount').textContent=cart.reduce((s,i)=>s+i.quantity,0)}
function openCart(){updateCartModal();$('cartModal').classList.add('open')}
function closeCart(){$('cartModal').classList.remove('open')}
function updateCartModal(){const box=$('cartItems');if(!cart.length){box.innerHTML='<p style="text-align:center;color:var(--muted);padding:2rem">Votre panier est vide.</p>';$('cartTotal').textContent='0 F';return}box.innerHTML=cart.map(i=>`<div class="cart-item"><img src="${i.image}" alt="${i.name}"><div class="cart-item-info"><h4>${i.name}</h4><p>${money(i.price)}</p><div class="quantity-controls"><button class="quantity-btn" data-q="${i.id}" data-change="-1">−</button><strong>${i.quantity}</strong><button class="quantity-btn" data-q="${i.id}" data-change="1">+</button></div></div><button class="remove-item" data-remove="${i.id}"><i class="fas fa-trash"></i></button></div>`).join('');box.querySelectorAll('[data-q]').forEach(b=>b.addEventListener('click',()=>updateQuantity(Number(b.dataset.q),Number(b.dataset.change))));box.querySelectorAll('[data-remove]').forEach(b=>b.addEventListener('click',()=>removeFromCart(Number(b.dataset.remove))));$('cartTotal').textContent=money(cart.reduce((s,i)=>s+i.price*i.quantity,0))}
function updateQuantity(id,change){const i=cart.find(x=>x.id===id);if(!i)return;i.quantity+=change;if(i.quantity<=0)cart=cart.filter(x=>x.id!==id);persistCart();updateCartCount();updateCartModal()}
function removeFromCart(id){cart=cart.filter(x=>x.id!==id);persistCart();updateCartCount();updateCartModal()}

function checkout(){if(!cart.length){alert('Votre panier est vide.');return}const name=$('customerName').value.trim(),phone=$('customerPhone').value.trim(),address=$('deliveryAddress').value.trim(),payment=$('paymentMethod').value;if(!name||!phone||!address){alert('Merci de renseigner votre nom, téléphone et adresse.');return}const items=cart.map(x=>({...x})),total=items.reduce((s,i)=>s+i.price*i.quantity,0),orderNumber=generateOrderNumber(),date=new Date();showTicket(orderNumber,date,name,phone,address,total,items,payment,'Commande');sendOrderToWhatsApp(orderNumber,name,phone,address,total,items,payment);cart=[];persistCart();updateCartCount();updateCartModal();$('customerName').value='';$('customerPhone').value='';$('deliveryAddress').value='';closeCart()}
function generateOrderNumber(prefix='BE'){return `${prefix}-${Date.now().toString().slice(-6)}${Math.floor(100+Math.random()*900)}`}
function sendOrderToWhatsApp(orderNumber,name,phone,address,total,items,payment,service='Commande'){const lines=[`🛒 *BABA Express — ${service}*`,`Ticket: ${orderNumber}`,`👤 Client: ${name}`,`📞 Téléphone: ${phone}`,`📍 Adresse: ${address}`,...items.length?['','Articles:',...items.map(i=>`- ${i.name} x${i.quantity} = ${money(i.price*i.quantity)}`)]:[],``,`💰 Total: ${money(total)}`,`💳 Paiement: ${payment}`];window.open(`https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(lines.join('\n'))}`,'_blank')}
function showTicket(orderNumber,date,name,phone,address,total,items,payment,title='Commande'){const itemHtml=items.map(i=>`<div class="ticket-line"><span>${i.name} x${i.quantity}</span><span>${money(i.price*i.quantity)}</span></div>`).join('');$('ticketBody').innerHTML=`<div class="ticket-body"><div class="ticket-header"><h2><i class="fas fa-truck"></i> BABA Express</h2><p>${title}</p></div><div class="ticket-meta"><div>N° : <strong>${orderNumber}</strong></div><div>${date.toLocaleDateString('fr-FR')} à ${date.toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'})}</div></div>${itemHtml}<div class="ticket-total"><span>Total</span><span>${money(total)}</span></div><div class="ticket-address"><strong>Client :</strong> ${escapeHtml(name)}<br><strong>Téléphone :</strong> ${escapeHtml(phone)}<br><strong>Adresse :</strong> ${escapeHtml(address)}<br><strong>Paiement :</strong> ${escapeHtml(payment)}</div></div>`;$('ticketModal').classList.add('open')}
function closeTicket(){$('ticketModal').classList.remove('open')}
function printTicket(){const html=$('ticketBody').innerHTML;const w=window.open('','_blank');if(!w){alert('Autorisez les fenêtres pop-up pour imprimer le ticket.');return}w.document.write(`<html><head><title>Ticket BABA Express</title><style>body{font-family:Arial;padding:25px;max-width:500px;margin:auto}.ticket-header{text-align:center;border-bottom:2px dashed #1e3a8a;padding-bottom:12px}.ticket-header h2{color:#1e3a8a}.ticket-line,.ticket-total{display:flex;justify-content:space-between;padding:7px 0}.ticket-line{border-bottom:1px dotted #ddd}.ticket-total{font-weight:bold;border-top:2px dashed #1e3a8a;margin-top:10px;padding-top:10px;color:#1e3a8a}.ticket-address{margin-top:15px;background:#f7f7f7;padding:12px;border-radius:8px;font-size:13px}</style></head><body>${html}</body></html>`);w.document.close();w.focus();w.print()}

function openAuth(){const user=JSON.parse(localStorage.getItem('babaUser')||'null');if(user){if(confirm(`Connecté en tant que ${user.name||user.email}. Voulez-vous vous déconnecter ?`)){localStorage.removeItem('babaUser');updateAccountButton();alert('Vous êtes déconnecté.')}return}$('authModal').classList.add('open')}
function closeAuth(){$('authModal').classList.remove('open')}
function setAuthMode(mode){authMode=mode;document.querySelectorAll('.auth-tab').forEach(t=>t.classList.toggle('active',t.dataset.auth===mode));$('authTitle').textContent=mode==='login'?'Connexion':'Créer un compte';$('authSubmit').textContent=mode==='login'?'Se connecter':'S’inscrire';$('authName').hidden=mode==='login';$('authName').required=mode==='register'}
function handleAuth(e){e.preventDefault();const email=$('authEmail').value.trim().toLowerCase(),password=$('authPassword').value;let users=JSON.parse(localStorage.getItem('babaUsers')||'[]');if(authMode==='register'){const name=$('authName').value.trim();if(!name)return alert('Entrez votre nom.');if(users.some(u=>u.email===email))return alert('Cet email existe déjà.');users.push({name,email,password});localStorage.setItem('babaUsers',JSON.stringify(users));localStorage.setItem('babaUser',JSON.stringify({name,email}));alert('Compte créé avec succès.');closeAuth();updateAccountButton();return}const u=users.find(x=>x.email===email&&x.password===password);if(!u)return alert('Email ou mot de passe incorrect.');localStorage.setItem('babaUser',JSON.stringify({name:u.name,email:u.email}));closeAuth();updateAccountButton();alert(`Bienvenue ${u.name} !`)}
function updateAccountButton(){const u=JSON.parse(localStorage.getItem('babaUser')||'null');$('accountBtn').title=u?`Connecté : ${u.name}`:'Connexion';$('accountBtn').innerHTML=`<i class="fas fa-${u?'user-check':'user'}"></i>`}

function openService(type){
  $('serviceModal').dataset.type=type;
  const titles={course:'Réserver une course rapide',taxi:'Réserver un taxi privé',insurance:'Demander une assurance',apartment:'Chercher un appartement meublé'};
  $('serviceTitle').textContent=titles[type]||'Demande de service';
  const dynamic=$('serviceDynamicFields');
  if(type==='insurance'){
    dynamic.innerHTML='<select id="insuranceType" required><option value="">Type d’assurance</option><option>Auto / Moto</option><option>Habitation</option><option>Santé</option><option>Voyage</option><option>Commerce / entreprise</option><option>Autre</option></select><input id="insuranceNeed" type="text" placeholder="Besoin / bien à assurer" required><input id="serviceDate" type="date" required>';
  }else if(type==='apartment'){
    dynamic.innerHTML='<select id="apartmentZone" required><option value="">Zone de Dakar</option><option>Almadies</option><option>Mermoz / Sacré-Cœur</option><option>Ouakam</option><option>Point E</option><option>Plateau</option><option>Fann</option><option>Parcelles Assainies</option><option>Pikine</option><option>Guédiawaye</option><option>Yoff</option><option>Autre zone de Dakar</option></select><select id="apartmentType" required><option value="">Type de logement</option><option>Studio</option><option>F2</option><option>F3</option><option>F4+</option></select><input id="serviceDate" type="date" required>';
  }else{
    dynamic.innerHTML='<input id="servicePickup" type="text" placeholder="Lieu de départ" required><input id="serviceDestination" type="text" placeholder="Destination" required><input id="serviceDate" type="datetime-local" required>';
  }
  $('serviceModal').classList.add('open');
}
function closeService(){$('serviceModal').classList.remove('open')}
function submitService(e){
  e.preventDefault();
  const type=$('serviceModal').dataset.type,name=$('serviceName').value.trim(),phone=$('servicePhone').value.trim(),note=$('serviceNote').value.trim(),date=$('serviceDate').value;
  const ticket=generateOrderNumber(type==='course'?'CR':type==='taxi'?'TX':type==='insurance'?'AS':'AP'),d=new Date();
  let serviceLabel,details=[];
  if(type==='insurance'){serviceLabel='Assurance';details=[`🛡️ Type: ${$('insuranceType').value}`,`📋 Besoin: ${$('insuranceNeed').value}`]}
  else if(type==='apartment'){serviceLabel='Location appartement meublé';details=[`🏠 Zone: ${$('apartmentZone').value}`,`🛏️ Type: ${$('apartmentType').value}`]}
  else {serviceLabel=type==='course'?'Course rapide':'Taxi privé';details=[`📍 Départ: ${$('servicePickup').value}`,`🏁 Destination: ${$('serviceDestination').value}`]}
  const text=[`📦 *BABA Express — ${serviceLabel}*`,`Ticket: ${ticket}`,`👤 ${name}`,`📞 ${phone}`,...details,`🕒 ${new Date(date).toLocaleString('fr-FR')}`,note?`📝 ${note}`:''].filter(Boolean).join('\n');
  window.open(`https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(text)}`,'_blank');
  showTicket(ticket,d,name,phone,details.join(' • '),0,[],serviceLabel);closeService();e.target.reset();
}

function initHomeBanners(){
  const banners=[...document.querySelectorAll('.home-banner')],dots=[...document.querySelectorAll('#bannerDots button')];
  if(!banners.length)return; let index=0,timer;
  function show(i){index=(i+banners.length)%banners.length;banners.forEach((b,n)=>b.classList.toggle('active',n===index));dots.forEach((d,n)=>d.classList.toggle('active',n===index));}
  dots.forEach(d=>d.addEventListener('click',()=>{show(Number(d.dataset.slide));clearInterval(timer);timer=setInterval(()=>show(index+1),5000)}));
  timer=setInterval(()=>show(index+1),5000);
}
function initVoiceSearch(){
  const btn=$('voiceSearchBtn'),input=$('productSearch'); if(!btn||!input)return;
  const Recognition=window.SpeechRecognition||window.webkitSpeechRecognition;
  if(!Recognition){btn.title='Recherche vocale non disponible sur ce navigateur';btn.addEventListener('click',()=>alert('La recherche vocale nécessite un navigateur compatible, comme Chrome ou Edge.'));return;}
  const recognition=new Recognition(); recognition.lang='fr-FR'; recognition.interimResults=false; recognition.maxAlternatives=1;
  recognition.onstart=()=>{btn.classList.add('listening');btn.innerHTML='<i class="fas fa-microphone-lines"></i>';btn.title='Écoute en cours…';};
  recognition.onend=()=>{btn.classList.remove('listening');btn.innerHTML='<i class="fas fa-microphone"></i>';btn.title='Recherche vocale';};
  recognition.onerror=()=>{btn.classList.remove('listening');alert('Impossible d’utiliser le microphone. Vérifiez l’autorisation du navigateur.');};
  recognition.onresult=e=>{input.value=e.results[0][0].transcript;searchTerm=input.value.trim().toLowerCase();renderProducts();document.querySelector('#products').scrollIntoView({behavior:'smooth'});};
  btn.addEventListener('click',()=>{try{recognition.start()}catch(_){}});
}

function toggleTheme(){document.body.classList.toggle('dark-theme');const dark=document.body.classList.contains('dark-theme');localStorage.setItem('babaTheme',dark?'dark':'light');$('themeToggle').innerHTML=`<i class="fas fa-${dark?'sun':'moon'}"></i>`}
function restoreTheme(){if(localStorage.getItem('babaTheme')==='dark'){document.body.classList.add('dark-theme');$('themeToggle').innerHTML='<i class="fas fa-sun"></i>'}}
function scrollToProducts(){$('products').scrollIntoView({behavior:'smooth'})}
function escapeHtml(v){return String(v).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}

function initLiveMap(){const el=$('liveMap');if(!el||typeof L==='undefined')return;liveMap=L.map(el).setView(DAKAR_CENTER,12);L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'&copy; OpenStreetMap contributors',maxZoom:19}).addTo(liveMap);L.marker(DAKAR_CENTER).addTo(liveMap).bindPopup('BABA Express — Dakar').openPopup()}
function locateUser(){if(!navigator.geolocation)return alert('La géolocalisation n’est pas disponible.');const btn=$('locateBtn');btn.disabled=true;$('mapStatus').textContent='Localisation en cours...';if(watchId)navigator.geolocation.clearWatch(watchId);watchId=navigator.geolocation.watchPosition(pos=>{const{latitude,longitude,accuracy}=pos.coords,latlng=[latitude,longitude];if(!userMarker){userMarker=L.circleMarker(latlng,{radius:8,color:'#3b82f6',fillColor:'#3b82f6',fillOpacity:.9}).addTo(liveMap).bindPopup('Vous êtes ici');userAccuracyCircle=L.circle(latlng,{radius:accuracy,color:'#3b82f6',fillColor:'#3b82f6',fillOpacity:.1}).addTo(liveMap);liveMap.setView(latlng,15)}else{userMarker.setLatLng(latlng);userAccuracyCircle.setLatLng(latlng);userAccuracyCircle.setRadius(accuracy)}$('mapStatus').textContent=`Position mise à jour • précision ${Math.round(accuracy)} m`;btn.disabled=false},err=>{btn.disabled=false;$('mapStatus').textContent=err.code===1?'Localisation refusée par le navigateur.':'Impossible de récupérer votre position.'},{enableHighAccuracy:true,maximumAge:5000,timeout:10000})}
function trackPackage(){const code=$('trackingInput').value.trim();if(!code)return alert('Entrez un numéro de suivi.');$('trackingResult').hidden=false;trackingStepIndex=1;renderTimeline();$('etaText').textContent='Livraison estimée sous 24h 🚚';if(!trackingMap){trackingMap=L.map('trackingMap').setView(TRACKING_ROUTE[0],12);L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'&copy; OpenStreetMap contributors'}).addTo(trackingMap);trackingRouteLine=L.polyline(TRACKING_ROUTE,{color:'#3b82f6',weight:4,opacity:.6}).addTo(trackingMap);trackingMarker=L.marker(TRACKING_ROUTE[0]).addTo(trackingMap)}trackingMarker.setLatLng(TRACKING_ROUTE[0]).bindPopup(`Colis ${code}`);trackingMap.fitBounds(trackingRouteLine.getBounds(),{padding:[20,20]});if(trackingInterval)clearInterval(trackingInterval);let idx=0;trackingInterval=setInterval(()=>{idx++;if(idx>=TRACKING_ROUTE.length){clearInterval(trackingInterval);trackingStepIndex=3;renderTimeline();$('etaText').textContent='Colis livré ✅';return}trackingMarker.setLatLng(TRACKING_ROUTE[idx]);if(idx===2){trackingStepIndex=2;renderTimeline()}},1800)}
function renderTimeline(){$('trackingTimeline').innerHTML=TRACKING_STEPS.map((s,i)=>`<li class="${i<=trackingStepIndex?'done':''}">${s}</li>`).join('')}
