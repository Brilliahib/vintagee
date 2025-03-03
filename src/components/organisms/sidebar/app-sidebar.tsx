"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import {
  ArrowLeftRight,
  Clock,
  FileClock,
  LayoutDashboard,
  Shirt,
  ShoppingBag,
  ShoppingCart,
} from "lucide-react";
import { Session } from "next-auth";
import { NavUser } from "./NavUser";

const monitoring = [
  { icon: <LayoutDashboard />, name: "Dashboard", href: "/dashboard" },
  {
    icon: <ShoppingCart />,
    name: "Pembelian",
    href: "/dashboard/purchase",
  },
  { icon: <ShoppingBag />, name: "Penjualan", href: "/dashboard/sales" },
  { icon: <Shirt />, name: "Tukar Fashion", href: "/dashboard/exchange" },
];

const history = [
  { icon: <Clock />, name: "Riwayat Pembelian", href: "#" },
  { icon: <FileClock />, name: "Riwayat Penjualan", href: "#" },
  { icon: <ArrowLeftRight />, name: "Riwayat Tukar Fashion", href: "#" },
];

interface AppsidebarProps {
  session: Session;
}

export function AppSidebar({ session }: AppsidebarProps) {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className="h-14 cursor-default justify-center border-b bg-white dark:bg-slate-950">
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="ml-2 flex items-center gap-x-3">
              <h1 className="font-semibold tracking-tight">Vintagee</h1>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="bg-white pb-20 dark:bg-slate-950">
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {monitoring.map((item, i) => (
                <SidebarMenuItem key={i}>
                  <SidebarMenuButton
                    asChild
                    className={`hover:bg-slate-100 dark:hover:bg-slate-900 ${
                      pathname === item.href
                        ? "bg-slate-200 dark:bg-slate-800"
                        : ""
                    }`}
                  >
                    <Link href={item.href}>
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Riwayat Data</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {history.map((item, i) => (
                <SidebarMenuItem key={i}>
                  <SidebarMenuButton
                    asChild
                    className={`hover:bg-slate-100 dark:hover:bg-slate-900 ${
                      pathname === item.href
                        ? "bg-slate-200 dark:bg-slate-800"
                        : ""
                    }`}
                  >
                    <Link href={item.href}>
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser session={session!} />
      </SidebarFooter>
    </Sidebar>
  );
}
