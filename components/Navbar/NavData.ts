export interface NavItem {
  icon: string;
  title: string;
  link: string;
  text: string;
  id?: string | number;
}

export const resources: NavItem[] = [
  {
    icon: "/images/for-devs-icon.svg",
    title: "For Developers",
    link: "/for-developers",
    text: "Check out our API Documentation",
  },
];

export const company: NavItem[] = [
  {
    icon: "/images/about-icon.svg",
    title: "About",
    link: "/about",
    text: "Learn what RoutePay is all about.",
  },
  {
    icon: "/images/careers-icon.svg",
    title: "Careers",
    link: "/careers",
    text: "Join the RoutePay team.",
  },
  {
    icon: "/images/compliance-icon.svg",
    title: "Compliance",
    link: "/compliance",
    text: "Explore RoutePay’s industry compliance standards.",
  },
  {
    icon: "/images/contact-icon.svg",
    title: "Contact",
    link: "/contact-us",
    text: "Contact us or visit us.",
  },
  {
    icon: "/images/terms-icon.svg",
    title: "Privacy",
    link: "/terms-and-conditions",
    text: "Privacy",
  },
  {
    icon: "/images/terms-icon.svg",
    title: "Terms",
    link: "/terms",
    text: "Terms",
  },
  {
    icon: "/images/compliance-icon.svg",
    title: "Cookies Policy",
    link: "/cookies-policy",
    text: "Cookies Policy",
  },
  {
    icon: "/images/compliance-icon.svg",
    title: "Data Protection",
    link: "/data-protection",
    text: "Data Protection",
  },
];

export const businessSolutions: NavItem[] = [
  {
    icon: "/images/payment-gateway-icon.svg",
    title: "Payment Gateway Collections",
    link: "/pay-ins",
    text: "Send, receive, and manage payments seamlessly.",
  },
  {
    icon: "/images/payout-icon.svg",
    title: "Payouts / Disbursements",
    link: "/pay-outs",
    text: "Disburse funds to multiple recipients at once.",
  },
  {
    icon: "/images/payment-link-icon.svg",
    title: "Payment Links",
    link: "/payment-links",
    text: "Create secure payment links in seconds—no technical expertise required.",
  },
];

export const personalSolutions: NavItem[] = [
  {
    icon: "/images/mobile-app-icon.svg",
    title: "Mobile App",
    link: "/for-mobile",
    text: "Transfer funds or make payments with just a few taps",
  },
];
