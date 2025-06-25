import { Outlet } from "react-router-dom";
import AdminSidebar from "./sidebar";
import AdminHeader from "./header";
import { useState } from "react";

function AdminLayout() {
    const [openSidebar, setopenSidebar] = useState(false);

    return ( <div className="flex min-h-screen w-full">
     {/* admin sidebar */}
     <AdminSidebar open={openSidebar} setOpen={setopenSidebar}/>
     <div className="flex flex-1 flex-col">
        {/* admin header */}
        <AdminHeader setOpen={setopenSidebar}/>
        <main className="flex flex-1 bg-muted/40 p-4 md:p-6">
            <Outlet/>
        </main>
     </div>
    </div> );
}

export default AdminLayout;