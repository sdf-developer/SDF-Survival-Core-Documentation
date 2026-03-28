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
    /* SYSTEMS (index) */
    sys_koth_name: 'KOTH', sys_koth_desc: '100% configurable King of the Hill system.',
    sys_clans_name: 'Clans', sys_clans_desc: '100% configurable clans system.',
    sys_combat_name: 'Combat PvP', sys_combat_desc: 'Advanced combat PvP system.',
    sys_economy_name: 'Economy', sys_economy_desc: 'Integrated economy system with Vault.',
    sys_crates_name: 'Crates', sys_crates_desc: 'Loot boxes with animations and rewards.',
    sys_bounties_name: 'Bounties', sys_bounties_desc: 'Rewards system for hunting players.',
    sys_homes_name: 'Homes & TPA', sys_homes_desc: 'Homes and teleport/warp system.',
    sys_leaderboards_name: 'Leaderboards', sys_leaderboards_desc: 'Ranking for players and clans.',
    sys_kits_name: 'Kits', sys_kits_desc: 'Complete 100% configurable kits system.',
    sys_staff_name: 'Staff Tools', sys_staff_desc: 'Administration tools.',
    sys_scoreboard_name: 'Scoreboard', sys_scoreboard_desc: 'Animated and configurable scoreboards.',
    sys_clearlag_name: 'ClearLag', sys_clearlag_desc: 'Periodically removes entities to optimize performance.',
    sys_mobstack_name: 'MobStack', sys_mobstack_desc: 'Automatic mob stacking system.',
    sys_tabulator_name: 'Tabulator / Nicknames', sys_tabulator_desc: 'Complete tab and nickname customization.',
    sys_afk_name: 'AFK Zone', sys_afk_desc: '100% configurable AFK Zone system.',
    sys_updates_name: 'Constant Updates', sys_updates_desc: 'New features and improvements continually.',
    /* INDEX — Lunar & MySQL */
    lunar_title: '<span class="accent-orange">Lunar</span> Client',
    lunar_desc:  'Integration with <strong>Lunar Client</strong> for an improved gaming experience.<br>Full API support for exclusive client-side functions.',
    lunar_badge: 'Full API Support',
    mysql_title: '<span class="accent-blue">MySQL</span> Support',
    mysql_desc:  'Full <strong>MySQL database</strong> integration for persistent data storage.<br>Compatible with any external database provider.',
    mysql_badge: 'Database Ready',
    /* COMMANDS — section titles */
    sec_homes:   'Home System',   sec_kits:    'Kit System',
    sec_economy: 'Economy',       sec_chat:    'Chat & Messaging',
    sec_tpa:     'TPA System',    sec_afk:     'AFK',
    sec_clans:   'Clan System',   sec_crates:  'Crate System',
    sec_combat:  'Combat & KOTH', sec_staff:   'Staff Tools',
    sec_utility: 'General Utility',
    cmd_word:    'commands',
    /* INTEGRATIONS */
    notice_text:        'Required Integrations — Apollo & Paper must be installed. The plugin will not load without them.',
    badge_required:     'Required',    badge_optional:    'Optional',
    int_apollo_name:    'Apollo',      int_apollo_version: 'Lunar Client API',
    int_apollo_desc:    'The <strong>Lunar Client API</strong> used by SDF Survival Core to deliver enhanced player experiences — custom waypoints, team indicators, rich title overlays and Lunar-native HUD elements.',
    int_apollo_link:    'GitHub → LunarClient/Apollo',
    int_paper_name:     'Paper',       int_paper_version:  '1.21+ recommended',
    int_paper_desc:     'SDF Survival Core is built specifically for <strong>Paper</strong>. It relies on Paper\'s extended API for async chunk loading, event system, performance optimizations and modern packet handling.',
    int_paper_link:     'papermc.io/downloads',
    int_luckperms_name: 'LuckPerms',   int_luckperms_version: 'Permission Manager',
    int_luckperms_desc: 'Enables <strong>rank-based permission nodes</strong> for all SDF systems. Without LuckPerms, permission management must be handled by your server\'s default system.',
    int_luckperms_link: 'luckperms.net',
    int_vault_name:     'Vault',       int_vault_version:  'Economy API',
    int_vault_desc:     'Required only if you want to use <strong>economy features</strong> — balances, shops, bounties and economy commands. Without Vault the economy module will be automatically disabled.',
    int_vault_link:     'SpigotMC → Vault',
    int_papi_name:      'PlaceholderAPI', int_papi_version: 'PAPI Variables',
    int_papi_desc:      'Exposes all SDF stats as <strong>PAPI placeholders</strong> usable across your server — scoreboards, tab lists, chat formats and any other PAPI-compatible plugin.',
    int_papi_link:      'SpigotMC → PAPI',
    int_wg_name:        'WorldGuard',  int_wg_version:     'Region Control',
    int_wg_desc:        'Integrates with SDF to allow <strong>region-based PvP control</strong> — safe zones, spawn protection, no-PvP areas and zone-specific rules for KOTH and combat systems.',
    int_wg_link:        'BukkitDev → WorldGuard',
    feat_rich_title:    'Rich Title API', feat_waypoints:    'Waypoints',
    feat_team_display:  'Team Display',   feat_custom_hud:   'Custom HUD',
    feat_combat_tags:   'Combat Tags',    feat_paper_api:    'Paper API',
    feat_async_chunks:  'Async Chunks',   feat_event_system: 'Event System',
    feat_performance:   'Performance',    feat_rank_nodes:   'Rank Nodes',
    feat_per_group:     'Per-Group Config', feat_vip_tiers:  'VIP Tiers',
    feat_staff_roles:   'Staff Roles',    feat_economy_api:  'Economy API',
    feat_balances:      'Balances',       feat_bounty_system:'Bounty System',
    feat_shop_int:      'Shop Integration', feat_custom_vars:'Custom Variables',
    feat_scoreboard:    'Scoreboard',     feat_tab_list:     'Tab List',
    feat_chat_format:   'Chat Format',    feat_pvp_regions:  'PvP Regions',
    feat_safe_zones:    'Safe Zones',     feat_spawn_shield: 'Spawn Shield',
    feat_koth_zones:    'KOTH Zones',
    /* COMMANDS descriptions */
    cmd_home: 'Teleports the player to their home. Without argument, shows the list of available homes.',
    cmd_sethome: 'Sets a home at the current position. Maximum number of homes based on the core.homes.N permission (1–20).',
    cmd_delhome: 'Deletes a saved home of the player.',
    cmd_adminhome: 'Allows staff to view and manage any player\'s homes from a GUI menu.',
    cmd_kit: 'Opens the available kits menu. If a name is specified, claims that kit. Each kit has its own permission and cooldown.',
    cmd_createkit: 'Creates a new kit using the administrator\'s current inventory.',
    cmd_deletekit: 'Deletes an existing kit from the system.',
    cmd_balance: 'Shows the player\'s balance. With argument, checks another player\'s balance (requires extra permission).',
    cmd_balancetop: 'Shows the ranking of the richest players on the server with a paginated interface.',
    cmd_pay: 'Transfers money to another server player.',
    cmd_eco: 'Manages player money. Allows giving, removing or setting balance directly.',
    cmd_msg: 'Sends a private message to another player.',
    cmd_reply: 'Replies to the last player who sent you a private message.',
    cmd_msgtoggle: 'Enables or disables receiving private messages.',
    cmd_ignore: 'Ignores or stops ignoring messages from a specific player.',
    cmd_helpop: 'Sends a help request to online staff. Has configurable cooldown.',
    cmd_report: 'Sends a report to online staff. Has configurable cooldown.',
    cmd_reports: 'Allows you to review all reports for a player.',
    cmd_broadcast: 'Sends a global message to all server players with special formatting.',
    cmd_clearchat: 'Clears the chat for all server players.',
    cmd_mutechat: 'Silences or enables the global server chat. Only staff can write while it\'s muted.',
    cmd_slowchat: 'Sets the cooldown between chat messages for players.',
    cmd_staffchat: 'Private chat channel exclusive to staff members.',
    cmd_tpa: 'Sends a teleport request to another player.',
    cmd_tpahere: 'Requests another player to teleport to your position.',
    cmd_tpaccept: 'Accepts a pending teleport request.',
    cmd_tpdeny: 'Denies a pending teleport request.',
    cmd_tpall: 'Teleports all server players to the executor\'s position.',
    cmd_tphere: 'Teleports a player to your position.',
    cmd_tpoffline: 'Teleports you to an offline player\'s last known position.',
    cmd_afk: 'Marks the player as AFK (away from keyboard). Deactivates automatically upon movement.',
    cmd_createafk: 'Creates a new AFK zone with the given name at the current position. Players inside receive benefits for being inactive.',
    cmd_deleteafk: 'Permanently deletes an existing AFK zone from the server.',
    cmd_listafk: 'Lists all AFK zones configured on the server with their names and locations.',
    cmd_clancreate: 'Creates a new clan with the specified name. The player becomes the leader.',
    cmd_claninvite: 'Invites a player to join the clan. Only the leader or captains can invite.',
    cmd_clanjoin: 'Accepts an invitation and joins the specified clan.',
    cmd_clanleave: 'Leaves the player\'s current clan.',
    cmd_clankick: 'Kicks a member from the clan. Only the leader or captains can use this command.',
    cmd_clanpromote: 'Promotes a clan member to a higher rank (captain). Only the leader can promote.',
    cmd_clandisband: 'Permanently dissolves the clan. Only the leader can execute this command. Requires confirmation.',
    cmd_clansetbase: 'Sets the clan base at the current position. Only the leader or captains can change it.',
    cmd_clanbase: 'Teleports the player to the clan base. Has configurable cooldown.',
    cmd_clandeposit: 'Deposits money into the clan bank. All members can contribute to the clan\'s finances.',
    cmd_clanwithdraw: 'Withdraws money from the clan bank. Only the leader or captains can withdraw funds.',
    cmd_clanally: 'Sends or accepts an alliance request with another clan. Allies don\'t deal damage to each other.',
    cmd_clanunally: 'Removes the alliance with another clan.',
    cmd_clansummon: 'Summons all clan members by sending them an alert to gather at a meeting point.',
    cmd_clanstats: 'Shows detailed clan statistics: kills, deaths, bank, level and active members.',
    cmd_claninfo: 'Shows general information about a clan: members, leader, level and alliances.',
    cmd_clanchat: 'Sends a message to the clan\'s private chat, visible only to members.',
    cmd_clantopscore: 'Shows the ranking of the best clans on the server ordered by score.',
    cmd_clantopdeath: 'Shows the ranking of the best clans on the server ordered by deaths.',
    cmd_clantopkills: 'Shows the ranking of the best clans on the server ordered by kills.',
    cmd_clantopmoney: 'Shows the ranking of the best clans on the server ordered by money.',
    cmd_createcrate: 'Creates a crate to set up all the prizes inside.',
    cmd_deletecrate: 'Deletes a crate.',
    cmd_setcratekey: 'Sets the item required to open the crate.',
    cmd_setcratecolor: 'Sets the crate\'s color.',
    cmd_setcrateloot: 'Sets the loot for the crate.',
    cmd_setcrateloc: 'Marks the location of the crate.',
    cmd_removecratblocks: 'Removes the assigned blocks from the crate.',
    cmd_listcrates: 'Shows all available crates.',
    cmd_cratepreview: 'Views rewards by type: Wheel - CSGO - SPIN - DROP - FLICKER.',
    cmd_givekey: 'Gives a key to a player or to all players.',
    cmd_bountyset: 'Places a monetary bounty on a player\'s head. Anyone who kills them will receive the money automatically.',
    cmd_bountylist: 'Shows all active bounties on the server sorted by amount.',
    cmd_kothlist: 'Shows all available KOTH events on the server with their current status (active, inactive, scheduled).',
    cmd_kothcreate: 'Creates a new KOTH event with the given name. The capture zone and loot are configured afterwards.',
    cmd_kothdelete: 'Permanently deletes an existing KOTH event and all its configuration.',
    cmd_kothzone: 'Defines the KOTH capture zone at the admin\'s current position. Players must stay inside to win.',
    cmd_kothtime: 'Sets the total capture time required to win the KOTH event in seconds.',
    cmd_kothreward: 'Opens the KOTH reward editor. Configures items and money the winner will receive.',
    cmd_kothschedule: 'Schedules an automatic KOTH start at a specific time of day. Allows multiple schedules per event.',
    cmd_kothschedules: 'Shows the scheduled times for a specific KOTH event.',
    cmd_staffmode: 'Toggles staff mode. Provides special moderation tools and visibility.',
    cmd_vanish: 'Makes the staff member invisible to regular players. Ideal for covert moderation.',
    cmd_freeze: 'Freezes a player, preventing them from moving. Useful for investigations or screenshares.',
    cmd_invsee: 'Opens another player\'s inventory to inspect it in real time.',
    cmd_find: 'Shows the exact location (world, coordinates) of an online player.',
    cmd_gm: 'Changes gamemode. Shortcuts: /gms (survival), /gmc (creative), /gma (adventure), /gmspec (spectator).',
    cmd_fly: 'Toggles flight. Without argument applies to the player themselves; with argument requires extra admin permission.',
    cmd_slots: 'Manages the number of server slots or shows current capacity information.',
    cmd_reload: 'Reloads the SurvivalSDFCore plugin configuration without restarting the server.',
    cmd_spawner: 'Gives a spawner of the specified mob type to the player. For economy and shop management.',
    cmd_enchant: 'Enchants the held item to the specified level.',
    cmd_spawn: 'Teleports the player to the main spawn. Has cooldown. Admins can send other players.',
    cmd_setspawn: 'Sets the server spawn point at the administrator\'s current position.',
    cmd_back: 'Returns to the last location before the player\'s teleport or death.',
    cmd_ping: 'Shows own or another player\'s ping (latency). Viewing others\' ping requires extra permission.',
    cmd_near: 'Shows nearby players to the executor with their approximate distances.',
    cmd_craft: 'Opens a portable crafting table from anywhere without needing a block.',
    cmd_anvil: 'Opens a portable anvil from anywhere.',
    cmd_enderchest: 'Opens a portable ender chest from anywhere without needing a block.',
    cmd_repair: 'Repairs the held item. With all, repairs the entire inventory (extra permission). Has cooldown.',
    cmd_compact: 'Compacts inventory materials into their block form (e.g.: 9 ingots → 1 iron block).',
    cmd_hat: 'Places the held item as a cosmetic helmet on the head.',
    cmd_head: 'Gives a player head with the specified skin or the executor\'s skin.',
    cmd_rename: 'Renames the held item with color and format support.',
    cmd_clearinv: 'Clears the complete inventory of the player executing the command.',
    cmd_feed: 'Restores hunger to maximum. Has configurable cooldown.',
    cmd_scoreboard: 'Enables or disables the side scoreboard for the player.',
    cmd_list: 'Shows the list of online players organized by rank (staff, VIP, players).',
    cmd_stats: 'Shows player statistics.',
    cmd_deathstats: 'Shows the death statistics of players.',
    cmd_killstats: 'Shows the kill statistics of players.',
    cmd_playtimestats: 'Shows the playtime statistics of players.',
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
    /* CHANGELOG */
    badge_latest:    'Latest',
    badge_initial:   'Initial Release',
    prerelease_text: 'Plugin not yet released. v1.0.0 is the initial launch version — future updates will be documented here. Join our Discord to stay up to date.',
    /* INTEGRATIONS */
    eyebrow_integrations: 'SDF Survival Core · Integrations',
    title_integrations: '<span class="accent">INTEGR</span>ATIONS',
    sub_integrations: 'DEPENDENCIES',
    tagline_integrations: 'Required and optional integrations for SDF Survival Core. Make sure required ones are installed before first launch.',
    required_label: 'Required Integrations',
    optional_label: 'Optional Integrations',
    nav_integrations: 'Integrations',
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
    sys_koth_name: 'KOTH', sys_koth_desc: 'Sistema King of the Hill 100% configurable.',
    sys_clans_name: 'Clanes', sys_clans_desc: 'Sistema de clanes 100% configurable.',
    sys_combat_name: 'Combat PvP', sys_combat_desc: 'Sistema avanzado de combate PvP.',
    sys_economy_name: 'Economía', sys_economy_desc: 'Sistema de economía integrado con Vault.',
    sys_crates_name: 'Crates', sys_crates_desc: 'Cajas de botín con animaciones y recompensas.',
    sys_bounties_name: 'Recompensas', sys_bounties_desc: 'Sistema de recompensas por cazar jugadores.',
    sys_homes_name: 'Homes & TPA', sys_homes_desc: 'Sistema de hogares y teletransporte.',
    sys_leaderboards_name: 'Clasificaciones', sys_leaderboards_desc: 'Rankings de jugadores y clanes.',
    sys_kits_name: 'Kits', sys_kits_desc: 'Sistema de kits 100% configurable.',
    sys_staff_name: 'Staff Tools', sys_staff_desc: 'Herramientas de administración.',
    sys_scoreboard_name: 'Marcador', sys_scoreboard_desc: 'Marcadores animados y configurables.',
    sys_clearlag_name: 'ClearLag', sys_clearlag_desc: 'Elimina entidades periódicamente para optimizar.',
    sys_mobstack_name: 'MobStack', sys_mobstack_desc: 'Sistema automático de apilamiento de mobs.',
    sys_tabulator_name: 'Tabulator / Apodos', sys_tabulator_desc: 'Personalización completa del tab y apodos.',
    sys_afk_name: 'Zona AFK', sys_afk_desc: 'Sistema de Zona AFK 100% configurable.',
    sys_updates_name: 'Actualizaciones', sys_updates_desc: 'Nuevas funciones y mejoras continuamente.',
    lunar_title: '<span class="accent-orange">Lunar</span> Client',
    lunar_desc:  'Integración con <strong>Lunar Client</strong> para una experiencia de juego mejorada.<br>Soporte completo de API para funciones exclusivas del cliente.',
    lunar_badge: 'Soporte API Completo',
    mysql_title: '<span class="accent-blue">MySQL</span> Support',
    mysql_desc:  'Integración completa con <strong>base de datos MySQL</strong> para almacenamiento persistente.<br>Compatible con cualquier proveedor de base de datos externo.',
    mysql_badge: 'Base de Datos Lista',
    sec_homes:   'Sistema de Homes',  sec_kits:    'Sistema de Kits',
    sec_economy: 'Economía',          sec_chat:    'Chat y Mensajería',
    sec_tpa:     'Sistema TPA',       sec_afk:     'AFK',
    sec_clans:   'Sistema de Clanes', sec_crates:  'Sistema de Cajas',
    sec_combat:  'Combate y KOTH',    sec_staff:   'Herramientas Staff',
    sec_utility: 'Utilidades Generales',
    cmd_word:    'comandos',
    notice_text:        'Integraciones Obligatorias — Apollo y Paper deben estar instalados. El plugin no cargará sin ellos.',
    badge_required:     'Obligatorio',  badge_optional:    'Opcional',
    int_apollo_name:    'Apollo',       int_apollo_version: 'Lunar Client API',
    int_apollo_desc:    'La <strong>API de Lunar Client</strong> usada por SDF Survival Core para ofrecer experiencias mejoradas — waypoints personalizados, indicadores de equipo, títulos y elementos HUD nativos de Lunar.',
    int_apollo_link:    'GitHub → LunarClient/Apollo',
    int_paper_name:     'Paper',        int_paper_version:  '1.21+ recomendado',
    int_paper_desc:     'SDF Survival Core está construido específicamente para <strong>Paper</strong>. Depende de la API extendida de Paper para carga de chunks asíncrona, sistema de eventos, optimizaciones y gestión de paquetes moderna.',
    int_paper_link:     'papermc.io/downloads',
    int_luckperms_name: 'LuckPerms',    int_luckperms_version: 'Gestor de Permisos',
    int_luckperms_desc: 'Activa los <strong>nodos de permisos por rango</strong> para todos los sistemas SDF. Sin LuckPerms, la gestión de permisos debe hacerse con el sistema por defecto del servidor.',
    int_luckperms_link: 'luckperms.net',
    int_vault_name:     'Vault',        int_vault_version:  'API de Economía',
    int_vault_desc:     'Necesario solo si quieres usar las <strong>funciones de economía</strong> — saldos, tiendas, recompensas y comandos económicos. Sin Vault, el módulo de economía se desactivará automáticamente.',
    int_vault_link:     'SpigotMC → Vault',
    int_papi_name:      'PlaceholderAPI', int_papi_version: 'Variables PAPI',
    int_papi_desc:      'Expone todas las estadísticas de SDF como <strong>placeholders de PAPI</strong> usables en todo el servidor — marcadores, tab, formatos de chat y cualquier plugin compatible con PAPI.',
    int_papi_link:      'SpigotMC → PAPI',
    int_wg_name:        'WorldGuard',   int_wg_version:     'Control de Regiones',
    int_wg_desc:        'Se integra con SDF para permitir el <strong>control de PvP por regiones</strong> — zonas seguras, protección de spawn, áreas sin PvP y reglas específicas para KOTH y combate.',
    int_wg_link:        'BukkitDev → WorldGuard',
    feat_rich_title:    'API de Títulos',  feat_waypoints:    'Waypoints',
    feat_team_display:  'Equipo Visual',   feat_custom_hud:   'HUD Personalizado',
    feat_combat_tags:   'Tags de Combate', feat_paper_api:    'Paper API',
    feat_async_chunks:  'Chunks Asíncronos', feat_event_system: 'Sistema de Eventos',
    feat_performance:   'Rendimiento',     feat_rank_nodes:   'Nodos de Rango',
    feat_per_group:     'Config por Grupo', feat_vip_tiers:   'Niveles VIP',
    feat_staff_roles:   'Roles Staff',     feat_economy_api:  'API de Economía',
    feat_balances:      'Saldos',          feat_bounty_system:'Sistema de Recompensas',
    feat_shop_int:      'Integración Tienda', feat_custom_vars:'Variables Personalizadas',
    feat_scoreboard:    'Marcador',        feat_tab_list:     'Lista Tab',
    feat_chat_format:   'Formato Chat',    feat_pvp_regions:  'Regiones PvP',
    feat_safe_zones:    'Zonas Seguras',   feat_spawn_shield: 'Escudo Spawn',
    feat_koth_zones:    'Zonas KOTH',
    cmd_home: 'Teletransporta al jugador a su hogar. Sin argumento, muestra la lista de hogares disponibles.',
    cmd_sethome: 'Establece un hogar en la posición actual. Máximo de hogares según el permiso core.homes.N (1–20).',
    cmd_delhome: 'Elimina un hogar guardado del jugador.',
    cmd_adminhome: 'Permite al staff ver y gestionar los hogares de cualquier jugador desde un menú GUI.',
    cmd_kit: 'Abre el menú de kits disponibles. Si se especifica un nombre, reclama ese kit. Cada kit tiene su propio permiso y cooldown.',
    cmd_createkit: 'Crea un nuevo kit usando el inventario actual del administrador.',
    cmd_deletekit: 'Elimina un kit existente del sistema.',
    cmd_balance: 'Muestra el saldo del jugador. Con argumento, consulta el saldo de otro jugador (requiere permiso extra).',
    cmd_balancetop: 'Muestra el ranking de los jugadores más ricos del servidor con interfaz paginada.',
    cmd_pay: 'Transfiere dinero a otro jugador del servidor.',
    cmd_eco: 'Gestiona el dinero de los jugadores. Permite dar, quitar o establecer el saldo directamente.',
    cmd_msg: 'Envía un mensaje privado a otro jugador.',
    cmd_reply: 'Responde al último jugador que te envió un mensaje privado.',
    cmd_msgtoggle: 'Activa o desactiva la recepción de mensajes privados.',
    cmd_ignore: 'Ignora o deja de ignorar los mensajes de un jugador específico.',
    cmd_helpop: 'Envía una solicitud de ayuda al staff en línea. Tiene cooldown configurable.',
    cmd_report: 'Envía un reporte al staff en línea. Tiene cooldown configurable.',
    cmd_reports: 'Permite revisar todos los reportes de un jugador.',
    cmd_broadcast: 'Envía un mensaje global a todos los jugadores del servidor con formato especial.',
    cmd_clearchat: 'Limpia el chat para todos los jugadores del servidor.',
    cmd_mutechat: 'Silencia o activa el chat global del servidor. Solo el staff puede escribir mientras está silenciado.',
    cmd_slowchat: 'Establece el cooldown entre mensajes de chat para los jugadores.',
    cmd_staffchat: 'Canal de chat privado exclusivo para miembros del staff.',
    cmd_tpa: 'Envía una solicitud de teletransporte a otro jugador.',
    cmd_tpahere: 'Solicita a otro jugador que se teletransporte a tu posición.',
    cmd_tpaccept: 'Acepta una solicitud de teletransporte pendiente.',
    cmd_tpdeny: 'Rechaza una solicitud de teletransporte pendiente.',
    cmd_tpall: 'Teletransporta a todos los jugadores del servidor a la posición del ejecutor.',
    cmd_tphere: 'Teletransporta a un jugador a tu posición.',
    cmd_tpoffline: 'Te teletransporta a la última posición conocida de un jugador desconectado.',
    cmd_afk: 'Marca al jugador como AFK (ausente). Se desactiva automáticamente al moverse.',
    cmd_createafk: 'Crea una nueva zona AFK con el nombre dado en la posición actual. Los jugadores dentro reciben beneficios por estar inactivos.',
    cmd_deleteafk: 'Elimina permanentemente una zona AFK existente del servidor.',
    cmd_listafk: 'Lista todas las zonas AFK configuradas en el servidor con sus nombres y ubicaciones.',
    cmd_clancreate: 'Crea un nuevo clan con el nombre especificado. El jugador se convierte en el líder.',
    cmd_claninvite: 'Invita a un jugador a unirse al clan. Solo el líder o capitanes pueden invitar.',
    cmd_clanjoin: 'Acepta una invitación y se une al clan especificado.',
    cmd_clanleave: 'El jugador abandona su clan actual.',
    cmd_clankick: 'Expulsa a un miembro del clan. Solo el líder o capitanes pueden usar este comando.',
    cmd_clanpromote: 'Asciende a un miembro del clan a un rango superior (capitán). Solo el líder puede ascender.',
    cmd_clandisband: 'Disuelve permanentemente el clan. Solo el líder puede ejecutar este comando. Requiere confirmación.',
    cmd_clansetbase: 'Establece la base del clan en la posición actual. Solo el líder o capitanes pueden cambiarla.',
    cmd_clanbase: 'Teletransporta al jugador a la base del clan. Tiene cooldown configurable.',
    cmd_clandeposit: 'Deposita dinero en el banco del clan. Todos los miembros pueden contribuir.',
    cmd_clanwithdraw: 'Retira dinero del banco del clan. Solo el líder o capitanes pueden retirar fondos.',
    cmd_clanally: 'Envía o acepta una solicitud de alianza con otro clan. Los aliados no se hacen daño entre sí.',
    cmd_clanunally: 'Elimina la alianza con otro clan.',
    cmd_clansummon: 'Convoca a todos los miembros del clan enviándoles una alerta para reunirse.',
    cmd_clanstats: 'Muestra estadísticas detalladas del clan: kills, muertes, banco, nivel y miembros activos.',
    cmd_claninfo: 'Muestra información general de un clan: miembros, líder, nivel y alianzas.',
    cmd_clanchat: 'Envía un mensaje al chat privado del clan, visible solo para los miembros.',
    cmd_clantopscore: 'Muestra el ranking de los mejores clanes del servidor ordenado por puntuación.',
    cmd_clantopdeath: 'Muestra el ranking de los mejores clanes del servidor ordenado por muertes.',
    cmd_clantopkills: 'Muestra el ranking de los mejores clanes del servidor ordenado por kills.',
    cmd_clantopmoney: 'Muestra el ranking de los mejores clanes del servidor ordenado por dinero.',
    cmd_createcrate: 'Crea una caja para configurar todos los premios en su interior.',
    cmd_deletecrate: 'Elimina una caja.',
    cmd_setcratekey: 'Establece el objeto requerido para abrir la caja.',
    cmd_setcratecolor: 'Establece el color de la caja.',
    cmd_setcrateloot: 'Establece el botín de la caja.',
    cmd_setcrateloc: 'Marca la ubicación de la caja.',
    cmd_removecratblocks: 'Elimina los bloques asignados a la caja.',
    cmd_listcrates: 'Muestra todas las cajas disponibles.',
    cmd_cratepreview: 'Ver recompensas por tipo: Wheel - CSGO - SPIN - DROP - FLICKER.',
    cmd_givekey: 'Da una llave a un jugador o a todos los jugadores.',
    cmd_bountyset: 'Coloca una recompensa monetaria sobre la cabeza de un jugador. Quien lo mate recibirá el dinero automáticamente.',
    cmd_bountylist: 'Muestra todas las recompensas activas en el servidor ordenadas por cantidad.',
    cmd_kothlist: 'Muestra todos los eventos KOTH disponibles en el servidor con su estado actual.',
    cmd_kothcreate: 'Crea un nuevo evento KOTH con el nombre dado. La zona de captura y el botín se configuran después.',
    cmd_kothdelete: 'Elimina permanentemente un evento KOTH existente y toda su configuración.',
    cmd_kothzone: 'Define la zona de captura del KOTH en la posición actual del admin. Los jugadores deben permanecer dentro para ganar.',
    cmd_kothtime: 'Establece el tiempo total de captura necesario para ganar el evento KOTH en segundos.',
    cmd_kothreward: 'Abre el editor de recompensas del KOTH. Configura los ítems y el dinero que recibirá el ganador.',
    cmd_kothschedule: 'Programa un inicio automático del KOTH a una hora específica del día.',
    cmd_kothschedules: 'Muestra los horarios programados para un evento KOTH específico.',
    cmd_staffmode: 'Activa o desactiva el modo staff. Proporciona herramientas especiales de moderación.',
    cmd_vanish: 'Hace invisible al miembro del staff para los jugadores normales. Ideal para moderación encubierta.',
    cmd_freeze: 'Congela a un jugador, impidiéndole moverse. Útil para investigaciones o screenshares.',
    cmd_invsee: 'Abre el inventario de otro jugador para inspeccionarlo en tiempo real.',
    cmd_find: 'Muestra la ubicación exacta (mundo, coordenadas) de un jugador en línea.',
    cmd_gm: 'Cambia el modo de juego. Atajos: /gms (supervivencia), /gmc (creativo), /gma (aventura), /gmspec (espectador).',
    cmd_fly: 'Activa o desactiva el vuelo. Sin argumento aplica al propio jugador; con argumento requiere permiso de admin.',
    cmd_slots: 'Gestiona el número de slots del servidor o muestra información de capacidad actual.',
    cmd_reload: 'Recarga la configuración del plugin SurvivalSDFCore sin reiniciar el servidor.',
    cmd_spawner: 'Da un spawner del tipo de mob especificado al jugador. Para gestión de economía y tienda.',
    cmd_enchant: 'Encanta el ítem en la mano al nivel especificado.',
    cmd_spawn: 'Teletransporta al jugador al spawn principal. Tiene cooldown. Los admins pueden enviar a otros jugadores.',
    cmd_setspawn: 'Establece el punto de spawn del servidor en la posición actual del administrador.',
    cmd_back: 'Vuelve a la última ubicación antes del teletransporte o muerte del jugador.',
    cmd_ping: 'Muestra el ping (latencia) propio o de otro jugador. Ver el ping de otros requiere permiso extra.',
    cmd_near: 'Muestra los jugadores cercanos al ejecutor con sus distancias aproximadas.',
    cmd_craft: 'Abre una mesa de crafteo portátil desde cualquier lugar sin necesitar un bloque.',
    cmd_anvil: 'Abre un yunque portátil desde cualquier lugar.',
    cmd_enderchest: 'Abre un cofre de ender portátil desde cualquier lugar sin necesitar un bloque.',
    cmd_repair: 'Repara el ítem en la mano. Con all, repara todo el inventario (permiso extra). Tiene cooldown.',
    cmd_compact: 'Compacta materiales del inventario en su forma de bloque (ej: 9 lingotes → 1 bloque de hierro).',
    cmd_hat: 'Coloca el ítem en la mano como casco cosmético en la cabeza.',
    cmd_head: 'Da una cabeza de jugador con la skin especificada o la del ejecutor.',
    cmd_rename: 'Renombra el ítem en la mano con soporte de colores y formatos.',
    cmd_clearinv: 'Limpia el inventario completo del jugador que ejecuta el comando.',
    cmd_feed: 'Restaura el hambre al máximo. Tiene cooldown configurable.',
    cmd_scoreboard: 'Activa o desactiva el marcador lateral para el jugador.',
    cmd_list: 'Muestra la lista de jugadores en línea organizados por rango (staff, VIP, jugadores).',
    cmd_stats: 'Muestra las estadísticas del jugador.',
    cmd_deathstats: 'Muestra las estadísticas de muertes de los jugadores.',
    cmd_killstats: 'Muestra las estadísticas de kills de los jugadores.',
    cmd_playtimestats: 'Muestra las estadísticas de tiempo de juego de los jugadores.',
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
    badge_latest:    'Último',
    badge_initial:   'Lanzamiento Inicial',
    prerelease_text: 'Plugin aún no lanzado. v1.0.0 es la versión de lanzamiento inicial — las futuras actualizaciones se documentarán aquí. Únete a nuestro Discord para estar al día.',
    eyebrow_integrations: 'SDF Survival Core · Integraciones',
    title_integrations: '<span class="accent">INTEGR</span>ACIONES',
    sub_integrations: 'DEPENDENCIAS',
    tagline_integrations: 'Integraciones requeridas y opcionales para SDF Survival Core. Asegúrate de tener las obligatorias instaladas antes del primer arranque.',
    required_label: 'Integraciones Obligatorias',
    optional_label: 'Integraciones Opcionales',
    nav_integrations: 'Integraciones',
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
    sys_koth_name: 'KOTH', sys_koth_desc: 'Système King of the Hill 100% configurable.',
    sys_clans_name: 'Clans', sys_clans_desc: 'Système de clans 100% configurable.',
    sys_combat_name: 'Combat PvP', sys_combat_desc: 'Système de combat PvP avancé.',
    sys_economy_name: 'Économie', sys_economy_desc: 'Système économique intégré avec Vault.',
    sys_crates_name: 'Caisses', sys_crates_desc: 'Caisses à butin avec animations et récompenses.',
    sys_bounties_name: 'Primes', sys_bounties_desc: 'Système de primes pour chasser les joueurs.',
    sys_homes_name: 'Homes & TPA', sys_homes_desc: 'Système de foyers et de téléportation.',
    sys_leaderboards_name: 'Classements', sys_leaderboards_desc: 'Classements des joueurs et des clans.',
    sys_kits_name: 'Kits', sys_kits_desc: 'Système de kits 100% configurable.',
    sys_staff_name: 'Outils Staff', sys_staff_desc: 'Outils d'administration.',
    sys_scoreboard_name: 'Tableau de bord', sys_scoreboard_desc: 'Tableaux de bord animés et configurables.',
    sys_clearlag_name: 'ClearLag', sys_clearlag_desc: 'Supprime périodiquement les entités pour optimiser.',
    sys_mobstack_name: 'MobStack', sys_mobstack_desc: 'Système automatique d'empilement de mobs.',
    sys_tabulator_name: 'Tabulator / Pseudos', sys_tabulator_desc: 'Personnalisation complète du tab et des pseudos.',
    sys_afk_name: 'Zone AFK', sys_afk_desc: 'Système de Zone AFK 100% configurable.',
    sys_updates_name: 'Mises à jour', sys_updates_desc: 'Nouvelles fonctionnalités et améliorations en continu.',
    lunar_title: '<span class="accent-orange">Lunar</span> Client',
    lunar_desc:  'Intégration avec <strong>Lunar Client</strong> pour une expérience de jeu améliorée.<br>Support API complet pour les fonctions exclusives côté client.',
    lunar_badge: 'Support API Complet',
    mysql_title: '<span class="accent-blue">MySQL</span> Support',
    mysql_desc:  'Intégration complète de <strong>base de données MySQL</strong> pour un stockage persistant.<br>Compatible avec tout fournisseur de base de données externe.',
    mysql_badge: 'Base de Données Prête',
    sec_homes:   'Système de Foyers',  sec_kits:    'Système de Kits',
    sec_economy: 'Économie',           sec_chat:    'Chat & Messagerie',
    sec_tpa:     'Système TPA',        sec_afk:     'AFK',
    sec_clans:   'Système de Clans',   sec_crates:  'Système de Caisses',
    sec_combat:  'Combat & KOTH',      sec_staff:   'Outils Staff',
    sec_utility: 'Utilitaires Généraux',
    cmd_word:    'commandes',
    notice_text:        'Intégrations Obligatoires — Apollo et Paper doivent être installés. Le plugin ne se chargera pas sans eux.',
    badge_required:     'Obligatoire',  badge_optional:    'Optionnel',
    int_apollo_name:    'Apollo',       int_apollo_version: 'Lunar Client API',
    int_apollo_desc:    'L\'<strong>API Lunar Client</strong> utilisée par SDF Survival Core pour offrir des expériences améliorées — waypoints personnalisés, indicateurs d\'équipe, titres enrichis et éléments HUD natifs Lunar.',
    int_apollo_link:    'GitHub → LunarClient/Apollo',
    int_paper_name:     'Paper',        int_paper_version:  '1.21+ recommandé',
    int_paper_desc:     'SDF Survival Core est conçu spécifiquement pour <strong>Paper</strong>. Il s\'appuie sur l\'API étendue de Paper pour le chargement asynchrone des chunks, le système d\'événements et la gestion moderne des paquets.',
    int_paper_link:     'papermc.io/downloads',
    int_luckperms_name: 'LuckPerms',    int_luckperms_version: 'Gestionnaire de Permissions',
    int_luckperms_desc: 'Active les <strong>nœuds de permission par rang</strong> pour tous les systèmes SDF. Sans LuckPerms, la gestion des permissions doit être gérée par le système par défaut du serveur.',
    int_luckperms_link: 'luckperms.net',
    int_vault_name:     'Vault',        int_vault_version:  'API Économique',
    int_vault_desc:     'Nécessaire uniquement si vous voulez utiliser les <strong>fonctionnalités économiques</strong> — soldes, boutiques, primes et commandes économiques. Sans Vault, le module économique sera automatiquement désactivé.',
    int_vault_link:     'SpigotMC → Vault',
    int_papi_name:      'PlaceholderAPI', int_papi_version: 'Variables PAPI',
    int_papi_desc:      'Expose toutes les statistiques SDF en tant que <strong>placeholders PAPI</strong> utilisables sur tout le serveur — tableaux de bord, tab, formats de chat et tout plugin compatible PAPI.',
    int_papi_link:      'SpigotMC → PAPI',
    int_wg_name:        'WorldGuard',   int_wg_version:     'Contrôle des Régions',
    int_wg_desc:        'S\'intègre avec SDF pour permettre le <strong>contrôle du PvP par région</strong> — zones sécurisées, protection du spawn, zones sans PvP et règles spécifiques pour KOTH et le combat.',
    int_wg_link:        'BukkitDev → WorldGuard',
    feat_rich_title:    'API de Titres',    feat_waypoints:    'Waypoints',
    feat_team_display:  'Affichage Équipe', feat_custom_hud:   'HUD Personnalisé',
    feat_combat_tags:   'Tags Combat',      feat_paper_api:    'Paper API',
    feat_async_chunks:  'Chunks Async',     feat_event_system: 'Système d\'Événements',
    feat_performance:   'Performance',      feat_rank_nodes:   'Nœuds de Rang',
    feat_per_group:     'Config par Groupe', feat_vip_tiers:   'Niveaux VIP',
    feat_staff_roles:   'Rôles Staff',      feat_economy_api:  'API Économique',
    feat_balances:      'Soldes',           feat_bounty_system:'Système de Primes',
    feat_shop_int:      'Intégration Boutique', feat_custom_vars:'Variables Personnalisées',
    feat_scoreboard:    'Tableau de Bord',  feat_tab_list:     'Liste Tab',
    feat_chat_format:   'Format Chat',      feat_pvp_regions:  'Régions PvP',
    feat_safe_zones:    'Zones Sécurisées', feat_spawn_shield: 'Bouclier Spawn',
    feat_koth_zones:    'Zones KOTH',
    cmd_home: 'Téléporte le joueur à son foyer. Sans argument, affiche la liste des foyers disponibles.',
    cmd_sethome: 'Définit un foyer à la position actuelle. Nombre maximum de foyers selon la permission core.homes.N (1–20).',
    cmd_delhome: 'Supprime un foyer enregistré du joueur.',
    cmd_adminhome: 'Permet au staff de voir et gérer les foyers de n\'importe quel joueur via un menu GUI.',
    cmd_kit: 'Ouvre le menu des kits disponibles. Si un nom est spécifié, réclame ce kit. Chaque kit a sa propre permission et cooldown.',
    cmd_createkit: 'Crée un nouveau kit en utilisant l\'inventaire actuel de l\'administrateur.',
    cmd_deletekit: 'Supprime un kit existant du système.',
    cmd_balance: 'Affiche le solde du joueur. Avec un argument, vérifie le solde d\'un autre joueur (permission requise).',
    cmd_balancetop: 'Affiche le classement des joueurs les plus riches du serveur avec une interface paginée.',
    cmd_pay: 'Transfère de l\'argent à un autre joueur du serveur.',
    cmd_eco: 'Gère l\'argent des joueurs. Permet de donner, retirer ou définir le solde directement.',
    cmd_msg: 'Envoie un message privé à un autre joueur.',
    cmd_reply: 'Répond au dernier joueur qui vous a envoyé un message privé.',
    cmd_msgtoggle: 'Active ou désactive la réception des messages privés.',
    cmd_ignore: 'Ignore ou arrête d\'ignorer les messages d\'un joueur spécifique.',
    cmd_helpop: 'Envoie une demande d\'aide au staff en ligne. A un cooldown configurable.',
    cmd_report: 'Envoie un signalement au staff en ligne. A un cooldown configurable.',
    cmd_reports: 'Permet de consulter tous les signalements d\'un joueur.',
    cmd_broadcast: 'Envoie un message global à tous les joueurs du serveur avec un formatage spécial.',
    cmd_clearchat: 'Efface le chat pour tous les joueurs du serveur.',
    cmd_mutechat: 'Réduit au silence ou réactive le chat global du serveur.',
    cmd_slowchat: 'Définit le délai entre les messages de chat pour les joueurs.',
    cmd_staffchat: 'Canal de chat privé exclusif aux membres du staff.',
    cmd_tpa: 'Envoie une demande de téléportation à un autre joueur.',
    cmd_tpahere: 'Demande à un autre joueur de se téléporter à votre position.',
    cmd_tpaccept: 'Accepte une demande de téléportation en attente.',
    cmd_tpdeny: 'Refuse une demande de téléportation en attente.',
    cmd_tpall: 'Téléporte tous les joueurs du serveur à la position de l\'exécuteur.',
    cmd_tphere: 'Téléporte un joueur à votre position.',
    cmd_tpoffline: 'Vous téléporte à la dernière position connue d\'un joueur déconnecté.',
    cmd_afk: 'Marque le joueur comme AFK. Se désactive automatiquement lors d\'un mouvement.',
    cmd_createafk: 'Crée une nouvelle zone AFK à la position actuelle. Les joueurs à l\'intérieur reçoivent des avantages.',
    cmd_deleteafk: 'Supprime définitivement une zone AFK existante du serveur.',
    cmd_listafk: 'Liste toutes les zones AFK configurées sur le serveur.',
    cmd_clancreate: 'Crée un nouveau clan avec le nom spécifié. Le joueur devient le leader.',
    cmd_claninvite: 'Invite un joueur à rejoindre le clan. Seul le leader ou les capitaines peuvent inviter.',
    cmd_clanjoin: 'Accepte une invitation et rejoint le clan spécifié.',
    cmd_clanleave: 'Le joueur quitte son clan actuel.',
    cmd_clankick: 'Expulse un membre du clan.',
    cmd_clanpromote: 'Promeut un membre du clan à un rang supérieur (capitaine).',
    cmd_clandisband: 'Dissout définitivement le clan. Requiert confirmation.',
    cmd_clansetbase: 'Définit la base du clan à la position actuelle.',
    cmd_clanbase: 'Téléporte le joueur à la base du clan. A un cooldown configurable.',
    cmd_clandeposit: 'Dépose de l\'argent dans la banque du clan.',
    cmd_clanwithdraw: 'Retire de l\'argent de la banque du clan.',
    cmd_clanally: 'Envoie ou accepte une demande d\'alliance avec un autre clan.',
    cmd_clanunally: 'Supprime l\'alliance avec un autre clan.',
    cmd_clansummon: 'Convoque tous les membres du clan.',
    cmd_clanstats: 'Affiche les statistiques détaillées du clan.',
    cmd_claninfo: 'Affiche les informations générales d\'un clan.',
    cmd_clanchat: 'Envoie un message au chat privé du clan.',
    cmd_clantopscore: 'Classement des meilleurs clans par score.',
    cmd_clantopdeath: 'Classement des meilleurs clans par morts.',
    cmd_clantopkills: 'Classement des meilleurs clans par kills.',
    cmd_clantopmoney: 'Classement des meilleurs clans par argent.',
    cmd_createcrate: 'Crée une caisse pour configurer tous les prix à l\'intérieur.',
    cmd_deletecrate: 'Supprime une caisse.',
    cmd_setcratekey: 'Définit l\'objet requis pour ouvrir la caisse.',
    cmd_setcratecolor: 'Définit la couleur de la caisse.',
    cmd_setcrateloot: 'Définit le butin de la caisse.',
    cmd_setcrateloc: 'Marque l\'emplacement de la caisse.',
    cmd_removecratblocks: 'Supprime les blocs assignés à la caisse.',
    cmd_listcrates: 'Affiche toutes les caisses disponibles.',
    cmd_cratepreview: 'Voir les récompenses par type : Wheel - CSGO - SPIN - DROP - FLICKER.',
    cmd_givekey: 'Donne une clé à un joueur ou à tous les joueurs.',
    cmd_bountyset: 'Place une prime monétaire sur la tête d\'un joueur.',
    cmd_bountylist: 'Affiche toutes les primes actives sur le serveur.',
    cmd_kothlist: 'Affiche tous les événements KOTH disponibles sur le serveur.',
    cmd_kothcreate: 'Crée un nouvel événement KOTH avec le nom donné.',
    cmd_kothdelete: 'Supprime définitivement un événement KOTH existant.',
    cmd_kothzone: 'Définit la zone de capture du KOTH à la position actuelle.',
    cmd_kothtime: 'Définit le temps de capture total requis pour gagner en secondes.',
    cmd_kothreward: 'Ouvre l\'éditeur de récompenses KOTH.',
    cmd_kothschedule: 'Programme un démarrage automatique du KOTH à une heure spécifique.',
    cmd_kothschedules: 'Affiche les horaires programmés pour un événement KOTH.',
    cmd_staffmode: 'Active ou désactive le mode staff.',
    cmd_vanish: 'Rend le membre du staff invisible aux joueurs normaux.',
    cmd_freeze: 'Gèle un joueur, l\'empêchant de se déplacer.',
    cmd_invsee: 'Ouvre l\'inventaire d\'un autre joueur pour l\'inspecter en temps réel.',
    cmd_find: 'Affiche la localisation exacte d\'un joueur en ligne.',
    cmd_gm: 'Change le mode de jeu. Raccourcis : /gms /gmc /gma /gmspec.',
    cmd_fly: 'Active ou désactive le vol.',
    cmd_slots: 'Gère le nombre de slots du serveur.',
    cmd_reload: 'Recharge la configuration du plugin sans redémarrer le serveur.',
    cmd_spawner: 'Donne un spawner du type de mob spécifié au joueur.',
    cmd_enchant: 'Enchante l\'objet en main au niveau spécifié.',
    cmd_spawn: 'Téléporte le joueur au spawn principal.',
    cmd_setspawn: 'Définit le point de spawn du serveur à la position actuelle.',
    cmd_back: 'Retourne à la dernière position avant la téléportation ou la mort.',
    cmd_ping: 'Affiche le ping du joueur ou d\'un autre joueur.',
    cmd_near: 'Affiche les joueurs proches avec leurs distances approximatives.',
    cmd_craft: 'Ouvre une table d\'artisanat portable.',
    cmd_anvil: 'Ouvre une enclume portable.',
    cmd_enderchest: 'Ouvre un coffre de l\'End portable.',
    cmd_repair: 'Répare l\'objet en main. Avec all, répare tout l\'inventaire.',
    cmd_compact: 'Compacte les matériaux de l\'inventaire en blocs.',
    cmd_hat: 'Place l\'objet en main comme casque cosmétique.',
    cmd_head: 'Donne une tête de joueur avec le skin spécifié.',
    cmd_rename: 'Renomme l\'objet en main avec support des couleurs.',
    cmd_clearinv: 'Vide l\'inventaire complet du joueur.',
    cmd_feed: 'Restaure la faim au maximum.',
    cmd_scoreboard: 'Active ou désactive le tableau de bord latéral.',
    cmd_list: 'Affiche la liste des joueurs en ligne organisés par rang.',
    cmd_stats: 'Affiche les statistiques du joueur.',
    cmd_deathstats: 'Affiche les statistiques de morts des joueurs.',
    cmd_killstats: 'Affiche les statistiques de kills des joueurs.',
    cmd_playtimestats: 'Affiche les statistiques de temps de jeu des joueurs.',
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
    badge_latest:    'Dernier',
    badge_initial:   'Version Initiale',
    prerelease_text: 'Plugin pas encore lancé. v1.0.0 est la version de lancement initiale — les futures mises à jour seront documentées ici. Rejoignez notre Discord pour rester informé.',
    eyebrow_integrations: 'SDF Survival Core · Intégrations',
    title_integrations: '<span class="accent">INTÉGR</span>ATIONS',
    sub_integrations: 'DÉPENDANCES',
    tagline_integrations: 'Intégrations requises et optionnelles pour SDF Survival Core. Assurez-vous que les obligatoires sont installées avant le premier lancement.',
    required_label: 'Intégrations Obligatoires',
    optional_label: 'Intégrations Optionnelles',
    nav_integrations: 'Intégrations',
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
