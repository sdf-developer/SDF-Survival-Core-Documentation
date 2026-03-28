/* ═══════════════════════════════════════════════════
   SDF SURVIVAL CORE — Shared JS
   • Page transitions
   • Language switcher (EN / ES / FR)
   • Coming Soon popup (index only)
   ═══════════════════════════════════════════════════ */

/* ──────────────────────────────────────
   1. TRANSLATIONS
────────────────────────────────────── */
const TRANSLATIONS = {
  en: {
    /* NAV */
    nav_home:        'Home',
    nav_commands:    'Commands',
    nav_changelog:   'Changelog',
    nav_installation:'Installation',
    nav_contact:     'Contact',
    /* INDEX */
    eyebrow_index:   'Minecraft Plugin · Survival 1.21 · All-in-One',
    tagline_index:   'A <strong>lightweight, modular and fully integrated</strong> plugin designed for modern Survival servers — delivering performance, stability and a professional experience without relying on multiple external plugins.',
    stat_features:   'Features',
    stat_version:    'Version',
    stat_solo:       'Solo Plugin',
    stat_modular:    'Modular',
    stat_commands:   'Commands',
    stat_view_all:   'View all commands',
    stat_ref:        'Complete reference · All systems',
    stat_explore:    'Explore now',
    lang_label:      'Supports multiple languages',
    systems_label:   'Systems Included — click to explore',
    install_label:   'Installation Guide',
    install_sub:     'Quick setup · 4 steps · auto-generated configs',
    step1_badge:     'Step 01', step1_title: 'Drag the Plugin',   step1_desc: 'Move the .jar file into your server\'s /plugins folder.',
    step2_badge:     'Step 02', step2_title: 'Enter the License', step2_desc: 'Enter the license key provided upon purchase in config.yml.',
    step3_badge:     'Step 03', step3_title: 'Start the Server',  step3_desc: 'Boot or restart your server. Config files will be auto-generated.',
    step4_badge:     'Step 04', step4_title: 'Configure Files',   step4_desc: 'Edit the generated config files to match your server needs.',
    deps_label:      'Requires',
    footer_made:     'Made by', footer_rights: 'All rights reserved',
    /* COMMANDS */
    eyebrow_commands:'// Plugin Documentation',
    subtitle_commands:'Complete reference — 150+ commands and permissions',
    search_ph:       'Search command or permission...',
    filter_all:      'All', filter_player: '👤 Player', filter_vip: '⭐ VIP', filter_staff: '🛡 Staff',
    filter_homes:    '🏠 Homes', filter_economy: '💰 Economy', filter_combat: '⚔ Combat',
    filter_chat:     '💬 Chat', filter_keys: '🔑 Keys', filter_utility: '🔧 Utility', filter_clan: '🏴 Clans',
    stat_total:      'Total Commands', stat_staff: 'Staff', stat_vip: 'VIP', stat_players: 'Players',
    legend_player:   'Player Permission', legend_vip: 'VIP Exclusive', legend_staff: 'Staff Permission',
    /* CONTACT */
    eyebrow_contact: 'SDF Survival Core · Support & Contact',
    title_contact:   '<span class="accent">CONT</span>ACT',
    sub_contact:     'GET IN TOUCH',
    tagline_contact: 'Have questions, suggestions, or need help with the plugin? Reach out by email or join our Discord server.',
    channels_label:  'Contact channels',
    email_type:      'Email', email_title: 'Email',
    email_desc:      'For support inquiries, bug reports, or feature requests. We respond within 24–48h.',
    email_cta:       'Send email',
    discord_type:    'Community', discord_title: 'Discord',
    discord_desc:    'Join our community. Real-time support, announcements, changelog and community suggestions.',
    discord_cta:     'Join server',
    pill_active:     'Plugin active and maintained',
    pill_support:    'Support in Spanish & English',
    pill_response:   'Response time: 24–48h',
    /* CHANGELOG */
    eyebrow_changelog:'SDF Survival Core · Release History',
    sub_changelog:   'VERSION HISTORY',
    tagline_changelog:'Full history of every release, fix and improvement made to SDF Survival Core.',
    status_label:    'Current Status',
    status_text:     'Plugin not yet released — v1.0 coming soon',
    versions_label:  'All Versions',
    v1_title:        'Initial Release — SDF Survival Core',
    v1_date:         'Coming Soon · 2025',
    /* POPUP */
    popup_tag:       '// Upcoming Release',
    popup_title:     'COMING <span style="color:var(--orange)">SOON</span>',
    popup_sub:       'SDF SURVIVAL CORE',
    popup_desc:      'The plugin is under active development and will be available on April 18th. Join our Discord to be the first to know.',
    popup_days:      'DAYS', popup_hours: 'HOURS', popup_mins: 'MIN', popup_secs: 'SEC',
    popup_discord:   'Join Discord', popup_close: 'Continue to site',
  },
  es: {
    nav_home:        'Inicio',
    nav_commands:    'Comandos',
    nav_changelog:   'Changelog',
    nav_installation:'Instalación',
    nav_contact:     'Contacto',
    eyebrow_index:   'Plugin de Minecraft · Survival 1.21 · Todo en Uno',
    tagline_index:   'Un plugin <strong>ligero, modular y totalmente integrado</strong> diseñado para servidores Survival modernos — rendimiento, estabilidad y una experiencia profesional sin depender de múltiples plugins externos.',
    stat_features:   'Funciones',
    stat_version:    'Versión',
    stat_solo:       'Un Plugin',
    stat_modular:    'Modular',
    stat_commands:   'Comandos',
    stat_view_all:   'Ver todos los comandos',
    stat_ref:        'Referencia completa · Todos los sistemas',
    stat_explore:    'Explorar',
    lang_label:      'Soporta múltiples idiomas',
    systems_label:   'Sistemas incluidos — haz clic para explorar',
    install_label:   'Guía de Instalación',
    install_sub:     'Configuración rápida · 4 pasos · configs auto-generadas',
    step1_badge: 'Paso 01', step1_title: 'Arrastra el Plugin',   step1_desc: 'Mueve el archivo .jar a la carpeta /plugins de tu servidor.',
    step2_badge: 'Paso 02', step2_title: 'Introduce la Licencia', step2_desc: 'Introduce la clave de licencia proporcionada al comprar en config.yml.',
    step3_badge: 'Paso 03', step3_title: 'Inicia el Servidor',   step3_desc: 'Arranca o reinicia el servidor. Los archivos de config se generarán automáticamente.',
    step4_badge: 'Paso 04', step4_title: 'Configura los Archivos', step4_desc: 'Edita los archivos de configuración generados según las necesidades de tu servidor.',
    deps_label:      'Requiere',
    footer_made:     'Hecho por', footer_rights: 'Todos los derechos reservados',
    eyebrow_commands:'// Documentación del Plugin',
    subtitle_commands:'Referencia completa — 150+ comandos y permisos',
    search_ph:       'Buscar comando o permiso...',
    filter_all: 'Todo', filter_player: '👤 Jugador', filter_vip: '⭐ VIP', filter_staff: '🛡 Staff',
    filter_homes: '🏠 Homes', filter_economy: '💰 Economía', filter_combat: '⚔ Combate',
    filter_chat: '💬 Chat', filter_keys: '🔑 Llaves', filter_utility: '🔧 Utilidad', filter_clan: '🏴 Clanes',
    stat_total: 'Comandos totales', stat_staff: 'Staff', stat_vip: 'VIP', stat_players: 'Jugadores',
    legend_player: 'Permiso de Jugador', legend_vip: 'Exclusivo VIP', legend_staff: 'Permiso de Staff',
    eyebrow_contact: 'SDF Survival Core · Soporte & Contacto',
    title_contact:   '<span class="accent">CONT</span>ACTO',
    sub_contact:     'CONTÁCTANOS',
    tagline_contact: '¿Tienes dudas, sugerencias o necesitas ayuda con el plugin? Escríbenos por correo o únete a nuestro servidor de Discord.',
    channels_label:  'Canales de contacto',
    email_type: 'Correo', email_title: 'Correo',
    email_desc: 'Para consultas de soporte, reportes de bugs o solicitudes de funciones. Respondemos en 24–48h.',
    email_cta: 'Enviar correo',
    discord_type: 'Comunidad', discord_title: 'Discord',
    discord_desc: 'Únete a nuestra comunidad. Soporte en tiempo real, anuncios, changelog y sugerencias.',
    discord_cta: 'Unirse al servidor',
    pill_active:  'Plugin activo y mantenido',
    pill_support: 'Soporte en Español e Inglés',
    pill_response:'Tiempo de respuesta: 24–48h',
    eyebrow_changelog:'SDF Survival Core · Historial de versiones',
    sub_changelog:   'HISTORIAL',
    tagline_changelog:'Historial completo de cada versión, corrección y mejora de SDF Survival Core.',
    status_label:    'Estado actual',
    status_text:     'Plugin aún no lanzado — v1.0 próximamente',
    versions_label:  'Todas las versiones',
    v1_title:        'Lanzamiento Inicial — SDF Survival Core',
    v1_date:         'Próximamente · 2025',
    popup_tag:       '// Lanzamiento Próximo',
    popup_title:     'PRÓXIMA<span style="color:var(--orange)">MENTE</span>',
    popup_sub:       'SDF SURVIVAL CORE',
    popup_desc:      'El plugin está en desarrollo activo y estará disponible el 18 de abril. Únete a nuestro Discord para ser el primero en saberlo.',
    popup_days: 'DÍAS', popup_hours: 'HORAS', popup_mins: 'MIN', popup_secs: 'SEG',
    popup_discord: 'Unirse a Discord', popup_close: 'Continuar al sitio',
  },
  fr: {
    nav_home:        'Accueil',
    nav_commands:    'Commandes',
    nav_changelog:   'Changelog',
    nav_installation:'Installation',
    nav_contact:     'Contact',
    eyebrow_index:   'Plugin Minecraft · Survival 1.21 · Tout-en-Un',
    tagline_index:   'Un plugin <strong>léger, modulaire et entièrement intégré</strong> conçu pour les serveurs Survival modernes — performance, stabilité et expérience professionnelle sans dépendre de multiples plugins externes.',
    stat_features:   'Fonctions',
    stat_version:    'Version',
    stat_solo:       'Un Plugin',
    stat_modular:    'Modulaire',
    stat_commands:   'Commandes',
    stat_view_all:   'Voir toutes les commandes',
    stat_ref:        'Référence complète · Tous les systèmes',
    stat_explore:    'Explorer',
    lang_label:      'Supporte plusieurs langues',
    systems_label:   'Systèmes inclus — cliquez pour explorer',
    install_label:   'Guide d\'Installation',
    install_sub:     'Configuration rapide · 4 étapes · configs auto-générées',
    step1_badge: 'Étape 01', step1_title: 'Glisser le Plugin',  step1_desc: 'Déplacez le fichier .jar dans le dossier /plugins de votre serveur.',
    step2_badge: 'Étape 02', step2_title: 'Entrer la Licence',  step2_desc: 'Entrez la clé de licence fournie lors de l\'achat dans config.yml.',
    step3_badge: 'Étape 03', step3_title: 'Lancer le Serveur',  step3_desc: 'Démarrez ou redémarrez votre serveur. Les fichiers de config seront auto-générés.',
    step4_badge: 'Étape 04', step4_title: 'Configurer les Fichiers', step4_desc: 'Modifiez les fichiers de configuration générés selon les besoins de votre serveur.',
    deps_label:      'Nécessite',
    footer_made:     'Créé par', footer_rights: 'Tous droits réservés',
    eyebrow_commands:'// Documentation du Plugin',
    subtitle_commands:'Référence complète — 150+ commandes et permissions',
    search_ph:       'Rechercher commande ou permission...',
    filter_all: 'Tout', filter_player: '👤 Joueur', filter_vip: '⭐ VIP', filter_staff: '🛡 Staff',
    filter_homes: '🏠 Homes', filter_economy: '💰 Économie', filter_combat: '⚔ Combat',
    filter_chat: '💬 Chat', filter_keys: '🔑 Clés', filter_utility: '🔧 Utilitaire', filter_clan: '🏴 Clans',
    stat_total: 'Commandes totales', stat_staff: 'Staff', stat_vip: 'VIP', stat_players: 'Joueurs',
    legend_player: 'Permission Joueur', legend_vip: 'Exclusif VIP', legend_staff: 'Permission Staff',
    eyebrow_contact: 'SDF Survival Core · Support & Contact',
    title_contact:   '<span class="accent">CONT</span>ACT',
    sub_contact:     'NOUS CONTACTER',
    tagline_contact: 'Des questions, des suggestions ou besoin d\'aide avec le plugin ? Contactez-nous par e-mail ou rejoignez notre serveur Discord.',
    channels_label:  'Canaux de contact',
    email_type: 'E-mail', email_title: 'E-mail',
    email_desc: 'Pour les demandes de support, rapports de bugs ou demandes de fonctionnalités. Réponse sous 24–48h.',
    email_cta: 'Envoyer un e-mail',
    discord_type: 'Communauté', discord_title: 'Discord',
    discord_desc: 'Rejoignez notre communauté. Support en temps réel, annonces, changelog et suggestions.',
    discord_cta: 'Rejoindre le serveur',
    pill_active:  'Plugin actif et maintenu',
    pill_support: 'Support en Espagnol & Anglais',
    pill_response:'Temps de réponse : 24–48h',
    eyebrow_changelog:'SDF Survival Core · Historique des versions',
    sub_changelog:   'HISTORIQUE',
    tagline_changelog:'Historique complet de chaque version, correction et amélioration de SDF Survival Core.',
    status_label:    'Statut actuel',
    status_text:     'Plugin pas encore lancé — v1.0 bientôt disponible',
    versions_label:  'Toutes les versions',
    v1_title:        'Version Initiale — SDF Survival Core',
    v1_date:         'Bientôt · 2025',
    popup_tag:       '// Sortie Prochaine',
    popup_title:     'BIENTÔT <span style="color:var(--orange)">DISPONIBLE</span>',
    popup_sub:       'SDF SURVIVAL CORE',
    popup_desc:      'Le plugin est en développement actif et sera disponible le 18 avril. Rejoignez notre Discord pour être le premier informé.',
    popup_days: 'JOURS', popup_hours: 'HEURES', popup_mins: 'MIN', popup_secs: 'SEC',
    popup_discord: 'Rejoindre Discord', popup_close: 'Continuer vers le site',
  }
};

