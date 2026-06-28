import {
  LayoutDashboard,
  Users,
  UtensilsCrossed,
  Receipt,
  Wallet,
  BarChart3,
  Settings,
} from "lucide-react";

export const navigation = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Members",
    href: "/dashboard/members",
    icon: Users,
  },
  {
    title: "Meals",
    href: "/dashboard/meals",
    icon: UtensilsCrossed,
  },
  {
    title: "Expenses",
    href: "/dashboard/expenses",
    icon: Receipt,
  },
  {
    title: "Payments",
    href: "/dashboard/payments",
    icon: Wallet,
  },
  {
    title: "Reports",
    href: "/dashboard/reports",
    icon: BarChart3,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];
