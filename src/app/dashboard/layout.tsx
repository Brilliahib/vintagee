import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/organisms/sidebar/app-sidebar";
import BreadcrumbNav from "@/components/atoms/breadcrumb/Breadcrumb";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
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
