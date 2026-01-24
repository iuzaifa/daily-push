import {
  LayoutDashboard,
  CastIcon,
  ChartBar,
  Settings,
  PanelsTopLeft,
  NotebookTabs,
} from "lucide-react";

export const sidebarData = [
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
      { title: "Sales Reports", href: "/reports/sales-reports" },
      { title: "Leads Reports", href: "/reports/leads-reports" },
      { title: "Project Reports", href: "/reports/project-reports" },
      { title: "Timesheet Reports", href: "/reports/timesheet-reports" },
    ],
  },
  {
    id: "proposal",
    title: "Proposal",
    icon: CastIcon,
    children: [
      { title: "Proposal", href: "/proposal/proposals" },
      { title: "Proposal View", href: "/proposal/proposal-view" },
      { title: "Proposal Edit", href: "/proposal/proposal-edit" },
      { title: "Proposal Create", href: "/proposal/proposal-create" },
    ],
  },

  {
    id: "analytics",
    title: "Analytics",
    icon: ChartBar,
    children: [
      { title: "Overview", href: "/analytics/overview" },
      { title: "Reports", href: "/analytics/reports" },
    ],
  },
  {
    id: "settings",
    title: "Settings",
    icon: Settings,
    children: [
      { title: "Profile", href: "/settings/profile" },
      { title: "Security", href: "/settings/security" },
    ],
  },
  {
    id: "website",
    title: "Website",
    icon: PanelsTopLeft,
    children: [
      // Core Pages
      { title: "Home", href: "/website/home" },
      { title: "About Us", href: "/website/about" },
      { title: "Services", href: "/website/services" },
      { title: "Products", href: "/website/products" },
      // Content & Trust
      { title: "Testimonials", href: "/website/testimonials" },
      { title: "Case Studies", href: "/website/case-studies" },
      { title: "Our Clients", href: "/website/clients" },
      { title: "Partners", href: "/website/partners" },
      // Team & Company
      { title: "Team", href: "/website/team" },
      { title: "Careers", href: "/website/careers" },
      { title: "Our Culture", href: "/website/culture" },
      // Blog & Media
      { title: "Blog", href: "/website/blog" },
      { title: "Blog Categories", href: "/website/blog/categories" },
      { title: "Press & Media", href: "/website/press" },
      // Support & Info
      { title: "FAQ", href: "/website/faq" },
      { title: "Contact", href: "/website/contact" },
      { title: "Support", href: "/website/support" },
      // Legal
      { title: "Privacy Policy", href: "/website/privacy-policy" },
      { title: "Terms & Conditions", href: "/website/terms" },
      { title: "Refund Policy", href: "/website/refund-policy" },
      // Extra / Advanced
      { title: "Pricing", href: "/website/pricing" },
      { title: "Features", href: "/website/features" },
      { title: "Integrations", href: "/website/integrations" },
    ],
  },
];
