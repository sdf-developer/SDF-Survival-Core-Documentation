/* ──────────────────────────────────────
   MICROSOFT CLARITY — Analytics
────────────────────────────────────── */
(function(c,l,a,r,i,t,y){
  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "w34e0jgllk");

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
    prerelease_text: 'Plugin not yet released. <span>v1.0.0</span> is the initial launch version — future updates will be documented here. Join our <span>Discord</span> to stay up to date.',
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
    /* TERMS */
    nav_terms: 'Terms',
    nav_reviews: 'Reviews',
    nav_buy:         'Buy',
    eyebrow_terms:   'SDF Survival Core · Legal',
    sub_terms:       'TERMS & CONDITIONS',
    tagline_terms:   'Please read these terms carefully before purchasing or using SDF Survival Core.',
    legal_label:     'Legal document · March 2026',
    eyebrow_reviews: 'SDF Survival Core · Community',
    sub_reviews:     'COMMUNITY FEEDBACK',
    tagline_reviews: 'Real reviews from server owners and admins who use SDF Survival Core in production.',
    rev_stats_label: '// Community stats',
    rev_avg_label:   'Average rating',
    rev_total_label: 'Total reviews',
    rev_five_label:  '5-star reviews',
    rev_leave_label: '// Leave a review',
    rev_login_title: 'Login with Discord',
    rev_login_sub:   'Connect your Discord account to leave a review. Your username and avatar will be shown publicly.',
    rev_logged_sub:  'Logged in via Discord',
    rev_logout:      'Logout',
    rev_form_title:  'Write your review',
    rev_form_ph:     'Share your experience with SDF Survival Core...',
    rev_form_note:   'Your review will be visible after approval.',
    rev_submit:      'Submit review',
    rev_sending:     'Sending...',
    rev_success:     '✓ Review submitted! Loading...',
    rev_via:         'via Discord',
    rev_verified:    '✓ Verified',
    rev_empty:       'No reviews yet. Be the first!',
    rev_error_load:  'Could not load reviews. Please try again later.',
    rev_approved:    '// Approved reviews',
    rev_loading:     'Loading reviews...',
    /* BUY PAGE */
    eyebrow_buy:     'SDF Survival Core · Get the Plugin',
    sub_buy:         'GET STARTED',
    tagline_buy:     'Take your Survival server to the next level with the most complete all-in-one plugin.',
    buy_soon_badge:  'COMING SOON',
    buy_price_label: 'Launch price',
    buy_title:       'SDF Survival Core',
    buy_desc:        'Complete all-in-one plugin for Minecraft Survival servers. 400+ features, 150+ commands, MySQL support, Lunar Client integration and much more.',
    buy_btn:         'Coming Soon — BuildByBit',
    buy_note:        'Available soon on BuildByBit. Join Discord to be notified on launch.',
    buy_inc_title:   "What's included",
    buy_f1: '400+ features included', buy_f2: '150+ commands',
    buy_f3: 'MySQL database support', buy_f4: 'Lunar Client integration',
    buy_f5: 'Updates',                 buy_f6: 'Discord support',
    buy_f7: 'Multi-language EN/ES/FR', buy_f8: 'Single-server license',
    buy_faq_title:   'Frequently asked questions',
    buy_q1: "What server versions are supported?",
    buy_a1: "SDF Survival Core requires Paper 1.21+. It is not compatible with Spigot or vanilla servers.",
    buy_q2: "Is this a one-time payment?",
    buy_a2: "Yes, it's a one-time purchase. You get updates for the purchased major version at no extra cost.",
    buy_q3: "How many servers can I use it on?",
    buy_a3: "Each license covers one (1) server. If you need multiple servers, you need to purchase a license for each.",
    buy_q4: "What happens if it doesn't work?",
    buy_a4: "We offer a refund if the plugin is proven non-functional on a supported environment and the issue can't be resolved through support.",
    terms_s1_title: '1. License',
    terms_s1_body: 'SDF Survival Core is sold as a single-server license. Each purchase grants you the right to use the plugin on one (1) Minecraft server. You may not redistribute, resell, share or sublicense the plugin or its source code to any third party.',
    terms_s2_title: '2. Refund Policy',
    terms_s2_body: 'Due to the digital nature of this product, all sales are final. Refunds are only granted if the plugin is proven to be non-functional on a supported server environment (Paper 1.21+) and the issue cannot be resolved through support.',
    terms_s3_title: '3. Updates & Support',
    terms_s3_body: 'Your license includes access to all future updates for the purchased major version. Support is provided via Discord and email. We aim to respond within 24-48 hours on business days.',
    terms_s4_title: '4. Prohibited Use',
    terms_s4_body: 'You may not decompile, reverse-engineer, modify or publicly redistribute the plugin files. Use of the plugin to harm, exploit or gain an unfair advantage over other server operators or players is strictly prohibited.',
    terms_s5_title: '5. Liability',
    terms_s5_body: 'SDF Development is not liable for any server downtime, data loss or other damages resulting from the use or misuse of SDF Survival Core. It is your responsibility to keep backups of your server data.',
    terms_s6_title: '6. Changes to Terms',
    terms_s6_body: 'We reserve the right to update these terms at any time. Continued use of the plugin after changes constitutes acceptance of the new terms. We will announce significant changes via our Discord server.',
    /* HERO PRICE / BUY BUTTON */
    price_label_hero: 'Launch price',
    btn_get_hero: 'Get SDF Core',
    /* BADGE PLAYER */
    badge_player: 'Player',
    badge_staff: 'Staff',
    badge_vip: '⭐ VIP',
    copy_toast: '✓ Copied',
    terms_contact_title: 'Questions?',
    terms_contact_sub: 'If you have any questions about these terms, feel free to contact us.',
    terms_contact_cta: 'Contact us',
    terms_meta_text: 'Last updated',
    terms_meta_date: 'March 2026',
    /* SYSTEM MODALS */
    sys_modal_koth_badge: 'King of the Hill',
    sys_modal_koth_desc: 'A fully configurable <strong>King of the Hill</strong> event system. Schedule matches, set capture zones, configure rewards and manage everything from a clean GUI.',
    sys_modal_koth_f1: 'Configurable capture zones & times', sys_modal_koth_f2: 'Automatic scheduling system', sys_modal_koth_f3: 'Custom rewards per event', sys_modal_koth_f4: 'Multi-zone support', sys_modal_koth_f5: 'Live scoreboard integration',
    sys_modal_clans_badge: '100% Configurable',
    sys_modal_clans_desc: 'A complete <strong>clan management system</strong> with alliances, wars, territories and leveling. Built for competitive survival gameplay.',
    sys_modal_clans_f1: 'Clan creation, invites & ranks', sys_modal_clans_f2: 'Alliance & war system', sys_modal_clans_f3: 'Territory claiming', sys_modal_clans_f4: 'Clan chat & private messaging', sys_modal_clans_f5: 'Clan leaderboards',
    sys_modal_combat_badge: 'Advanced System',
    sys_modal_combat_desc: 'Advanced <strong>PvP combat system</strong> with combat tags, logout detection, damage indicators and configurable combat rules for your server.',
    sys_modal_combat_f1: 'Combat tag on hit', sys_modal_combat_f2: 'Logout detection & punishment', sys_modal_combat_f3: 'Damage indicators above heads', sys_modal_combat_f4: 'Configurable PvP zones', sys_modal_combat_f5: 'Kill streaks & rewards',
    sys_modal_economy_badge: 'Vault Integrated',
    sys_modal_economy_desc: 'Integrated <strong>economy system</strong> with full Vault support, bank accounts, transactions, taxes and a complete shop system.',
    sys_modal_economy_f1: 'Vault API integration', sys_modal_economy_f2: 'Player bank accounts', sys_modal_economy_f3: 'Transaction history', sys_modal_economy_f4: 'Configurable tax system', sys_modal_economy_f5: 'Admin eco commands',
    sys_modal_crates_badge: 'Loot Boxes',
    sys_modal_crates_desc: 'A fully animated <strong>crate system</strong> with customizable loot tables, hologram displays, key types and spin animations.',
    sys_modal_crates_f1: 'Animated spin opening', sys_modal_crates_f2: 'Custom loot tables with weights', sys_modal_crates_f3: 'Multiple key types', sys_modal_crates_f4: 'Hologram display above crates', sys_modal_crates_f5: 'Preview GUI before opening',
    sys_modal_bounties_badge: 'Hunter System',
    sys_modal_bounties_desc: 'A player-driven <strong>bounty system</strong> where players can place rewards on each other\'s heads. Creates emergent PvP incentives.',
    sys_modal_bounties_f1: 'Place bounties with money or items', sys_modal_bounties_f2: 'Leaderboard of most wanted', sys_modal_bounties_f3: 'Notifications on kill', sys_modal_bounties_f4: 'Configurable minimum bounty', sys_modal_bounties_f5: 'Anti-abuse protection',
    sys_modal_homes_badge: 'Teleport System',
    sys_modal_homes_desc: 'Complete <strong>home and teleport system</strong> with configurable limits per rank, TPA requests, warmup timers and warp management.',
    sys_modal_homes_f1: 'Multiple homes per rank', sys_modal_homes_f2: 'TPA request system', sys_modal_homes_f3: 'Configurable warmup timer', sys_modal_homes_f4: 'Warp management', sys_modal_homes_f5: 'Back command after death',
    sys_modal_leaderboards_badge: 'Ranking System',
    sys_modal_leaderboards_desc: 'Dynamic <strong>leaderboard system</strong> with hologram displays, GUI menus and PlaceholderAPI support for real-time stats.',
    sys_modal_leaderboards_f1: 'In-world hologram displays', sys_modal_leaderboards_f2: 'GUI leaderboard menu', sys_modal_leaderboards_f3: 'PlaceholderAPI variables', sys_modal_leaderboards_f4: 'Multiple stat categories', sys_modal_leaderboards_f5: 'Auto-refresh intervals',
    sys_modal_kits_badge: '100% Configurable',
    sys_modal_kits_desc: 'Fully configurable <strong>kit system</strong> with cooldowns per rank, GUI preview, one-time kits and item customization via config.',
    sys_modal_kits_f1: 'Per-rank cooldown timers', sys_modal_kits_f2: 'GUI kit selection menu', sys_modal_kits_f3: 'One-time & daily kits', sys_modal_kits_f4: 'Custom items & enchants', sys_modal_kits_f5: 'Kit preview before claiming',
    sys_modal_staff_badge: 'Admin Suite',
    sys_modal_staff_desc: 'Complete <strong>staff administration suite</strong> with vanish, freeze, inspect, spy and moderation tools for your team.',
    sys_modal_staff_f1: 'Vanish with fake quit/join', sys_modal_staff_f2: 'Player freeze command', sys_modal_staff_f3: 'Inventory & EC inspect', sys_modal_staff_f4: 'Social spy on messages', sys_modal_staff_f5: 'Staff chat channel',
    sys_modal_scoreboard_badge: 'Animated HUD',
    sys_modal_scoreboard_desc: 'Animated, fully configurable <strong>scoreboard system</strong> with per-world content, animated titles and PlaceholderAPI support.',
    sys_modal_scoreboard_f1: 'Animated title sequences', sys_modal_scoreboard_f2: 'Per-world scoreboards', sys_modal_scoreboard_f3: 'PlaceholderAPI variables', sys_modal_scoreboard_f4: 'Toggle command for players', sys_modal_scoreboard_f5: 'Flicker-free updates',
    sys_modal_clearlag_badge: 'Performance',
    sys_modal_clearlag_desc: 'Server optimization tool that <strong>periodically removes dropped entities</strong> with configurable warnings, broadcast messages and entity whitelists.',
    sys_modal_clearlag_f1: 'Configurable countdown warnings', sys_modal_clearlag_f2: 'Broadcast before clearing', sys_modal_clearlag_f3: 'Entity type whitelist', sys_modal_clearlag_f4: 'Auto-clear interval', sys_modal_clearlag_f5: 'Manual force clear command',
    sys_modal_mobstack_badge: 'Optimization',
    sys_modal_mobstack_desc: 'Automatic <strong>mob stacking system</strong> that merges nearby identical mobs into stacks, reducing entity count and improving server TPS.',
    sys_modal_mobstack_f1: 'Auto-stack nearby mobs', sys_modal_mobstack_f2: 'Configurable stack radius', sys_modal_mobstack_f3: 'Stack size display above mob', sys_modal_mobstack_f4: 'Drops scale with stack size', sys_modal_mobstack_f5: 'Per-entity type control',
    sys_modal_tabulator_badge: 'Tab & Nicknames',
    sys_modal_tabulator_desc: 'Complete <strong>tab list and nickname system</strong> with custom headers, footers, per-rank prefixes and full color/format support.',
    sys_modal_tabulator_f1: 'Custom header & footer', sys_modal_tabulator_f2: 'Per-rank prefix & suffix', sys_modal_tabulator_f3: 'Player nickname system', sys_modal_tabulator_f4: 'PlaceholderAPI in tab', sys_modal_tabulator_f5: 'Animated tab headers',
    sys_modal_afkzone_badge: 'AFK System',
    sys_modal_afkzone_desc: 'Configurable <strong>AFK Zone system</strong> that detects idle players, moves them to a safe zone, and supports rewards for AFK time.',
    sys_modal_afkzone_f1: 'Auto-detect idle players', sys_modal_afkzone_f2: 'Teleport to configurable AFK zone', sys_modal_afkzone_f3: 'AFK rewards system', sys_modal_afkzone_f4: 'Title & action bar notifications', sys_modal_afkzone_f5: 'Kick after max AFK time',
    sys_modal_updates_badge: 'Bonus Features',
    sys_modal_updates_desc: 'SDF Survival Core includes <strong>extra add-on modules</strong> that extend the core experience with additional systems, visual upgrades and quality-of-life features.',
    sys_modal_updates_f1: 'Bonus systems included', sys_modal_updates_f2: 'No extra plugins needed', sys_modal_updates_f3: 'Seamlessly integrated', sys_modal_updates_f4: 'Community-driven additions', sys_modal_updates_f5: 'Configurable per add-on',
    /* CHANGELOG CONTENT */
    cl_v1_desc: 'The first public release of <strong>SDF Survival Core</strong> — a complete, all-in-one plugin built from the ground up for modern Survival servers running Minecraft 1.21. Every core system is included, fully documented and ready to configure.',
    cl_core_systems: 'Core Systems', cl_player_features: 'Player Features', cl_staff_admin: 'Staff & Admin',
    cl_performance: 'Performance', cl_integrations: 'Integrations', cl_configuration: 'Configuration',
    cl_koth: 'King of the Hill with scheduling, capture zones and rewards',
    cl_clans: 'Full management: alliances, bank, chat, leaderboards',
    cl_combat: 'Combat tags, logout detection, damage indicators',
    cl_economy: 'Vault-integrated with balance, pay and eco commands',
    cl_crates: 'Animated loot boxes with key types and hologram displays',
    cl_bounties: 'Player-driven bounty system with auto-payout',
    cl_homes: 'Multiple homes per rank, TPA requests and warmup timers',
    cl_leaderboards: 'Hologram displays and GUI menus for kills, deaths, playtime',
    cl_kits: 'Per-rank cooldown timers and GUI kit selection menu',
    cl_afk: 'Auto-detect idle players with configurable rewards',
    cl_scoreboard: 'Animated, per-world with PlaceholderAPI support',
    cl_tabulator: 'Custom tab list, headers, footers and nickname system',
    cl_staffmode: 'Full moderation suite with vanish, freeze and inspect',
    cl_socialspy: 'Monitor private messages in real time',
    cl_staffchat: 'Private channel exclusive to the moderation team',
    cl_broadcast: 'Server-wide announcements with custom formatting',
    cl_chatcontrol: 'Mute, clear and delay commands for chat management',
    cl_clearlag: 'Configurable entity cleanup with countdown warnings',
    cl_mobstack: 'Auto-stack nearby mobs to reduce entity count and improve TPS',
    cl_mysql: 'Full database integration for persistent storage',
    cl_lunar: 'Enhanced integration for Lunar Client users',
    cl_vault: 'Full economy API support',
    cl_luckperms: 'Permission node management',
    cl_papi: 'Variables across all systems',
    cl_worldguard: 'Region-based PvP and spawn control',
    cl_config1: 'Auto-generated <strong>config.yml</strong> on first launch',
    cl_config2: 'Per-module enable/disable flags in config',
    cl_config3: 'Multi-language support: <strong>English, Spanish, French</strong>',
    cl_config4: 'All messages customizable in <strong>messages.yml</strong>',
    /* NEW COMMANDS & PERMISSIONS */
    filter_protections: '🔒 Protections',
    sec_warps:       'Warp System',
    sec_protections: 'Protection System',
    sec_spawnzone:   'Spawn Zone',
    sec_misc:        'Extra Commands',
    sec_perms_only:  'Permissions Without Command',
    cmd_warp:           'Teleports the player to a configured warp. Without argument, opens the warp menu. Has configurable cooldown.',
    cmd_warpcreate:     "Creates a warp at the administrator's current position with the given name.",
    cmd_warpdelete:     'Permanently deletes an existing warp from the server.',
    cmd_pscreate:       "Creates a new land protection at the player's current position. Prevents other players from building or interacting inside.",
    cmd_psdelete:       "Permanently removes one of the player's own protections.",
    cmd_psexpand:       'Expands an existing protection by the specified number of blocks in all directions.',
    cmd_psaddmember:    'Adds a player as a member of the protection, allowing them to build and interact inside it.',
    cmd_psremovemember: "Removes a player's access from the protection.",
    cmd_psinfo:         'Shows detailed information about a protection: owner, members, size and location.',
    cmd_pslist:         "Lists all protections belonging to the player. Staff can view another player's protections.",
    cmd_psadmindelete:  "Allows staff to delete any player's protection regardless of ownership.",
    cmd_psadmininfo:    'Allows staff to inspect any protection on the server regardless of ownership.',
    cmd_spawnzonecreate: 'Creates the protected spawn zone using the current WorldEdit selection. Blocks PvP and griefing inside the area.',
    cmd_spawnzonedelete: 'Removes the spawn zone protection completely.',
    cmd_spawnzoneinfo:   'Shows information about the current spawn zone: boundaries, size and active status.',
    cmd_rewardsafk:     'Opens the reward editor for the AFK zone. Allows configuring the items and benefits players receive for staying inside.',
    cmd_playtime:       "Shows the total playtime of the player. Staff can check other players' playtime by specifying a name.",
    cmd_heal:           "Fully restores the player's health and hunger to maximum. Has configurable cooldown.",
    cmd_rtp:            'Teleports the player to a random safe location. Supports normal world, nether and end. Has configurable cooldown.',
    cmd_sellwand:       'Gives a SellWand to a player. Allows configuring type, number of uses and sale multiplier. Used to quickly sell chest contents.',
    cmd_invrestore:     "Opens a GUI to view and restore a player's death inventories. Useful for recovering items after unfair deaths.",
    cmd_setstat:        'Directly modifies a specific statistic of a player (kills, deaths, etc.).',
    cmd_setclanstat:    'Directly modifies a specific statistic of a clan (points, kills, deaths, etc.).',
    cmd_seen:           'Shows detailed information about a player: last login, last logout, IP, play time and current status.',
    cmd_ip:             'Shows the current or last known IP address of a player. Useful for detecting alts.',
    cmd_alts:           'Shows all accounts that have connected from the same IP as the specified player.',
    cmd_uuid:           'Shows the Minecraft UUID of a player. Useful for permission and ban management.',
    cmd_top:            'Teleports the player to the nearest solid block directly above their current position. Useful for getting out of underground areas.',
    cmd_lore:           'Adds or modifies a lore line on the held item. Supports color codes.',
    cmd_sdf:            'Main plugin command. Reloads all SurvivalSDFCore configuration files without restarting the server.',
    cmd_ciothers:       "With a player argument, clears another player's inventory. Requires extra permission.",
    cmd_feedothers:     "With a player argument, restores another player's hunger. Requires the extra permission core.feed.others.",
    perm_chatcolor:          'Allows the player to use color codes (&a, &l, &o...) in chat messages. Without this permission, color codes are displayed as plain text.',
    perm_afkauto:            'When the player is idle, they are automatically marked as AFK instead of being kicked. Essential for keeping regular players connected.',
    perm_homes_n:            'Defines the maximum number of homes a player can have. Assign core.homes.3 to allow 3 homes, core.homes.10 for 10, etc. Range: 1 to 20.',
    perm_homenocooldown:     'Bypasses the cooldown of the /home command. The player can teleport to their homes instantly without waiting.',
    perm_backnocooldown:     'Bypasses the cooldown of the /back command. The player can use /back repeatedly without waiting between uses.',
    perm_spawnnocooldown:    'Bypasses the cooldown of the /spawn command. Allows teleporting to spawn instantly without waiting.',
    perm_spawnothers:        'Allows using /spawn [player] to teleport another player to spawn. Useful for moderators who need to bring players to a safe area.',
    perm_repairall:          'Allows using /repair all to repair the entire inventory at once, not just the held item.',
    perm_repairnocooldown:   'Bypasses the cooldown of the /repair command. Allows repairing items without waiting between uses.',
    perm_feednocooldown:     'Bypasses the cooldown of the /feed command. Allows restoring hunger instantly without waiting between uses.',
    perm_pingothers:         "Allows using /ping [player] to check another player's ping. Without this permission, /ping only shows the own player's latency.",
    perm_flyothers:          'Allows using /fly [player] to toggle flight for another player. Without this permission, /fly only affects the player themselves.',
    perm_balanceothers:      "Allows using /balance [player] to check another player's balance. Without this permission, /balance only shows the own player's funds.",
    perm_helpopver:          'Allows staff to receive and see /helpop messages sent by players. Without this permission, help requests are not displayed.',
    perm_reportver:          'Allows staff to receive and see /report messages sent by players. Without this permission, player reports are not displayed.',
    perm_clanhomenocooldown: 'Bypasses the cooldown of /clan home. Allows teleporting to the clan base instantly without waiting between uses.',
    perm_vip:                'Shows the VIP tag on the /list player list. Does not grant any specific commands; it only acts as a visual and identification tag for VIP players.',
    perm_vervanish:          'Allows staff to see players who are in vanish mode. Without this permission, vanished players are completely invisible even for other staff.',
    perm_warpnocooldown:     'Bypasses the cooldown of the /warp command. Allows teleporting to any warp instantly without waiting between uses.',
    perm_rtpnocooldown:      'Bypasses the cooldown of the /rtp command. Allows performing random teleportations without waiting between uses.',
    perm_kit_name:           'Grants access to a specific kit by name. For example, core.kit.vip unlocks the kit named "vip". Each kit requires its own permission node.',
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
    prerelease_text: 'Plugin aún no lanzado. <span>v1.0.0</span> es la versión de lanzamiento inicial — las futuras actualizaciones se documentarán aquí. Únete a nuestro <span>Discord</span> para estar al día.',
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
    /* TERMS */
    nav_terms: 'Terminos',
    nav_reviews: 'Reseñas',
    nav_buy:         'Comprar',
    eyebrow_terms:   'SDF Survival Core · Legal',
    sub_terms:       'TÉRMINOS Y CONDICIONES',
    tagline_terms:   'Lee atentamente estos términos antes de adquirir o utilizar SDF Survival Core.',
    legal_label:     'Documento legal · Marzo 2026',
    eyebrow_reviews: 'SDF Survival Core · Comunidad',
    sub_reviews:     'OPINIONES DE LA COMUNIDAD',
    tagline_reviews: 'Opiniones reales de administradores de servidores que usan SDF Survival Core.',
    price_label_hero: 'Precio de lanzamiento',
    btn_get_hero:    'Obtener SDF Core',
    rev_stats_label: '// Estadísticas',
    rev_avg_label:   'Valoración media',
    rev_total_label: 'Reseñas totales',
    rev_five_label:  'Reseñas 5 estrellas',
    rev_leave_label: '// Dejar una reseña',
    rev_login_title: 'Inicia sesión con Discord',
    rev_login_sub:   'Conecta tu cuenta de Discord para dejar una reseña. Tu nombre y avatar serán visibles públicamente.',
    rev_logged_sub:  'Conectado via Discord',
    rev_logout:      'Cerrar sesión',
    rev_form_title:  'Escribe tu reseña',
    rev_form_ph:     'Comparte tu experiencia con SDF Survival Core...',
    rev_form_note:   'Tu reseña será visible tras aprobación.',
    rev_submit:      'Enviar reseña',
    rev_sending:     'Enviando...',
    rev_success:     '✓ Reseña enviada. Cargando...',
    rev_via:         'via Discord',
    rev_verified:    '✓ Verificado',
    rev_empty:       '¡Aún no hay reseñas. ¡Sé el primero!',
    rev_error_load:  'No se pudieron cargar las reseñas. Inténtalo más tarde.',
    rev_approved:    '// Reseñas aprobadas',
    rev_loading:     'Cargando reseñas...',
    eyebrow_buy:     'SDF Survival Core · Obtén el Plugin',
    sub_buy:         'EMPEZAR',
    tagline_buy:     'Lleva tu servidor Survival al siguiente nivel con el plugin todo en uno más completo.',
    buy_soon_badge:  'PRÓXIMAMENTE',
    buy_price_label: 'Precio de lanzamiento',
    buy_title:       'SDF Survival Core',
    buy_desc:        'Plugin todo en uno para servidores Survival de Minecraft. +400 funciones, +150 comandos, soporte MySQL, integración con Lunar Client y mucho más.',
    buy_btn:         'Próximamente — BuildByBit',
    buy_note:        'Disponible próximamente en BuildByBit. Únete al Discord para recibir notificaciones.',
    buy_inc_title:   'Qué incluye',
    buy_f1: '+400 funciones incluidas', buy_f2: '+150 comandos',
    buy_f3: 'Soporte MySQL',            buy_f4: 'Integración Lunar Client',
    buy_f5: 'Actualizaciones', buy_f6: 'Soporte por Discord',
    buy_f7: 'Multi-idioma ES/EN/FR',   buy_f8: 'Licencia para un servidor',
    buy_faq_title:   'Preguntas frecuentes',
    buy_q1: '¿Qué versiones de servidor son compatibles?',
    buy_a1: 'SDF Survival Core requiere Paper 1.21+. No es compatible con Spigot ni con servidores vanilla.',
    buy_q2: '¿Es un pago único?',
    buy_a2: 'Sí, es un pago único. Obtienes actualizaciones para la versión mayor adquirida sin coste adicional.',
    buy_q3: '¿En cuántos servidores puedo usarlo?',
    buy_a3: 'Cada licencia cubre un (1) servidor. Si necesitas varios servidores, debes comprar una licencia para cada uno.',
    buy_q4: '¿Qué pasa si no funciona?',
    buy_a4: 'Ofrecemos reembolso si el plugin resulta no funcional en un entorno compatible y el problema no puede resolverse mediante soporte.',
    terms_s1_body: 'SDF Survival Core se vende como licencia para un unico servidor. Cada compra te otorga el derecho a usar el plugin en un (1) servidor de Minecraft. No puedes redistribuir, revender, compartir ni sublicenciar el plugin o su codigo fuente a terceros.',
    terms_s2_title: '2. Politica de Reembolso',
    terms_s2_body: 'Debido a la naturaleza digital de este producto, todas las ventas son definitivas. Los reembolsos solo se conceden si el plugin resulta ser no funcional en un entorno compatible (Paper 1.21+) y el problema no puede resolverse mediante soporte.',
    terms_s3_title: '3. Actualizaciones y Soporte',
    terms_s3_body: 'Tu licencia incluye acceso a todas las actualizaciones futuras de la version mayor adquirida. El soporte se proporciona via Discord y correo. Intentamos responder en 24-48h en dias laborables.',
    terms_s4_title: '4. Usos Prohibidos',
    terms_s4_body: 'No puedes descompilar, realizar ingenieria inversa, modificar ni redistribuir publicamente los archivos del plugin. Esta estrictamente prohibido usar el plugin para perjudicar u obtener ventajas injustas sobre otros operadores o jugadores.',
    terms_s5_title: '5. Responsabilidad',
    terms_s5_body: 'SDF Development no se hace responsable de caidas del servidor, perdida de datos u otros danos derivados del uso o mal uso de SDF Survival Core. Es tu responsabilidad mantener copias de seguridad de los datos de tu servidor.',
    terms_s6_title: '6. Cambios en los Terminos',
    terms_s6_body: 'Nos reservamos el derecho de actualizar estos terminos en cualquier momento. El uso continuado del plugin tras los cambios implica la aceptacion de los nuevos terminos. Anunciaremos cambios significativos en nuestro servidor de Discord.',
    /* BADGE PLAYER */
    badge_player: 'Jugador',
    badge_staff: 'Staff',
    badge_vip: '⭐ VIP',
    copy_toast: '✓ Copiado',
    terms_contact_title: '¿Tienes preguntas?',
    terms_contact_sub: 'Si tienes alguna pregunta sobre estos términos, no dudes en contactarnos.',
    terms_contact_cta: 'Contáctanos',
    terms_meta_text: 'Última actualización',
    terms_meta_date: 'Marzo 2026',
    /* SYSTEM MODALS */
    sys_modal_koth_badge: 'Rey de la Colina',
    sys_modal_koth_desc: 'Sistema de eventos <strong>King of the Hill</strong> totalmente configurable. Programa partidas, establece zonas de captura, configura recompensas y gestiona todo desde una GUI limpia.',
    sys_modal_koth_f1: 'Zonas y tiempos de captura configurables', sys_modal_koth_f2: 'Sistema de programación automática', sys_modal_koth_f3: 'Recompensas personalizadas por evento', sys_modal_koth_f4: 'Soporte multi-zona', sys_modal_koth_f5: 'Integración de marcador en directo',
    sys_modal_clans_badge: '100% Configurable',
    sys_modal_clans_desc: 'Sistema completo de <strong>gestión de clanes</strong> con alianzas, guerras, territorios y niveles. Diseñado para el juego de supervivencia competitivo.',
    sys_modal_clans_f1: 'Creación de clanes, invitaciones y rangos', sys_modal_clans_f2: 'Sistema de alianzas y guerras', sys_modal_clans_f3: 'Reclamación de territorios', sys_modal_clans_f4: 'Chat de clan y mensajería privada', sys_modal_clans_f5: 'Clasificaciones de clanes',
    sys_modal_combat_badge: 'Sistema Avanzado',
    sys_modal_combat_desc: 'Sistema de <strong>combate PvP avanzado</strong> con tags de combate, detección de logout, indicadores de daño y reglas configurables para tu servidor.',
    sys_modal_combat_f1: 'Tag de combate al golpear', sys_modal_combat_f2: 'Detección y sanción de logout', sys_modal_combat_f3: 'Indicadores de daño sobre la cabeza', sys_modal_combat_f4: 'Zonas PvP configurables', sys_modal_combat_f5: 'Rachas de kills y recompensas',
    sys_modal_economy_badge: 'Integrado con Vault',
    sys_modal_economy_desc: 'Sistema de <strong>economía integrado</strong> con soporte completo de Vault, cuentas bancarias, transacciones, impuestos y sistema de tienda.',
    sys_modal_economy_f1: 'Integración con API de Vault', sys_modal_economy_f2: 'Cuentas bancarias de jugadores', sys_modal_economy_f3: 'Historial de transacciones', sys_modal_economy_f4: 'Sistema de impuestos configurable', sys_modal_economy_f5: 'Comandos eco de administración',
    sys_modal_crates_badge: 'Cajas de Botín',
    sys_modal_crates_desc: 'Sistema de <strong>cajas totalmente animado</strong> con tablas de botín personalizables, hologramas, tipos de llave y animaciones de giro.',
    sys_modal_crates_f1: 'Apertura con animación de giro', sys_modal_crates_f2: 'Tablas de botín con pesos personalizados', sys_modal_crates_f3: 'Múltiples tipos de llave', sys_modal_crates_f4: 'Holograma encima de las cajas', sys_modal_crates_f5: 'GUI de previsualización antes de abrir',
    sys_modal_bounties_badge: 'Sistema de Cazadores',
    sys_modal_bounties_desc: 'Sistema de <strong>recompensas entre jugadores</strong> donde pueden poner precio a la cabeza de otros. Genera incentivos PvP de forma orgánica.',
    sys_modal_bounties_f1: 'Pon recompensas con dinero o ítems', sys_modal_bounties_f2: 'Clasificación de los más buscados', sys_modal_bounties_f3: 'Notificaciones al matar', sys_modal_bounties_f4: 'Recompensa mínima configurable', sys_modal_bounties_f5: 'Protección anti-abuso',
    sys_modal_homes_badge: 'Sistema de Teletransporte',
    sys_modal_homes_desc: 'Sistema completo de <strong>casas y teletransporte</strong> con límites por rango, solicitudes TPA, temporizadores de espera y gestión de warps.',
    sys_modal_homes_f1: 'Múltiples casas por rango', sys_modal_homes_f2: 'Sistema de solicitudes TPA', sys_modal_homes_f3: 'Temporizador de espera configurable', sys_modal_homes_f4: 'Gestión de warps', sys_modal_homes_f5: 'Comando /back tras la muerte',
    sys_modal_leaderboards_badge: 'Sistema de Ranking',
    sys_modal_leaderboards_desc: 'Sistema de <strong>clasificaciones dinámico</strong> con hologramas en el mundo, menús GUI y soporte de PlaceholderAPI para estadísticas en tiempo real.',
    sys_modal_leaderboards_f1: 'Hologramas en el mundo', sys_modal_leaderboards_f2: 'Menú GUI de clasificaciones', sys_modal_leaderboards_f3: 'Variables de PlaceholderAPI', sys_modal_leaderboards_f4: 'Múltiples categorías de estadísticas', sys_modal_leaderboards_f5: 'Intervalos de actualización automática',
    sys_modal_kits_badge: '100% Configurable',
    sys_modal_kits_desc: 'Sistema de <strong>kits totalmente configurable</strong> con cooldowns por rango, previsualización en GUI, kits de un solo uso y personalización vía config.',
    sys_modal_kits_f1: 'Temporizadores de cooldown por rango', sys_modal_kits_f2: 'Menú GUI de selección de kits', sys_modal_kits_f3: 'Kits de uso único y diarios', sys_modal_kits_f4: 'Ítems y encantamientos personalizados', sys_modal_kits_f5: 'Previsualización antes de reclamar',
    sys_modal_staff_badge: 'Suite de Admin',
    sys_modal_staff_desc: 'Suite completa de <strong>administración para el staff</strong> con vanish, freeze, inspect, spy y herramientas de moderación para tu equipo.',
    sys_modal_staff_f1: 'Vanish con mensaje de salida falso', sys_modal_staff_f2: 'Comando de freeze de jugadores', sys_modal_staff_f3: 'Inspección de inventario y EC', sys_modal_staff_f4: 'Social spy en mensajes', sys_modal_staff_f5: 'Canal de chat del staff',
    sys_modal_scoreboard_badge: 'HUD Animado',
    sys_modal_scoreboard_desc: 'Sistema de <strong>marcador animado y totalmente configurable</strong> con contenido por mundo, títulos animados y soporte de PlaceholderAPI.',
    sys_modal_scoreboard_f1: 'Secuencias de títulos animados', sys_modal_scoreboard_f2: 'Marcadores por mundo', sys_modal_scoreboard_f3: 'Variables de PlaceholderAPI', sys_modal_scoreboard_f4: 'Comando para activar/desactivar', sys_modal_scoreboard_f5: 'Actualizaciones sin parpadeo',
    sys_modal_clearlag_badge: 'Rendimiento',
    sys_modal_clearlag_desc: 'Herramienta de optimización que <strong>elimina entidades periódicamente</strong> con avisos configurables, mensajes de broadcast y lista blanca de entidades.',
    sys_modal_clearlag_f1: 'Avisos de cuenta atrás configurables', sys_modal_clearlag_f2: 'Broadcast antes de limpiar', sys_modal_clearlag_f3: 'Lista blanca de tipos de entidad', sys_modal_clearlag_f4: 'Intervalo de limpieza automático', sys_modal_clearlag_f5: 'Comando de limpieza manual forzada',
    sys_modal_mobstack_badge: 'Optimización',
    sys_modal_mobstack_desc: 'Sistema automático de <strong>apilamiento de mobs</strong> que agrupa mobs idénticos cercanos, reduciendo entidades y mejorando el TPS del servidor.',
    sys_modal_mobstack_f1: 'Apilamiento automático de mobs cercanos', sys_modal_mobstack_f2: 'Radio de apilamiento configurable', sys_modal_mobstack_f3: 'Tamaño de pila mostrado sobre el mob', sys_modal_mobstack_f4: 'Drops escalados según el tamaño de pila', sys_modal_mobstack_f5: 'Control por tipo de entidad',
    sys_modal_tabulator_badge: 'Tab y Apodos',
    sys_modal_tabulator_desc: 'Sistema completo de <strong>lista tab y apodos</strong> con cabeceras, pies, prefijos por rango y soporte completo de colores y formato.',
    sys_modal_tabulator_f1: 'Cabecera y pie personalizados', sys_modal_tabulator_f2: 'Prefijo y sufijo por rango', sys_modal_tabulator_f3: 'Sistema de apodos de jugadores', sys_modal_tabulator_f4: 'PlaceholderAPI en el tab', sys_modal_tabulator_f5: 'Cabeceras del tab animadas',
    sys_modal_afkzone_badge: 'Sistema AFK',
    sys_modal_afkzone_desc: 'Sistema de <strong>Zona AFK configurable</strong> que detecta jugadores inactivos, los mueve a una zona segura y permite recompensas por tiempo AFK.',
    sys_modal_afkzone_f1: 'Detección automática de inactividad', sys_modal_afkzone_f2: 'Teletransporte a zona AFK configurable', sys_modal_afkzone_f3: 'Sistema de recompensas AFK', sys_modal_afkzone_f4: 'Notificaciones en título y barra de acción', sys_modal_afkzone_f5: 'Expulsión tras tiempo máximo AFK',
    sys_modal_updates_badge: 'Funciones Bonus',
    sys_modal_updates_desc: 'SDF Survival Core incluye <strong>módulos extra adicionales</strong> que amplían la experiencia principal con sistemas adicionales, mejoras visuales y funciones de calidad de vida.',
    sys_modal_updates_f1: 'Sistemas bonus incluidos', sys_modal_updates_f2: 'Sin plugins externos necesarios', sys_modal_updates_f3: 'Integración perfecta', sys_modal_updates_f4: 'Incorporaciones impulsadas por la comunidad', sys_modal_updates_f5: 'Configurable por módulo',
    /* CHANGELOG CONTENT */
    cl_v1_desc: 'El primer lanzamiento público de <strong>SDF Survival Core</strong> — un plugin completo todo-en-uno construido desde cero para servidores Survival modernos con Minecraft 1.21. Todos los sistemas están incluidos, documentados y listos para configurar.',
    cl_core_systems: 'Sistemas Principales', cl_player_features: 'Funciones de Jugador', cl_staff_admin: 'Staff y Administración',
    cl_performance: 'Rendimiento', cl_integrations: 'Integraciones', cl_configuration: 'Configuración',
    cl_koth: 'Rey de la Colina con programación, zonas de captura y recompensas',
    cl_clans: 'Gestión completa: alianzas, banco, chat, clasificaciones',
    cl_combat: 'Tags de combate, detección de logout, indicadores de daño',
    cl_economy: 'Integrado con Vault: balance, pay y comandos eco',
    cl_crates: 'Cajas de botín animadas con tipos de llave y hologramas',
    cl_bounties: 'Sistema de recompensas entre jugadores con pago automático',
    cl_homes: 'Múltiples casas por rango, solicitudes TPA y temporizadores de espera',
    cl_leaderboards: 'Hologramas y menús GUI para kills, muertes y tiempo de juego',
    cl_kits: 'Temporizadores de cooldown por rango y menú GUI de selección',
    cl_afk: 'Detección automática de inactividad con recompensas configurables',
    cl_scoreboard: 'Animado, por mundo y con soporte de PlaceholderAPI',
    cl_tabulator: 'Tab personalizado con cabeceras, pies y sistema de apodos',
    cl_staffmode: 'Suite completa de moderación con vanish, freeze e inspect',
    cl_socialspy: 'Monitoriza mensajes privados en tiempo real',
    cl_staffchat: 'Canal privado exclusivo para el equipo de moderación',
    cl_broadcast: 'Anuncios para todo el servidor con formato personalizado',
    cl_chatcontrol: 'Comandos de silencio, limpieza y retraso para el chat',
    cl_clearlag: 'Limpieza de entidades configurable con avisos de cuenta atrás',
    cl_mobstack: 'Apilamiento automático de mobs para reducir entidades y mejorar TPS',
    cl_mysql: 'Integración completa de base de datos para almacenamiento persistente',
    cl_lunar: 'Integración mejorada para usuarios de Lunar Client',
    cl_vault: 'Soporte completo de API de economía',
    cl_luckperms: 'Gestión de nodos de permisos',
    cl_papi: 'Variables en todos los sistemas',
    cl_worldguard: 'Control de PvP y spawn por regiones',
    cl_config1: '<strong>config.yml</strong> auto-generado en el primer arranque',
    cl_config2: 'Flags de activación/desactivación por módulo en la config',
    cl_config3: 'Soporte multiidioma: <strong>Español, Inglés, Francés</strong>',
    cl_config4: 'Todos los mensajes personalizables en <strong>messages.yml</strong>',
    /* NUEVOS COMANDOS Y PERMISOS */
    filter_protections: '🔒 Protecciones',
    sec_warps:       'Sistema de Warps',
    sec_protections: 'Sistema de Protecciones',
    sec_spawnzone:   'Zona de Spawn',
    sec_misc:        'Comandos Extra',
    sec_perms_only:  'Permisos sin Comando',
    cmd_warp:           'Teleporta al jugador a un warp configurado. Sin argumento, abre el menú de warps. Tiene cooldown configurable.',
    cmd_warpcreate:     'Crea un warp en la posición actual del administrador con el nombre indicado.',
    cmd_warpdelete:     'Elimina permanentemente un warp existente del servidor.',
    cmd_pscreate:       'Crea una nueva protección de terreno en la posición actual del jugador. Impide que otros jugadores construyan o interactúen en su interior.',
    cmd_psdelete:       'Elimina permanentemente una de las protecciones propias del jugador.',
    cmd_psexpand:       'Amplía una protección existente el número de bloques indicado en todas las direcciones.',
    cmd_psaddmember:    'Añade a un jugador como miembro de la protección, permitiéndole construir e interactuar en su interior.',
    cmd_psremovemember: 'Elimina el acceso de un jugador a la protección.',
    cmd_psinfo:         'Muestra información detallada de una protección: propietario, miembros, tamaño y ubicación.',
    cmd_pslist:         'Lista todas las protecciones del jugador. El staff puede ver las protecciones de otros jugadores.',
    cmd_psadmindelete:  'Permite al staff eliminar cualquier protección de cualquier jugador independientemente de la propiedad.',
    cmd_psadmininfo:    'Permite al staff inspeccionar cualquier protección del servidor independientemente de la propiedad.',
    cmd_spawnzonecreate: 'Crea la zona protegida del spawn usando la selección actual de WorldEdit. Bloquea el PvP y el griefing dentro del área.',
    cmd_spawnzonedelete: 'Elimina completamente la protección de la zona de spawn.',
    cmd_spawnzoneinfo:   'Muestra información sobre la zona de spawn actual: límites, tamaño y estado activo.',
    cmd_rewardsafk:     'Abre el editor de recompensas de la zona AFK. Permite configurar los ítems y beneficios que reciben los jugadores por permanecer dentro.',
    cmd_playtime:       'Muestra el tiempo total de juego del jugador. El staff puede consultar el playtime de otros jugadores indicando el nombre.',
    cmd_heal:           'Restaura completamente la vida y el hambre del jugador al máximo. Tiene cooldown configurable.',
    cmd_rtp:            'Teleporta al jugador a una ubicación aleatoria segura. Soporta mundo normal, nether y end. Tiene cooldown configurable.',
    cmd_sellwand:       'Da una SellWand a un jugador. Permite configurar tipo, número de usos y multiplicador de venta. Sirve para vender contenido de cofres rápidamente.',
    cmd_invrestore:     'Abre una GUI para ver y restaurar los inventarios de muerte de un jugador. Útil para recuperar objetos tras muertes injustas.',
    cmd_setstat:        'Modifica directamente una estadística concreta de un jugador (asesinatos, muertes, etc.).',
    cmd_setclanstat:    'Modifica directamente una estadística concreta de un clan (puntos, asesinatos, muertes, etc.).',
    cmd_seen:           'Muestra información detallada de un jugador: último inicio de sesión, último cierre de sesión, IP, tiempo de juego y estado actual.',
    cmd_ip:             'Muestra la dirección IP actual o última conocida de un jugador. Útil para detectar alts.',
    cmd_alts:           'Muestra todas las cuentas que se han conectado desde la misma IP que el jugador especificado.',
    cmd_uuid:           'Muestra el UUID de Minecraft de un jugador. Útil para la gestión de permisos y bans.',
    cmd_top:            'Teleporta al jugador al bloque sólido más cercano directamente encima de su posición actual. Útil para salir de zonas subterráneas.',
    cmd_lore:           'Añade o modifica una línea de lore en el ítem en mano. Soporta códigos de color.',
    cmd_sdf:            'Comando principal del plugin. Recarga todos los ficheros de configuración de SurvivalSDFCore sin reiniciar el servidor.',
    cmd_ciothers:       'Con argumento de jugador, limpia el inventario de otro jugador. Requiere permiso adicional.',
    cmd_feedothers:     'Con argumento de jugador, restaura el hambre de otro jugador. Requiere el permiso adicional core.feed.others.',
    perm_chatcolor:          'Permite al jugador usar códigos de color (&a, &l, &o...) en los mensajes del chat. Sin este permiso los códigos se muestran como texto plano.',
    perm_afkauto:            'Cuando el jugador está inactivo, se le marca automáticamente como AFK en lugar de ser expulsado. Esencial para mantener a los jugadores normales conectados.',
    perm_homes_n:            'Define el número máximo de homes que puede tener un jugador. Asigna core.homes.3 para permitir 3 homes, core.homes.10 para 10, etc. Rango: 1 a 20.',
    perm_homenocooldown:     'Omite el cooldown del comando /home. El jugador puede teleportarse a sus homes al instante sin esperar.',
    perm_backnocooldown:     'Omite el cooldown del comando /back. El jugador puede usar /back repetidamente sin esperar entre usos.',
    perm_spawnnocooldown:    'Omite el cooldown del comando /spawn. Permite teleportarse al spawn al instante sin esperar.',
    perm_spawnothers:        'Permite usar /spawn [jugador] para teleportar a otro jugador al spawn. Útil para moderadores que necesitan llevar jugadores a una zona segura.',
    perm_repairall:          'Permite usar /repair all para reparar el inventario completo a la vez, no solo el ítem en mano.',
    perm_repairnocooldown:   'Omite el cooldown del comando /repair. Permite reparar ítems sin esperar entre usos.',
    perm_feednocooldown:     'Omite el cooldown del comando /feed. Permite restaurar el hambre al instante sin esperar entre usos.',
    perm_pingothers:         'Permite usar /ping [jugador] para comprobar el ping de otro jugador. Sin este permiso, /ping solo muestra la latencia propia.',
    perm_flyothers:          'Permite usar /fly [jugador] para activar el vuelo de otro jugador. Sin este permiso, /fly solo afecta al propio jugador.',
    perm_balanceothers:      'Permite usar /balance [jugador] para consultar el saldo de otro jugador. Sin este permiso, /balance solo muestra el saldo propio.',
    perm_helpopver:          'Permite al staff recibir y ver los mensajes de /helpop enviados por los jugadores. Sin este permiso, las solicitudes de ayuda no se muestran.',
    perm_reportver:          'Permite al staff recibir y ver los mensajes de /report enviados por los jugadores. Sin este permiso, los reportes de jugadores no se muestran.',
    perm_clanhomenocooldown: 'Omite el cooldown de /clan home. Permite teleportarse a la base del clan al instante sin esperar entre usos.',
    perm_vip:                'Muestra la etiqueta VIP en la lista de jugadores de /list. No concede comandos concretos; actúa únicamente como etiqueta visual e identificativa para jugadores VIP.',
    perm_vervanish:          'Permite al staff ver a los jugadores que están en modo vanish. Sin este permiso, los jugadores en vanish son completamente invisibles incluso para otros miembros del staff.',
    perm_warpnocooldown:     'Omite el cooldown del comando /warp. Permite teleportarse a cualquier warp al instante sin esperar entre usos.',
    perm_rtpnocooldown:      'Omite el cooldown del comando /rtp. Permite realizar teleportes aleatorios sin esperar entre usos.',
    perm_kit_name:           'Otorga acceso a un kit concreto por nombre. Por ejemplo, core.kit.vip desbloquea el kit "vip". Cada kit requiere su propio nodo de permiso.',
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
    sys_staff_name: 'Outils Staff', sys_staff_desc: "Outils d'administration.",
    sys_scoreboard_name: 'Tableau de bord', sys_scoreboard_desc: 'Tableaux de bord animés et configurables.',
    sys_clearlag_name: 'ClearLag', sys_clearlag_desc: 'Supprime périodiquement les entités pour optimiser.',
    sys_mobstack_name: 'MobStack', sys_mobstack_desc: "Système automatique d'empilement de mobs.",
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
    prerelease_text: 'Plugin pas encore lancé. <span>v1.0.0</span> est la version de lancement initiale — les futures mises à jour seront documentées ici. Rejoignez notre <span>Discord</span> pour rester informé.',
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
    /* TERMS */
    nav_terms: 'Conditions',
    nav_reviews: 'Avis',
    nav_buy:         'Acheter',
    eyebrow_terms:   'SDF Survival Core · Légal',
    sub_terms:       'CONDITIONS GÉNÉRALES',
    tagline_terms:   "Veuillez lire attentivement ces conditions avant d'acheter ou d'utiliser SDF Survival Core.",
    legal_label:     'Document légal · Mars 2026',
    eyebrow_reviews: 'SDF Survival Core · Communauté',
    sub_reviews:     'AVIS DE LA COMMUNAUTÉ',
    tagline_reviews: "Avis réels d'administrateurs de serveurs qui utilisent SDF Survival Core en production.",
    price_label_hero: 'Prix de lancement',
    btn_get_hero:    'Obtenir SDF Core',
    rev_stats_label: '// Statistiques',
    rev_avg_label:   'Note moyenne',
    rev_total_label: 'Avis totaux',
    rev_five_label:  'Avis 5 étoiles',
    rev_leave_label: '// Laisser un avis',
    rev_login_title: 'Connexion avec Discord',
    rev_login_sub:   'Connectez votre compte Discord pour laisser un avis. Votre nom et avatar seront visibles publiquement.',
    rev_logged_sub:  'Connecté via Discord',
    rev_logout:      'Déconnexion',
    rev_form_title:  'Écrivez votre avis',
    rev_form_ph:     'Partagez votre expérience avec SDF Survival Core...',
    rev_form_note:   'Votre avis sera visible après approbation.',
    rev_submit:      'Envoyer l\'avis',
    rev_sending:     'Envoi en cours...',
    rev_success:     '✓ Avis envoyé ! Chargement...',
    rev_via:         'via Discord',
    rev_verified:    '✓ Vérifié',
    rev_empty:       'Aucun avis pour l\'instant. Soyez le premier !',
    rev_error_load:  'Impossible de charger les avis. Veuillez réessayer.',
    rev_approved:    '// Avis approuvés',
    rev_loading:     'Chargement des avis...',
    eyebrow_buy:     'SDF Survival Core · Obtenir le Plugin',
    sub_buy:         'COMMENCER',
    tagline_buy:     'Portez votre serveur Survival au niveau supérieur avec le plugin tout-en-un le plus complet.',
    buy_soon_badge:  'BIENTÔT DISPONIBLE',
    buy_price_label: 'Prix de lancement',
    buy_title:       'SDF Survival Core',
    buy_desc:        'Plugin tout-en-un pour serveurs Survival Minecraft. 400+ fonctions, 150+ commandes, support MySQL, intégration Lunar Client et bien plus.',
    buy_btn:         'Bientôt — BuildByBit',
    buy_note:        'Disponible bientôt sur BuildByBit. Rejoignez Discord pour être notifié au lancement.',
    buy_inc_title:   'Ce qui est inclus',
    buy_f1: '400+ fonctions incluses', buy_f2: '150+ commandes',
    buy_f3: 'Support MySQL',           buy_f4: 'Intégration Lunar Client',
    buy_f5: 'Mises à jour',           buy_f6: 'Support Discord',
    buy_f7: 'Multi-langue FR/EN/ES',   buy_f8: 'Licence mono-serveur',
    buy_faq_title:   'Questions fréquentes',
    buy_q1: 'Quelles versions de serveur sont supportées ?',
    buy_a1: 'SDF Survival Core nécessite Paper 1.21+. Il n\'est pas compatible avec Spigot ou les serveurs vanilla.',
    buy_q2: 'Est-ce un paiement unique ?',
    buy_a2: 'Oui, c\'est un achat unique. Vous bénéficiez de mises à jour pour la version majeure achetée.',
    buy_q3: 'Sur combien de serveurs puis-je l\'utiliser ?',
    buy_a3: 'Chaque licence couvre un (1) serveur. Si vous avez besoin de plusieurs serveurs, vous devez acheter une licence pour chacun.',
    buy_q4: 'Que se passe-t-il si ça ne fonctionne pas ?',
    buy_a4: 'Nous proposons un remboursement si le plugin s\'avère non fonctionnel sur un environnement supporté et que le problème ne peut être résolu.',
    terms_s1_title: '1. Licence',
    terms_s1_body: "SDF Survival Core est vendu sous licence pour un seul serveur. Chaque achat vous donne le droit de l'utiliser sur un (1) serveur Minecraft. Vous ne pouvez pas redistribuer, revendre ou sous-licencier le plugin a des tiers.",
    terms_s2_title: '2. Politique de Remboursement',
    terms_s2_body: 'En raison de la nature numerique de ce produit, toutes les ventes sont definitives. Les remboursements ne sont accordes que si le plugin est non fonctionnel sur un environnement compatible (Paper 1.21+) et que le probleme ne peut etre resolu par le support.',
    terms_s3_title: '3. Mises a Jour et Support',
    terms_s3_body: 'Votre licence inclut toutes les futures mises a jour de la version majeure achetee. Le support est fourni via Discord et e-mail. Nous repondons sous 24-48h les jours ouvrables.',
    terms_s4_title: '4. Utilisations Interdites',
    terms_s4_body: "Vous ne pouvez pas decompiler, modifier ou redistribuer publiquement les fichiers du plugin. Son utilisation pour nuire ou obtenir un avantage injuste sur d'autres operateurs ou joueurs est strictement interdite.",
    terms_s5_title: '5. Responsabilite',
    terms_s5_body: "SDF Development n'est pas responsable des temps d'arret, pertes de donnees ou autres dommages resultant de l'utilisation de SDF Survival Core. Il est de votre responsabilite de conserver des sauvegardes.",
    terms_s6_title: '6. Modifications des Conditions',
    terms_s6_body: "Nous nous reservons le droit de mettre a jour ces conditions a tout moment. L'utilisation continue du plugin apres modifications constitue une acceptation des nouvelles conditions.",
    terms_contact_cta: 'Nous contacter',
    /* BADGE PLAYER */
    badge_player: 'Joueur',
    badge_staff: 'Staff',
    badge_vip: '⭐ VIP',
    copy_toast: '✓ Copié',
    terms_contact_title: 'Des questions ?',
    terms_contact_sub: 'Si vous avez des questions sur ces conditions, n\'hésitez pas à nous contacter.',
    terms_meta_text: 'Dernière mise à jour',
    terms_meta_date: 'Mars 2026',
    /* SYSTEM MODALS */
    sys_modal_koth_badge: 'Roi de la Colline',
    sys_modal_koth_desc: 'Système d\'événements <strong>King of the Hill</strong> entièrement configurable. Planifiez des matchs, définissez des zones de capture et gérez tout depuis une GUI claire.',
    sys_modal_koth_f1: 'Zones et temps de capture configurables', sys_modal_koth_f2: 'Système de planification automatique', sys_modal_koth_f3: 'Récompenses personnalisées par événement', sys_modal_koth_f4: 'Support multi-zones', sys_modal_koth_f5: 'Intégration du tableau de bord en direct',
    sys_modal_clans_badge: '100% Configurable',
    sys_modal_clans_desc: 'Système complet de <strong>gestion de clans</strong> avec alliances, guerres, territoires et niveaux. Conçu pour le gameplay de survie compétitif.',
    sys_modal_clans_f1: 'Création de clans, invitations et rangs', sys_modal_clans_f2: 'Système d\'alliances et de guerres', sys_modal_clans_f3: 'Revendication de territoires', sys_modal_clans_f4: 'Chat de clan et messagerie privée', sys_modal_clans_f5: 'Classements de clans',
    sys_modal_combat_badge: 'Système Avancé',
    sys_modal_combat_desc: 'Système de <strong>combat PvP avancé</strong> avec tags de combat, détection de déconnexion, indicateurs de dégâts et règles de combat configurables.',
    sys_modal_combat_f1: 'Tag de combat au coup', sys_modal_combat_f2: 'Détection et sanction de déconnexion', sys_modal_combat_f3: 'Indicateurs de dégâts au-dessus de la tête', sys_modal_combat_f4: 'Zones PvP configurables', sys_modal_combat_f5: 'Séries de kills et récompenses',
    sys_modal_economy_badge: 'Intégré à Vault',
    sys_modal_economy_desc: 'Système d\'<strong>économie intégré</strong> avec support complet de Vault, comptes bancaires, transactions, taxes et système de boutique.',
    sys_modal_economy_f1: 'Intégration API Vault', sys_modal_economy_f2: 'Comptes bancaires des joueurs', sys_modal_economy_f3: 'Historique des transactions', sys_modal_economy_f4: 'Système de taxes configurable', sys_modal_economy_f5: 'Commandes eco administrateur',
    sys_modal_crates_badge: 'Caisses de Butin',
    sys_modal_crates_desc: 'Système de <strong>caisses entièrement animé</strong> avec tables de butin personnalisables, hologrammes, types de clés et animations de rotation.',
    sys_modal_crates_f1: 'Ouverture avec animation de rotation', sys_modal_crates_f2: 'Tables de butin avec poids personnalisés', sys_modal_crates_f3: 'Plusieurs types de clés', sys_modal_crates_f4: 'Hologramme au-dessus des caisses', sys_modal_crates_f5: 'GUI de prévisualisation avant ouverture',
    sys_modal_bounties_badge: 'Système de Chasseurs',
    sys_modal_bounties_desc: 'Système de <strong>primes entre joueurs</strong> où ils peuvent mettre une récompense sur la tête des autres. Crée des incitations PvP organiques.',
    sys_modal_bounties_f1: 'Placez des primes avec de l\'argent ou des objets', sys_modal_bounties_f2: 'Classement des plus recherchés', sys_modal_bounties_f3: 'Notifications lors d\'un kill', sys_modal_bounties_f4: 'Prime minimale configurable', sys_modal_bounties_f5: 'Protection anti-abus',
    sys_modal_homes_badge: 'Système de Téléportation',
    sys_modal_homes_desc: 'Système complet de <strong>maisons et téléportation</strong> avec limites configurables par rang, demandes TPA, minuteries et gestion des warps.',
    sys_modal_homes_f1: 'Plusieurs maisons par rang', sys_modal_homes_f2: 'Système de demandes TPA', sys_modal_homes_f3: 'Minuterie d\'attente configurable', sys_modal_homes_f4: 'Gestion des warps', sys_modal_homes_f5: 'Commande /back après la mort',
    sys_modal_leaderboards_badge: 'Système de Classement',
    sys_modal_leaderboards_desc: 'Système de <strong>classements dynamique</strong> avec hologrammes, menus GUI et support PlaceholderAPI pour des stats en temps réel.',
    sys_modal_leaderboards_f1: 'Hologrammes dans le monde', sys_modal_leaderboards_f2: 'Menu GUI de classements', sys_modal_leaderboards_f3: 'Variables PlaceholderAPI', sys_modal_leaderboards_f4: 'Plusieurs catégories de stats', sys_modal_leaderboards_f5: 'Intervalles de rafraîchissement automatique',
    sys_modal_kits_badge: '100% Configurable',
    sys_modal_kits_desc: 'Système de <strong>kits entièrement configurable</strong> avec cooldowns par rang, prévisualisation GUI, kits à usage unique et personnalisation des objets.',
    sys_modal_kits_f1: 'Minuteries de cooldown par rang', sys_modal_kits_f2: 'Menu GUI de sélection de kits', sys_modal_kits_f3: 'Kits à usage unique et quotidiens', sys_modal_kits_f4: 'Objets et enchantements personnalisés', sys_modal_kits_f5: 'Prévisualisation avant réclamation',
    sys_modal_staff_badge: 'Suite Admin',
    sys_modal_staff_desc: 'Suite complète d\'<strong>administration pour le staff</strong> avec vanish, freeze, inspect, spy et outils de modération pour votre équipe.',
    sys_modal_staff_f1: 'Vanish avec message de déconnexion fictif', sys_modal_staff_f2: 'Commande de gel de joueurs', sys_modal_staff_f3: 'Inspection d\'inventaire et EC', sys_modal_staff_f4: 'Social spy sur les messages', sys_modal_staff_f5: 'Canal de chat du staff',
    sys_modal_scoreboard_badge: 'HUD Animé',
    sys_modal_scoreboard_desc: 'Système de <strong>tableau de bord animé et entièrement configurable</strong> avec contenu par monde, titres animés et support PlaceholderAPI.',
    sys_modal_scoreboard_f1: 'Séquences de titres animés', sys_modal_scoreboard_f2: 'Tableaux de bord par monde', sys_modal_scoreboard_f3: 'Variables PlaceholderAPI', sys_modal_scoreboard_f4: 'Commande d\'activation/désactivation', sys_modal_scoreboard_f5: 'Mises à jour sans scintillement',
    sys_modal_clearlag_badge: 'Performance',
    sys_modal_clearlag_desc: 'Outil d\'optimisation qui <strong>supprime périodiquement les entités</strong> avec des avertissements configurables et des listes blanches d\'entités.',
    sys_modal_clearlag_f1: 'Avertissements de compte à rebours configurables', sys_modal_clearlag_f2: 'Broadcast avant nettoyage', sys_modal_clearlag_f3: 'Liste blanche de types d\'entités', sys_modal_clearlag_f4: 'Intervalle de nettoyage automatique', sys_modal_clearlag_f5: 'Commande de nettoyage manuel forcé',
    sys_modal_mobstack_badge: 'Optimisation',
    sys_modal_mobstack_desc: 'Système d\'<strong>empilement automatique de mobs</strong> qui regroupe les mobs identiques proches, réduisant les entités et améliorant le TPS.',
    sys_modal_mobstack_f1: 'Empilement automatique des mobs proches', sys_modal_mobstack_f2: 'Rayon d\'empilement configurable', sys_modal_mobstack_f3: 'Taille de la pile affichée au-dessus du mob', sys_modal_mobstack_f4: 'Drops proportionnels à la taille de la pile', sys_modal_mobstack_f5: 'Contrôle par type d\'entité',
    sys_modal_tabulator_badge: 'Tab & Pseudonymes',
    sys_modal_tabulator_desc: 'Système complet de <strong>liste tab et pseudonymes</strong> avec en-têtes, pieds de page, préfixes par rang et support complet des couleurs.',
    sys_modal_tabulator_f1: 'En-tête et pied de page personnalisés', sys_modal_tabulator_f2: 'Préfixe et suffixe par rang', sys_modal_tabulator_f3: 'Système de pseudonymes', sys_modal_tabulator_f4: 'PlaceholderAPI dans le tab', sys_modal_tabulator_f5: 'En-têtes de tab animés',
    sys_modal_afkzone_badge: 'Système AFK',
    sys_modal_afkzone_desc: 'Système de <strong>Zone AFK configurable</strong> qui détecte les joueurs inactifs, les déplace vers une zone sécurisée et supporte des récompenses pour le temps AFK.',
    sys_modal_afkzone_f1: 'Détection automatique d\'inactivité', sys_modal_afkzone_f2: 'Téléportation vers une zone AFK configurable', sys_modal_afkzone_f3: 'Système de récompenses AFK', sys_modal_afkzone_f4: 'Notifications en titre et barre d\'action', sys_modal_afkzone_f5: 'Expulsion après temps AFK maximum',
    sys_modal_updates_badge: 'Fonctions Bonus',
    sys_modal_updates_desc: 'SDF Survival Core inclut des <strong>modules supplémentaires</strong> qui étendent l\'expérience principale avec des systèmes additionnels et des fonctions qualité de vie.',
    sys_modal_updates_f1: 'Systèmes bonus inclus', sys_modal_updates_f2: 'Aucun plugin externe nécessaire', sys_modal_updates_f3: 'Intégration transparente', sys_modal_updates_f4: 'Ajouts pilotés par la communauté', sys_modal_updates_f5: 'Configurable par module',
    /* CHANGELOG CONTENT */
    cl_v1_desc: 'La première version publique de <strong>SDF Survival Core</strong> — un plugin complet tout-en-un construit de zéro pour les serveurs Survival modernes sous Minecraft 1.21. Tous les systèmes sont inclus, documentés et prêts à configurer.',
    cl_core_systems: 'Systèmes Principaux', cl_player_features: 'Fonctions Joueur', cl_staff_admin: 'Staff & Administration',
    cl_performance: 'Performance', cl_integrations: 'Intégrations', cl_configuration: 'Configuration',
    cl_koth: 'Roi de la Colline avec planification, zones de capture et récompenses',
    cl_clans: 'Gestion complète : alliances, banque, chat, classements',
    cl_combat: 'Tags de combat, détection de déconnexion, indicateurs de dégâts',
    cl_economy: 'Intégré à Vault : solde, pay et commandes eco',
    cl_crates: 'Caisses animées avec types de clés et hologrammes',
    cl_bounties: 'Système de primes entre joueurs avec paiement automatique',
    cl_homes: 'Plusieurs maisons par rang, demandes TPA et minuteries',
    cl_leaderboards: 'Hologrammes et menus GUI pour kills, morts et temps de jeu',
    cl_kits: 'Minuteries de cooldown par rang et menu GUI de sélection',
    cl_afk: 'Détection automatique d\'inactivité avec récompenses configurables',
    cl_scoreboard: 'Animé, par monde et avec support PlaceholderAPI',
    cl_tabulator: 'Tab personnalisé avec en-têtes, pieds de page et pseudonymes',
    cl_staffmode: 'Suite complète de modération : vanish, freeze et inspect',
    cl_socialspy: 'Surveille les messages privés en temps réel',
    cl_staffchat: 'Canal privé exclusif à l\'équipe de modération',
    cl_broadcast: 'Annonces serveur avec formatage personnalisé',
    cl_chatcontrol: 'Commandes de silence, nettoyage et délai pour le chat',
    cl_clearlag: 'Nettoyage d\'entités configurable avec avertissements',
    cl_mobstack: 'Empilement automatique de mobs pour réduire les entités et améliorer le TPS',
    cl_mysql: 'Intégration complète de base de données pour le stockage persistant',
    cl_lunar: 'Intégration améliorée pour les utilisateurs de Lunar Client',
    cl_vault: 'Support complet de l\'API économique',
    cl_luckperms: 'Gestion des nœuds de permissions',
    cl_papi: 'Variables dans tous les systèmes',
    cl_worldguard: 'Contrôle du PvP et du spawn par régions',
    cl_config1: '<strong>config.yml</strong> auto-généré au premier lancement',
    cl_config2: 'Flags d\'activation/désactivation par module dans la config',
    cl_config3: 'Support multilingue : <strong>Espagnol, Anglais, Français</strong>',
    cl_config4: 'Tous les messages personnalisables dans <strong>messages.yml</strong>',
    /* NOUVEAUX COMMANDES ET PERMISSIONS */
    filter_protections: '🔒 Protections',
    sec_warps:       'Système de Warps',
    sec_protections: 'Système de Protections',
    sec_spawnzone:   'Zone de Spawn',
    sec_misc:        'Commandes Supplémentaires',
    sec_perms_only:  'Permissions Sans Commande',
    cmd_warp:           'Téléporte le joueur vers un warp configuré. Sans argument, ouvre le menu des warps. Cooldown configurable.',
    cmd_warpcreate:     "Crée un warp à la position actuelle de l'administrateur avec le nom indiqué.",
    cmd_warpdelete:     'Supprime définitivement un warp existant du serveur.',
    cmd_pscreate:       'Crée une nouvelle protection de terrain à la position actuelle du joueur. Empêche les autres joueurs de construire ou d\'interagir à l\'intérieur.',
    cmd_psdelete:       'Supprime définitivement l\'une des protections du joueur.',
    cmd_psexpand:       'Agrandit une protection existante du nombre de blocs indiqué dans toutes les directions.',
    cmd_psaddmember:    'Ajoute un joueur en tant que membre de la protection, lui permettant de construire et d\'interagir à l\'intérieur.',
    cmd_psremovemember: 'Supprime l\'accès d\'un joueur à la protection.',
    cmd_psinfo:         'Affiche des informations détaillées sur une protection : propriétaire, membres, taille et emplacement.',
    cmd_pslist:         'Liste toutes les protections du joueur. Le staff peut voir les protections des autres joueurs.',
    cmd_psadmindelete:  'Permet au staff de supprimer toute protection de n\'importe quel joueur indépendamment de la propriété.',
    cmd_psadmininfo:    'Permet au staff d\'inspecter toute protection du serveur indépendamment de la propriété.',
    cmd_spawnzonecreate: 'Crée la zone protégée du spawn en utilisant la sélection WorldEdit actuelle. Bloque le PvP et le griefing dans la zone.',
    cmd_spawnzonedelete: 'Supprime complètement la protection de la zone de spawn.',
    cmd_spawnzoneinfo:   'Affiche des informations sur la zone de spawn actuelle : limites, taille et statut actif.',
    cmd_rewardsafk:     'Ouvre l\'éditeur de récompenses de la zone AFK. Permet de configurer les objets et avantages que les joueurs reçoivent en restant à l\'intérieur.',
    cmd_playtime:       'Affiche le temps de jeu total du joueur. Le staff peut consulter le temps de jeu des autres joueurs en précisant un nom.',
    cmd_heal:           'Restaure complètement la vie et la faim du joueur au maximum. Cooldown configurable.',
    cmd_rtp:            'Téléporte le joueur vers un endroit sûr aléatoire. Supporte le monde normal, le nether et l\'end. Cooldown configurable.',
    cmd_sellwand:       'Donne une SellWand à un joueur. Permet de configurer le type, le nombre d\'utilisations et le multiplicateur de vente. Utilisé pour vendre rapidement le contenu des coffres.',
    cmd_invrestore:     'Ouvre une interface pour voir et restaurer les inventaires de mort d\'un joueur. Utile pour récupérer des objets après des morts injustes.',
    cmd_setstat:        'Modifie directement une statistique spécifique d\'un joueur (kills, morts, etc.).',
    cmd_setclanstat:    'Modifie directement une statistique spécifique d\'un clan (points, kills, morts, etc.).',
    cmd_seen:           'Affiche des informations détaillées sur un joueur : dernière connexion, déconnexion, IP, temps de jeu et statut actuel.',
    cmd_ip:             'Affiche l\'adresse IP actuelle ou dernière connue d\'un joueur. Utile pour détecter les comptes alternatifs.',
    cmd_alts:           'Affiche tous les comptes qui se sont connectés depuis la même IP que le joueur spécifié.',
    cmd_uuid:           'Affiche l\'UUID Minecraft d\'un joueur. Utile pour la gestion des permissions et des bans.',
    cmd_top:            'Téléporte le joueur vers le bloc solide le plus proche directement au-dessus de sa position. Utile pour sortir des zones souterraines.',
    cmd_lore:           'Ajoute ou modifie une ligne de lore sur l\'objet en main. Supporte les codes couleur.',
    cmd_sdf:            'Commande principale du plugin. Recharge tous les fichiers de configuration de SurvivalSDFCore sans redémarrer le serveur.',
    cmd_ciothers:       'Avec un argument joueur, vide l\'inventaire d\'un autre joueur. Nécessite une permission supplémentaire.',
    cmd_feedothers:     'Avec un argument joueur, restaure la faim d\'un autre joueur. Nécessite la permission supplémentaire core.feed.others.',
    perm_chatcolor:          'Permet au joueur d\'utiliser des codes couleur (&a, &l, &o...) dans les messages du chat. Sans cette permission, les codes sont affichés en texte brut.',
    perm_afkauto:            'Lorsque le joueur est inactif, il est automatiquement marqué AFK au lieu d\'être expulsé. Essentiel pour garder les joueurs réguliers connectés.',
    perm_homes_n:            'Définit le nombre maximum de homes qu\'un joueur peut avoir. Attribuez core.homes.3 pour autoriser 3 homes, core.homes.10 pour 10, etc. Plage : 1 à 20.',
    perm_homenocooldown:     'Contourne le cooldown de la commande /home. Le joueur peut se téléporter instantanément sans attendre.',
    perm_backnocooldown:     'Contourne le cooldown de la commande /back. Le joueur peut utiliser /back répétitivement sans attendre entre les utilisations.',
    perm_spawnnocooldown:    'Contourne le cooldown de la commande /spawn. Permet de se téléporter au spawn instantanément sans attendre.',
    perm_spawnothers:        'Permet d\'utiliser /spawn [joueur] pour téléporter un autre joueur au spawn. Utile pour les modérateurs.',
    perm_repairall:          'Permet d\'utiliser /repair all pour réparer tout l\'inventaire en une fois, pas seulement l\'objet en main.',
    perm_repairnocooldown:   'Contourne le cooldown de la commande /repair. Permet de réparer des objets sans attendre entre les utilisations.',
    perm_feednocooldown:     'Contourne le cooldown de la commande /feed. Permet de restaurer la faim instantanément sans attendre.',
    perm_pingothers:         'Permet d\'utiliser /ping [joueur] pour vérifier le ping d\'un autre joueur. Sans cette permission, /ping n\'affiche que sa propre latence.',
    perm_flyothers:          'Permet d\'utiliser /fly [joueur] pour activer le vol d\'un autre joueur. Sans cette permission, /fly n\'affecte que le joueur lui-même.',
    perm_balanceothers:      'Permet d\'utiliser /balance [joueur] pour consulter le solde d\'un autre joueur. Sans cette permission, /balance n\'affiche que son propre solde.',
    perm_helpopver:          'Permet au staff de recevoir et voir les messages /helpop envoyés par les joueurs. Sans cette permission, les demandes d\'aide ne s\'affichent pas.',
    perm_reportver:          'Permet au staff de recevoir et voir les messages /report envoyés par les joueurs. Sans cette permission, les signalements ne s\'affichent pas.',
    perm_clanhomenocooldown: 'Contourne le cooldown de /clan home. Permet de se téléporter instantanément à la base du clan sans attendre.',
    perm_vip:                'Affiche le tag VIP dans la liste de joueurs de /list. N\'accorde aucune commande spécifique ; sert uniquement d\'étiquette visuelle pour les joueurs VIP.',
    perm_vervanish:          'Permet au staff de voir les joueurs en mode vanish. Sans cette permission, les joueurs en vanish sont totalement invisibles même pour les autres membres du staff.',
    perm_warpnocooldown:     'Contourne le cooldown de la commande /warp. Permet de se téléporter instantanément vers n\'importe quel warp sans attendre.',
    perm_rtpnocooldown:      'Contourne le cooldown de la commande /rtp. Permet d\'effectuer des téléportations aléatoires sans attendre entre les utilisations.',
    perm_kit_name:           'Accorde l\'accès à un kit spécifique par nom. Par exemple, core.kit.vip déverrouille le kit "vip". Chaque kit nécessite son propre nœud de permission.',
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
    'nav-changelog': 'nav_changelog',
    'nav-integrations': 'nav_integrations', 'nav-contact': 'nav_contact',
    'nav-terms': 'nav_terms', 'nav-reviews': 'nav_reviews', 'nav-buy': 'nav_buy'
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

  if (page === 'terms.html') {
    setText('terms-s1-title', T.terms_s1_title);
    setText('terms-s1-body',  T.terms_s1_body);
    setText('terms-s2-title', T.terms_s2_title);
    setText('terms-s2-body',  T.terms_s2_body);
    setText('terms-s3-title', T.terms_s3_title);
    setText('terms-s3-body',  T.terms_s3_body);
    setText('terms-s4-title', T.terms_s4_title);
    setText('terms-s4-body',  T.terms_s4_body);
    setText('terms-s5-title', T.terms_s5_title);
    setText('terms-s5-body',  T.terms_s5_body);
    setText('terms-s6-title', T.terms_s6_title);
    setText('terms-s6-body',  T.terms_s6_body);
    setText('terms-contact-title', T.terms_contact_title);
    setText('terms-contact-sub',   T.terms_contact_sub);
    setText('terms-contact-cta',   T.terms_contact_cta);
    const metaEl = document.getElementById('terms-meta-text');
    if (metaEl && T.terms_meta_text) {
      metaEl.innerHTML = T.terms_meta_text + ': <span>' + T.terms_meta_date + '</span>';
    }
    const termsSub = document.querySelector('.main-title .sub');
    if (termsSub && T.sub_terms) termsSub.textContent = T.sub_terms;
  }

  if (page === 'reviews.html') {
    const revSub = document.querySelector('.main-title .sub');
    if (revSub && T.sub_reviews) revSub.textContent = T.sub_reviews;
    ['rev_stats_label','rev_leave_label','rev_loading'].forEach(k => {
      document.querySelectorAll('[data-i18n="'+k+'"]').forEach(el => { if (T[k]) el.textContent = T[k]; });
    });
    const loginTitle = document.getElementById('rev-login-title');
    if (loginTitle && T.rev_login_title) loginTitle.textContent = T.rev_login_title;
    const loginSub = document.getElementById('rev-login-sub');
    if (loginSub && T.rev_login_sub) loginSub.textContent = T.rev_login_sub;
    const loggedSub = document.getElementById('rev-logged-sub');
    if (loggedSub && T.rev_logged_sub) loggedSub.textContent = T.rev_logged_sub;
    const btnLogout = document.getElementById('btn-logout');
    if (btnLogout && T.rev_logout) btnLogout.textContent = T.rev_logout;
    const formTitle = document.getElementById('rev-form-title');
    if (formTitle && T.rev_form_title) formTitle.textContent = T.rev_form_title;
    const formNote = document.getElementById('rev-form-note');
    if (formNote && T.rev_form_note) formNote.textContent = T.rev_form_note;
    const textarea = document.getElementById('review-text');
    if (textarea && T.rev_form_ph) textarea.placeholder = T.rev_form_ph;
    const avgLbl = document.getElementById('stat-avg-label');
    if (avgLbl && T.rev_avg_label) avgLbl.textContent = T.rev_avg_label;
    const totalLbl = document.getElementById('stat-total-label');
    if (totalLbl && T.rev_total_label) totalLbl.textContent = T.rev_total_label;
    const fiveLbl = document.getElementById('stat-five-label');
    if (fiveLbl && T.rev_five_label) fiveLbl.textContent = T.rev_five_label;
  }

  if (page === 'buy.html') {
    const buySub = document.querySelector('.main-title .sub');
    if (buySub && T.sub_buy) buySub.textContent = T.sub_buy;
    const ids = ['buy-soon-badge','buy-price-label','buy-title','buy-desc','buy-btn','buy-note','buy-inc-title','buy-faq-title',
      'buy-f1','buy-f2','buy-f3','buy-f4','buy-f5','buy-f6','buy-f7','buy-f8',
      'buy-q1','buy-a1','buy-q2','buy-a2','buy-q3','buy-a3','buy-q4','buy-a4'];
    const keys = ['buy_soon_badge','buy_price_label','buy_title','buy_desc','buy_btn','buy_note','buy_inc_title','buy_faq_title',
      'buy_f1','buy_f2','buy_f3','buy_f4','buy_f5','buy_f6','buy_f7','buy_f8',
      'buy_q1','buy_a1','buy_q2','buy_a2','buy_q3','buy_a3','buy_q4','buy_a4'];
    ids.forEach((id,i) => { const el = document.getElementById(id); if (el && T[keys[i]]) el.textContent = T[keys[i]]; });
  }

  // Apply badge translations everywhere (commands, etc.)
  if (T.badge_staff) {
    document.querySelectorAll('.badge.admin').forEach(el => { if (!el.dataset.i18n) el.textContent = T.badge_staff; });
  }
  if (T.badge_vip) {
    document.querySelectorAll('.badge.vip').forEach(el => { if (!el.dataset.i18n) el.textContent = T.badge_vip; });
  }
  if (T.copy_toast) {
    const toast = document.getElementById('copy-toast');
    if (toast) toast.textContent = T.copy_toast;
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
      z-index: 950;
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
      z-index: 99985;
      display: flex; align-items: center; justify-content: center;
      opacity: 0;
      transition: opacity 0.4s cubic-bezier(0.16,1,0.3,1);
      pointer-events: none;
    }
    #cs-overlay.cs-visible {
      opacity: 1;
      pointer-events: all;
    }
    #cs-overlay.hiding {
      opacity: 0;
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
      opacity: 0;
      transition: transform 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.4s;
    }
    #cs-overlay.cs-visible #cs-box {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
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
  // Mostrar popup con pequeño timeout para que el navegador pinte primero el estado inicial
  setTimeout(function() {
    if (overlay.parentNode) overlay.classList.add('cs-visible');
  }, 80);

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
    overlay.classList.remove('cs-visible');
    overlay.classList.add('hiding');
    setTimeout(function() { if (overlay.parentNode) overlay.remove(); }, 420);
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
