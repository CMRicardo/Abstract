interface Option {
  title: string;
  image: string;
  description: string;
}

export const OPTIONS: Option[] = [
  {
    title: "Using Abstract",
    description:
      "Abstract lets you manage, version, and document your designs in oneplace.",
    image: "/images/Using-Abstract.png",
  },
  {
    title: "Manage your account",
    description:
      "Configure your account settings, such as your email, profile details, and password.",
    image: "/images/Manage-Account.png",
  },
  {
    title: "Manage organizations, teams, and projects",
    description:
      "Use Abstract organizations, teams, and projects to organize your people and your work.",
    image: "/images/Manage-Organizations.png",
  },
  {
    title: "Manage billing",
    description: "Change subscriptions and payment details.",
    image: "/images/Manage-Billing.png",
  },
  {
    title: "Authenticate to Abstract",
    description:
      "Set up and configure SSO, SCIM, and Just-in-Time provisioning.",
    image: "/images/Authenticate.png",
  },
  {
    title: "Abstract support",
    description: "Get in touch with a human.",
    image: "/images/Support.png",
  },
];