const e = {
    RECOMMENDED: "recommended",
    ADDITIONAL: "additional"
}
  , i = {
    BLUE: "gradient-blue-normal",
    BLUE_PURPLE: "gradient-blue-purple",
    RED_WARM: "gradient-red-warm",
    PURPLE: "gradient-purple-normal",
    PURPLE_LIGHT: "gradient-purple-light",
    BLUE_PASTEL: "gradient-blue-pastel-light",
    ORANGE: "gradient-orange-normal",
    GREEN: "gradient-green-shiny",
    GREEN_DARK: "gradient-green-dark",
    PINK: "gradient-pink-normal",
    ALERT_GREEN: "gradient-alert-green",
    ALERT_PURPLE: "gradient-alert-purple"
}
  , o = {
    PROSPECTION: {
        id: "prospection",
        name: "super_app.navbar.favs.prospection",
        icon: "scan-2-line",
        route: "company-search.search.companies",
        color: i.BLUE,
        permission: "prospection",
        spec: "prospection",
        category: e.RECOMMENDED,
        defaultFavorite: !0
    },
    CRM: {
        id: "crm",
        name: "CRM",
        icon: "briefcase-3-line",
        route: "deals.index",
        color: i.BLUE_PURPLE,
        permission: ["leads, opportunities", "after_sale"],
        spec: "pipelines",
        category: e.RECOMMENDED,
        defaultFavorite: !0
    },
    LANDING_PAGES: {
        id: "landing_pages",
        name: "Landing Pages",
        icon: "window-line",
        route: "websites.index",
        color: i.RED_WARM,
        permission: "websites",
        category: e.RECOMMENDED,
        defaultFavorite: !0
    },
    AUTOMATION: {
        id: "automation",
        name: "super_app.sidebar.label.automation.title",
        icon: "mind-map",
        route: "journeys.templates",
        color: i.PURPLE,
        permission: "flows",
        category: e.RECOMMENDED,
        defaultFavorite: !0
    },
    SEGMENTATION: {
        id: "segmentation",
        name: "email_list.type_segmentation",
        icon: "list-check-2",
        route: "market-manager.segmentations",
        color: i.PURPLE_LIGHT,
        permission: "prospection",
        spec: "prospection",
        category: e.RECOMMENDED,
        defaultFavorite: !0
    },
    COMPANY_SETUP: {
        id: "company_setup",
        name: "super_app.sidebar.onboarding-steps.title",
        icon: "settings-3-line",
        route: "config.setup.index",
        color: i.ALERT_GREEN,
        category: e.RECOMMENDED,
        defaultFavorite: !0
    },
    AGENTS: {
        id: "agents",
        name: "super_app.sidebar.label.automation.agent",
        icon: "auto-awesome",
        route: "agent-setup.list",
        color: i.ALERT_PURPLE,
        category: e.RECOMMENDED,
        defaultFavorite: !0
    },
    MY_WORK: {
        id: "my_work",
        name: "activities_homepage.navbar.my_work",
        icon: "checkbox-multiple-line",
        route: "activities-home.index",
        color: i.BLUE_PASTEL,
        category: e.ADDITIONAL
    },
    EMAIL: {
        id: "email",
        name: "super_app.mail_box",
        icon: "inbox-line",
        route: "mail.emails.settings",
        color: i.ORANGE,
        spec: "inbox_mail",
        category: e.ADDITIONAL
    },
    USERS: {
        id: "users",
        name: "super_app.config_user",
        icon: "user-settings-line",
        route: "config.users.index",
        color: i.BLUE,
        category: e.ADDITIONAL
    },
    DIGITAL_PHONE: {
        id: "digital_phone",
        name: "super_app.digital_phone",
        icon: "phone-line",
        color: i.BLUE_PASTEL,
        permission: "voice",
        spec: "voice",
        category: e.ADDITIONAL
    },
    WHATSAPP: {
        id: "whatsapp",
        name: "Whatsapp",
        icon: "whatsapp-line",
        route: "messaging.chats",
        color: i.GREEN,
        permission: "messaging",
        spec: "messaging",
        category: e.ADDITIONAL
    },
    MEET: {
        id: "meet",
        name: "Meet",
        icon: "video-chat-line",
        route: "meeting-viewer.list",
        color: i.PINK,
        permission: "meet",
        spec: "meet",
        category: e.ADDITIONAL
    },
    CUSTOMERS: {
        id: "customers",
        name: "super_app.sidebar.label.sales.customers",
        icon: "user-line",
        route: "customer.index",
        color: i.PURPLE,
        permission: "customer",
        category: e.ADDITIONAL
    },
    DOCUMENTS: {
        id: "documents",
        name: "super_app.sidebar.label.sales.documents",
        icon: "file-edit-line",
        route: "documents.gallery",
        color: i.BLUE,
        permission: "quotations",
        category: e.ADDITIONAL
    },
    PRODUCTS: {
        id: "products",
        name: "super_app.sidebar.label.sales.products",
        icon: "shopping-cart-line",
        route: "items.list",
        color: i.BLUE_PURPLE,
        permission: "items",
        category: e.ADDITIONAL
    },
    CALENDAR: {
        id: "calendar",
        name: "routes.agenda",
        icon: "calendar-line",
        route: "activities.calendar",
        color: i.RED_WARM,
        permission: "agenda",
        category: e.ADDITIONAL
    },
    ACTIVITIES: {
        id: "activities",
        name: "dealFilters.next_action",
        icon: "list-check",
        route: "activities.index",
        color: i.BLUE_PURPLE,
        spec: "activities",
        category: e.ADDITIONAL
    },
    CONTACT_EXTENSION: {
        id: "contact_extension",
        name: "super_app.contact_ext",
        icon: "chrome",
        route: "chrome-extension.activation",
        color: i.PURPLE,
        category: e.ADDITIONAL
    },
    EMAIL_TEMPLATES: {
        id: "email_templates",
        name: "super_app.sidebar.label.marketing.email_template",
        icon: "slideshow-line",
        route: "new-mail-templates.gallery",
        color: i.PURPLE_LIGHT,
        spec: "mailing",
        category: e.ADDITIONAL
    },
    LEADS_INBOX: {
        id: "leads_inbox",
        name: "new_plans.plans_page.features.demand_generation.leads_inbox",
        icon: "search-eye-line",
        route: "leads.index",
        color: i.BLUE_PASTEL,
        permission: "leads",
        spec: "leads_inbox",
        category: e.ADDITIONAL
    },
    CAMPAIGNS: {
        id: "campaigns",
        name: "menu.campaigns",
        icon: "home-smile-2-line",
        route: "campaigns.index",
        color: i.ORANGE,
        permission: "campaigns",
        category: e.ADDITIONAL
    },
    INTEGRATIONS: {
        id: "integrations",
        name: "super_app.sidebar.label.automation.integrations",
        icon: "git-merge-line",
        route: "config.integrations.index",
        color: i.BLUE_PASTEL,
        permission: "configurations",
        spec: "integrations_parameterization",
        category: e.ADDITIONAL
    },
    SETTINGS: {
        id: "settings",
        name: "super_app.sidebar.label.user.config",
        icon: "settings-4-line",
        route: "parametrizations.index",
        color: i.PINK,
        permission: "configurations",
        category: e.ADDITIONAL
    },
    DASHBOARDS: {
        id: "dashboards",
        name: "Dashboards",
        icon: "bar-chart-box-line",
        route: "panels",
        color: i.BLUE,
        permission: "panels",
        spec: "panels",
        category: e.ADDITIONAL
    },
    STRATEGIC_PANEL: {
        id: "strategic_panel",
        name: "routes.gtm.panel",
        icon: "dashboard-line",
        route: "gtm.panel",
        color: i.BLUE_PURPLE,
        spec: "strategic_dashboard",
        category: e.ADDITIONAL
    },
    REFERRAL: {
        id: "referral",
        name: "super_app.sidebar.label.user.referral",
        icon: "award-line",
        route: "referral.index",
        color: i.RED_WARM,
        category: e.ADDITIONAL
    },
    FORMS: {
        id: "forms",
        name: "routes.forms.index",
        icon: "file-list-2-line",
        route: "forms.index",
        color: i.BLUE_PASTEL,
        permission: "forms",
        spec: "forms",
        category: e.ADDITIONAL
    },
    PORTALS: {
        id: "portals",
        name: "super_app.portals",
        icon: "global-line",
        route: "portals.search.shared",
        color: i.PURPLE,
        category: e.ADDITIONAL
    },
    REPORTS: {
        id: "reports",
        name: "super_app.sidebar.label.insights.reports",
        icon: "file-excel-line",
        route: "reports.index",
        color: i.GREEN,
        permission: "reports",
        spec: "reports",
        category: e.ADDITIONAL
    },
    MEET_INSIGHTS: {
        id: "meet_insights",
        name: "super_app.sidebar.label.communication.meetings",
        icon: "vidicon-line",
        route: "meetings.index",
        color: i.PURPLE_LIGHT,
        permission: "meet",
        spec: "meet",
        category: e.ADDITIONAL
    }
}
  , r = () => Object.values(o).filter(a => a.defaultFavorite).map(a => a.id);
export {i as A, o as a, e as b, r as g};
