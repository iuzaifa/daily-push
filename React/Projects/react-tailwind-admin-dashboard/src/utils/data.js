import {
  LayoutDashboard,
  CastIcon,
  ChartBar,
  Settings,
  PanelsTopLeft,
  NotebookTabs,
  Circle ,
} from "lucide-react";

export const menu = [
  {
    id: "dashboard",
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
  },
  {
    id: "reports",
    title: "Reports",
    icon: NotebookTabs,
    children: [
      {
        id: "sales-reports",
        title: "Sales Reports",
        icon: Circle ,
        href: "/reports/sales-reports",
      },
      {
        id: "leads-reports",
        title: "Leads Reports",
        icon: Circle ,
        href: "/reports/leads-reports",
      },
      {
        id: "project-reports",
        title: "Project Reports",
        icon: Circle ,
        href: "/reports/project-reports",
      },
      {
        id: "timesheet-reports",
        title: "Timesheet Reports",
        icon: Circle ,
        href: "/reports/timesheet-reports",
      },
    ],
  },
  {
    id: "proposal",
    title: "Proposal",
    icon: CastIcon,
    children: [
      {
        id: "proposals",
        title: "Proposal",
        icon: Circle ,
        href: "/proposal/proposals",
      },
      {
        id: "proposal-view",
        title: "Proposal View",
        icon: Circle ,
        href: "/proposal/proposal-view",
      },
      {
        id: "proposal-edit",
        title: "Proposal Edit",
        icon: Circle ,
        href: "/proposal/proposal-edit",
      },
      {
        id: "proposal-create",
        title: "Proposal Create",
        icon: Circle ,
        href: "/proposal/proposal-create",
      },
    ],
  },
  {
    id: "analytics",
    title: "Analytics",
    icon: ChartBar,
    children: [
      {
        id: "analytics-overview",
        title: "Overview",
        icon: Circle ,
        href: "/analytics/overview",
      },
      {
        id: "analytics-reports",
        title: "Reports",
        icon: Circle ,
        href: "/analytics/reports",
      },
    ],
  },
  {
    id: "test",
    title: "Dummt",
    icon: LayoutDashboard,
    href: "/ffgb",
  },
  {
    id: "settings",
    title: "Settings",
    icon: Settings,
    children: [
      {
        id: "profile",
        title: "Profile",
        icon: Circle ,
        href: "/settings/profile",
      },
      {
        id: "security",
        title: "Security",
        icon: Circle ,
        href: "/settings/security",
      },
    ],
  },
  {
    id: "website",
    title: "Website",
    icon: PanelsTopLeft,
    children: [
      // Core Pages
      { id: "home", title: "Home", href: "/website/home" },
      { id: "about", title: "About Us", href: "/website/about" },
      { id: "services", title: "Services", href: "/website/services" },
      { id: "products", title: "Products", href: "/website/products" },

      // Content & Trust
      {
        id: "testimonials",
        title: "Testimonials",
        href: "/website/testimonials",
      },
      {
        id: "case-studies",
        title: "Case Studies",
        href: "/website/case-studies",
      },
      { id: "clients", title: "Our Clients", href: "/website/clients" },
      { id: "partners", title: "Partners", href: "/website/partners" },

      // Team & Company
      { id: "team", title: "Team", href: "/website/team" },
      { id: "careers", title: "Careers", href: "/website/careers" },
      { id: "culture", title: "Our Culture", href: "/website/culture" },

      // Blog & Media
      { id: "blog", title: "Blog", href: "/website/blog" },
      {
        id: "blog-categories",
        title: "Blog Categories",
        href: "/website/blog/categories",
      },
      { id: "press", title: "Press & Media", href: "/website/press" },

      // Support & Info
      { id: "faq", title: "FAQ", href: "/website/faq" },
      { id: "contact", title: "Contact", href: "/website/contact" },
      { id: "support", title: "Support", href: "/website/support" },

      // Legal
      {
        id: "privacy-policy",
        title: "Privacy Policy",
        href: "/website/privacy-policy",
      },
      { id: "terms", title: "Terms & Conditions", href: "/website/terms" },
      {
        id: "refund-policy",
        title: "Refund Policy",
        href: "/website/refund-policy",
      },

      // Extra / Advanced
      { id: "pricing", title: "Pricing", href: "/website/pricing" },
      { id: "features", title: "Features", href: "/website/features" },
      {
        id: "integrations",
        title: "Integrations",
        href: "/website/integrations",
      },
    ],
  },
];




