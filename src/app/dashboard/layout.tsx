import { Figtree } from "next/font/google";
import "@/app/globals.css";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/organisms/sidebar/app-sidebar";
import BreadcrumbNav from "@/components/atoms/breadcrumb/Breadcrumb";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${figtree.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <BreadcrumbNav />
            <div className="px-5 py-20">{children}</div>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
