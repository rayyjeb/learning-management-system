"use client"
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import Loading from "@/components/Loading";
import { cn } from "@/lib/utils";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import Navbar from "@/components/Navbar";
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const [courseId, setCourseId] = useState<string | null>(null)
    const { user, isLoaded } = useUser()

    // hande use effect isCoursePage

    if (!isLoaded) return <Loading />

    if (!user) return <div>Please sign in to access this page</div>
    return (
        <SidebarProvider>
            <div className="dashboard">
                <AppSidebar/>
                <div className="dashboard__content">
                    {/* chapter sidebare will go */}
                    <div className={cn('dashboard__main',)} style={{ height: "100vh" }}>
                        <Navbar isCoursePage/>
                        <main className="dashboard__body">{children}</main>
                    </div>
                </div>
            </div>
        </SidebarProvider>
    );
} 4