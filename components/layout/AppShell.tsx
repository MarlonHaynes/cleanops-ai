"use client";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";
import { AdminChatWidget } from "@/components/AdminChatWidget";
import { useAppStore } from "@/store/useAppStore";
import { cn } from "@/lib/utils";
import { DEMO_NOTIFICATIONS, DEMO_BOOKING_REQUESTS } from "@/data/demo";

const DESKTOP = "(min-width: 1024px)";

export function AppShell({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const { sidebarOpen, setSidebarOpen, setNotifications, setBookingRequests } = useAppStore();

  useEffect(() => {
    if (status === "unauthenticated") router.push("/login");
  }, [status, router]);

  useEffect(() => {
    setNotifications(DEMO_NOTIFICATIONS);
    setBookingRequests(DEMO_BOOKING_REQUESTS);
  }, [setNotifications, setBookingRequests]);

  // Follow the breakpoint: pinned open on desktop, collapsed to a drawer below it.
  useEffect(() => {
    const mq = window.matchMedia(DESKTOP);
    const sync = (e: MediaQueryListEvent) => setSidebarOpen(e.matches);
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, [setSidebarOpen]);

  // On mobile the drawer covers the page, so dismiss it once navigation happens.
  useEffect(() => {
    if (!window.matchMedia(DESKTOP).matches) setSidebarOpen(false);
  }, [pathname, setSidebarOpen]);

  // Don't let the page scroll behind the open drawer.
  useEffect(() => {
    const locked = sidebarOpen && !window.matchMedia(DESKTOP).matches;
    document.body.style.overflow = locked ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [sidebarOpen]);

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 rounded-full border-2 border-brand-blue border-t-transparent animate-spin" />
          <p className="text-sm text-text-secondary">Loading CleanOps AI...</p>
        </div>
      </div>
    );
  }

  if (!session) return null;

  return (
    <div className="min-h-screen bg-surface-50 flex">
      <Sidebar />
      {sidebarOpen && (
        <div
          aria-hidden
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[1px] lg:hidden"
        />
      )}
      <div className={cn("flex-1 flex flex-col min-w-0 transition-[margin] duration-300", sidebarOpen && "lg:ml-[220px]")}>
        <Topbar />
        <main className="flex-1 p-4 sm:p-5">{children}</main>
      </div>
      <AdminChatWidget />
    </div>
  );
}