/* ──────────────────────────────────────
   2. LANGUAGE ENGINE
────────────────────────────────────── */
function getLang() {
  return localStorage.getItem('sdf_lang') || 'en';
}
function setLang(lang) {
  localStorage.setItem('sdf_lang', lang);
  applyLang(lang);
  updateLangUI(lang);
}
function t(key) {
  const lang = getLang();
  return TRANSLATIONS[lang]?.[key] || TRANSLATIONS['en'][key] || key;
}

function applyLang(lang) {
  const T = TRANSLATIONS[lang] || TRANSLATIONS['en'];

  // 1. Nav labels
  const navMap = {
    'nav-home': 'nav_home', 'nav-commands': 'nav_commands',
    'nav-changelog': 'nav_changelog', 'nav-installation': 'nav_installation',
    'nav-contact': 'nav_contact'
  };
  Object.entries(navMap).forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = T[key];
  });

  // 2. data-i18n (textContent)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (T[key] !== undefined) el.textContent = T[key];
  });

  // 3. data-i18n-html (innerHTML)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (T[key] !== undefined) el.innerHTML = T[key];
  });

  // 4. data-i18n-ph (placeholder)
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if (T[key] !== undefined) el.placeholder = T[key];
  });

  // 5. Page-specific: detect current page and apply translations to elements
  //    that can't easily have data-i18n (e.g. mixed HTML titles)
  const page = (location.pathname.split('/').pop() || 'index.html').split('?')[0];

  if (page === 'index.html' || page === '') {
    setText('eyebrow-index-text', T.eyebrow_index);
    setHTML('tagline-index', T.tagline_index);
    setText('stat-features-label', T.stat_features);
    setText('stat-solo-label', T.stat_solo);
    setText('stat-modular-label', T.stat_modular);
    setText('stat-commands-label', T.stat_commands);
    setText('stat-view-all', T.stat_view_all);
    setText('stat-ref', T.stat_ref);
    setText('stat-explore', T.stat_explore);
    setText('lang-label', T.lang_label);
    setText('systems-label', T.systems_label);
    setText('install-label', T.install_label);
    setText('install-sub', T.install_sub);
    setText('deps-label', T.deps_label);
    setText('footer-made', T.footer_made);
    setText('footer-rights', T.footer_rights);
    // Steps
    [1,2,3,4].forEach(n => {
      setText(`step${n}-badge`, T[`step${n}_badge`]);
      setText(`step${n}-title`, T[`step${n}_title`]);
      setText(`step${n}-desc`,  T[`step${n}_desc`]);
    });
  }

  if (page === 'commands.html') {
    setHTML('eyebrow-commands', T.eyebrow_commands);
    setText('subtitle-commands', T.subtitle_commands);
    setAttr('search-input', 'placeholder', T.search_ph);
    setText('filter-all',    T.filter_all);
    setText('filter-player', T.filter_player);
    setText('filter-vip',    T.filter_vip);
    setText('filter-staff',  T.filter_staff);
    setText('filter-homes',  T.filter_homes);
    setText('filter-economy',T.filter_economy);
    setText('filter-combat', T.filter_combat);
    setText('filter-chat',   T.filter_chat);
    setText('filter-keys',   T.filter_keys);
    setText('filter-utility',T.filter_utility);
    setText('filter-clan',   T.filter_clan);
    setText('stat-total-lbl',T.stat_total);
    setText('stat-staff-lbl',T.stat_staff);
    setText('stat-vip-lbl',  T.stat_vip);
    setText('stat-players-lbl',T.stat_players);
    setText('legend-player', T.legend_player);
    setText('legend-vip',    T.legend_vip);
    setText('legend-staff',  T.legend_staff);
  }

  if (page === 'changelog.html') {
    const subEl = document.querySelector('.main-title .sub');
    if (subEl && T.sub_changelog) subEl.textContent = T.sub_changelog;
  }
}

