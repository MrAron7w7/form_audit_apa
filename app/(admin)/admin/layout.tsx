import { AppSidebar } from "@/components/admin/app-sidebar";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

function LayoutAdminDashboard({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default LayoutAdminDashboard;