function setText(id, val) {
  if (!val) return;
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}
function setHTML(id, val) {
  if (!val) return;
  const el = document.getElementById(id);
  if (el) el.innerHTML = val;
}
function setAttr(id, attr, val) {
  if (!val) return;
  const el = document.getElementById(id);
  if (el) el.setAttribute(attr, val);
}

function updateLangUI(lang) {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

/* ──────────────────────────────────────
   3. LANGUAGE SWITCHER UI (injected)
────────────────────────────────────── */
function injectLangSwitcher() {
  const style = document.createElement('style');
  style.textContent = `
    #lang-switcher {
      position: fixed;
      bottom: 28px; left: 56px;
      z-index: 850;
      display: flex;
      gap: 2px;
      background: rgba(17,17,19,0.92);
      border: 1px solid rgba(240,106,0,0.35);
      backdrop-filter: blur(10px);
      border-radius: 4px;
      padding: 3px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.4);
    }
    .lang-btn {
      font-family: 'Space Mono', monospace;
      font-size: 8px;
      font-weight: 700;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      padding: 5px 9px;
      border: 1px solid transparent;
      border-radius: 2px;
      background: transparent;
      color: rgba(255,255,255,0.3);
      cursor: pointer !important;
      transition: all 0.18s;
    }
    .lang-btn:hover { color: rgba(240,106,0,0.7); border-color: rgba(240,106,0,0.2); }
    .lang-btn.active {
      color: var(--orange, #f06a00);
      background: rgba(240,106,0,0.1);
      border-color: rgba(240,106,0,0.4);
    }
    @media (max-width: 768px) {
      #lang-switcher { left: 8px; bottom: 16px; }
    }
  `;
  document.head.appendChild(style);

  const el = document.createElement('div');
  el.id = 'lang-switcher';
  el.innerHTML = `
    <button class="lang-btn" data-lang="en">EN</button>
    <button class="lang-btn" data-lang="es">ES</button>
    <button class="lang-btn" data-lang="fr">FR</button>
  `;
  document.body.appendChild(el);

  el.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
}

/* ──────────────────────────────────────
   4. PAGE TRANSITIONS
────────────────────────────────────── */
function injectTransitions() {
  const style = document.createElement('style');
  style.textContent = `
    #page-transition {
      position: fixed; inset: 0;
      background: #111113;
      z-index: 99990;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.32s cubic-bezier(0.4,0,0.2,1);
    }
    #page-transition.fade-out { opacity: 1; pointer-events: all; }
    body { opacity: 0; animation: pageIn 0.38s 0.05s cubic-bezier(0.16,1,0.3,1) forwards; }
    @keyframes pageIn { to { opacity: 1; } }
  `;
  document.head.appendChild(style);

  const overlay = document.createElement('div');
  overlay.id = 'page-transition';
  document.body.appendChild(overlay);

  document.addEventListener('click', e => {
    const link = e.target.closest('a[href]');
    if (!link) return;
    const href = link.getAttribute('href');
    // Skip: external, hash-only, empty, javascript:
    if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto') || href.startsWith('javascript')) return;
    // Skip same page
    const current = location.pathname.split('/').pop() || 'index.html';
    if (href === current) return;

    e.preventDefault();
    overlay.classList.add('fade-out');
    setTimeout(() => { location.href = href; }, 300);
  });
}

/* ──────────────────────────────────────
   5. COMING SOON POPUP (index only)
────────────────────────────────────── */
function injectComingSoonPopup() {
  const lang = getLang();
  const T = TRANSLATIONS[lang] || TRANSLATIONS['en'];

  const style = document.createElement('style');
  style.textContent = `
    #cs-overlay {
      position: fixed; inset: 0;
      background: rgba(0,0,0,0.88);
      backdrop-filter: blur(16px);
      z-index: 99980;
      display: flex; align-items: center; justify-content: center;
      opacity: 0; animation: csIn 0.5s 0.3s cubic-bezier(0.16,1,0.3,1) forwards;
    }
    @keyframes csIn { to { opacity: 1; } }
    #cs-overlay.hiding {
      opacity: 0; transition: opacity 0.35s ease;
      pointer-events: none;
    }
    #cs-box {
      position: relative;
      background: #18181b;
      border: 1px solid rgba(240,106,0,0.4);
      border-radius: 6px;
      max-width: 520px; width: 92%;
      overflow: hidden;
      transform: scale(0.94) translateY(16px);
      animation: csBoxIn 0.5s 0.4s cubic-bezier(0.16,1,0.3,1) forwards;
      opacity: 0;
    }
    @keyframes csBoxIn { to { opacity: 1; transform: scale(1) translateY(0); } }
    #cs-top-line {
      height: 2px;
      background: linear-gradient(90deg, transparent, #f06a00, #ff8c2a, #f06a00, transparent);
    }
    #cs-inner { padding: 32px 36px 28px; text-align: center; }
    #cs-tag {
      font-family: 'Space Mono', monospace; font-size: 9px;
      letter-spacing: 4px; text-transform: uppercase;
      color: #f06a00; margin-bottom: 18px;
      display: flex; align-items: center; justify-content: center; gap: 10px;
    }
    #cs-tag::before, #cs-tag::after {
      content: ''; flex: 1; height: 1px; max-width: 40px;
      background: rgba(240,106,0,0.35);
    }
    #cs-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(38px, 8vw, 56px);
      letter-spacing: 3px; line-height: 1;
      color: #fff; margin-bottom: 4px;
    }
    #cs-sub {
      font-family: 'Space Mono', monospace; font-size: 9px;
      letter-spacing: 5px; text-transform: uppercase;
      color: rgba(255,255,255,0.2); margin-bottom: 20px;
    }
    #cs-desc {
      font-size: 13px; font-weight: 300;
      color: #b0b0b8; line-height: 1.7;
      max-width: 380px; margin: 0 auto 28px;
    }
    #cs-countdown {
      display: flex; justify-content: center; gap: 2px;
      margin-bottom: 28px;
    }
    .cs-unit {
      background: rgba(240,106,0,0.06);
      border: 1px solid rgba(240,106,0,0.2);
      border-radius: 3px;
      padding: 12px 16px;
      min-width: 68px; text-align: center;
    }
    .cs-num {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 36px; color: #f06a00;
      line-height: 1; letter-spacing: 2px;
      display: block;
    }
    .cs-lbl {
      font-family: 'Space Mono', monospace; font-size: 7px;
      letter-spacing: 2px; text-transform: uppercase;
      color: rgba(255,255,255,0.25); margin-top: 4px;
      display: block;
    }
    .cs-sep {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 28px; color: rgba(240,106,0,0.3);
      align-self: center; padding-bottom: 12px;
    }
    #cs-actions { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; }
    #cs-discord {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 10px 22px;
      background: rgba(88,101,242,0.12);
      border: 1px solid rgba(88,101,242,0.4);
      border-radius: 3px;
      font-family: 'Space Mono', monospace; font-size: 9px;
      letter-spacing: 2px; text-transform: uppercase;
      color: #7984f5; text-decoration: none;
      cursor: pointer !important;
      transition: background 0.2s, border-color 0.2s;
    }
    #cs-discord:hover { background: rgba(88,101,242,0.2); border-color: rgba(88,101,242,0.7); }
    #cs-close {
      position: absolute;
      top: 12px; right: 12px;
      width: 28px; height: 28px;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 50%;
      color: rgba(255,255,255,0.45);
      font-size: 13px;
      line-height: 1;
      display: flex; align-items: center; justify-content: center;
      cursor: pointer !important;
      transition: background 0.2s, border-color 0.2s, color 0.2s;
      z-index: 10;
    }
    #cs-close:hover { background: rgba(240,106,0,0.15); border-color: #f06a00; color: #f06a00; }
    #cs-bg-glow {
      position: absolute; bottom: -80px; left: 50%;
      transform: translateX(-50%);
      width: 300px; height: 200px;
      background: radial-gradient(ellipse, rgba(240,106,0,0.08) 0%, transparent 70%);
      pointer-events: none;
    }
    @media (max-width: 480px) {
      #cs-inner { padding: 24px 20px 20px; }
      .cs-unit { min-width: 54px; padding: 10px 10px; }
      .cs-num { font-size: 28px; }
    }
  `;
  document.head.appendChild(style);

  const overlay = document.createElement('div');
  overlay.id = 'cs-overlay';
  overlay.innerHTML = `
    <div id="cs-box">
      <div id="cs-top-line"></div>
      <button id="cs-close" aria-label="Close">✕</button>
      <div id="cs-inner">
        <div id="cs-tag">${T.popup_tag}</div>
        <div id="cs-title">${T.popup_title}</div>
        <div id="cs-sub">${T.popup_sub}</div>
        <p id="cs-desc">${T.popup_desc}</p>
        <div id="cs-countdown">
          <div class="cs-unit"><span class="cs-num" id="cs-days">00</span><span class="cs-lbl" id="cs-days-lbl">${T.popup_days}</span></div>
          <span class="cs-sep">:</span>
          <div class="cs-unit"><span class="cs-num" id="cs-hours">00</span><span class="cs-lbl" id="cs-hours-lbl">${T.popup_hours}</span></div>
          <span class="cs-sep">:</span>
          <div class="cs-unit"><span class="cs-num" id="cs-mins">00</span><span class="cs-lbl" id="cs-mins-lbl">${T.popup_mins}</span></div>
          <span class="cs-sep">:</span>
          <div class="cs-unit"><span class="cs-num" id="cs-secs">00</span><span class="cs-lbl" id="cs-secs-lbl">${T.popup_secs}</span></div>
        </div>
        <div id="cs-actions">
          <a id="cs-discord" href="https://discord.gg/xYJ7taj79v" target="_blank">
            <svg width="14" height="14" viewBox="0 0 34 34" fill="none"><path d="M28.7 7.1a25.3 25.3 0 0 0-6.3-2 17.6 17.6 0 0 0-.8 1.6 23.4 23.4 0 0 0-7 0A17 17 0 0 0 13.7 5a25.2 25.2 0 0 0-6.3 2C3 12.4 2 17.5 2.5 22.6a25.4 25.4 0 0 0 7.8 4c.6-.8 1.1-1.7 1.6-2.6a16.7 16.7 0 0 1-2.4-1.1l.5-.4c5 2.3 10.4 2.3 15.4 0l.5.4a16 16 0 0 1-2.4 1.1c.5.9 1 1.8 1.6 2.6a25.3 25.3 0 0 0 7.8-4c.6-6-1-11-4.1-15.5ZM12.4 19.5c-1.5 0-2.8-1.4-2.8-3.1s1.2-3.1 2.8-3.1 2.8 1.4 2.8 3.1-1.2 3.1-2.8 3.1Zm10.3 0c-1.5 0-2.8-1.4-2.8-3.1s1.2-3.1 2.8-3.1 2.8 1.4 2.8 3.1-1.2 3.1-2.8 3.1Z" fill="currentColor"/></svg>
            <span id="cs-discord-lbl">${T.popup_discord}</span>
          </a>
        </div>
        <div id="cs-bg-glow"></div>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  // Countdown to April 18, 2026
  const target = new Date('2026-04-18T00:00:00');
  function tick() {
    const now = new Date();
    const diff = target - now;
    if (diff <= 0) {
      document.getElementById('cs-days').textContent  = '00';
      document.getElementById('cs-hours').textContent = '00';
      document.getElementById('cs-mins').textContent  = '00';
      document.getElementById('cs-secs').textContent  = '00';
      return;
    }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    document.getElementById('cs-days').textContent  = String(d).padStart(2,'0');
    document.getElementById('cs-hours').textContent = String(h).padStart(2,'0');
    document.getElementById('cs-mins').textContent  = String(m).padStart(2,'0');
    document.getElementById('cs-secs').textContent  = String(s).padStart(2,'0');
  }
  tick();
  setInterval(tick, 1000);

  function closePopup() {
    overlay.classList.add('hiding');
    setTimeout(() => overlay.remove(), 380);
  }
  document.getElementById('cs-close').addEventListener('click', closePopup);
  overlay.addEventListener('click', e => { if (e.target === overlay) closePopup(); });

  // Re-translate popup labels when lang changes
  window.__updatePopupLang = function(T) {
    const safe = s => { const el = document.getElementById(s[0]); if (el) el.textContent = T[s[1]]; };
    safe(['cs-tag',         'popup_tag']);
    safe(['cs-sub',         'popup_sub']);
    safe(['cs-desc',        'popup_desc']);
    safe(['cs-days-lbl',    'popup_days']);
    safe(['cs-hours-lbl',   'popup_hours']);
    safe(['cs-mins-lbl',    'popup_mins']);
    safe(['cs-secs-lbl',    'popup_secs']);
    safe(['cs-discord-lbl', 'popup_discord']);
    safe(['cs-close-lbl',   'popup_close']);
    const titleEl = document.getElementById('cs-title');
    if (titleEl) titleEl.innerHTML = T.popup_title;
  };
}

/* ──────────────────────────────────────
   6. INIT — runs on every page
────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  injectTransitions();
  injectLangSwitcher();

  // Apply saved language
  const lang = getLang();
  applyLang(lang);
  updateLangUI(lang);

  // Hook lang buttons to also update popup if present
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const l = btn.dataset.lang;
      if (window.__updatePopupLang) {
        window.__updatePopupLang(TRANSLATIONS[l] || TRANSLATIONS['en']);
      }
    });
  });

  // Coming Soon popup — index only
  const page = location.pathname.split('/').pop() || 'index.html';
  if (page === 'index.html' || page === '') {
    injectComingSoonPopup();
  }
});
