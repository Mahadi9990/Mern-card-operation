import { CalendarArrowDown, ChartNoAxesCombined, LayoutDashboard, ShieldCheck, ShoppingCart } from "lucide-react";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";



const adminSidebarMenuItems = [
    {
        id:'dashboard',
        label: "Dashboard",
        path:"/admin/dashboard",
        icon:<LayoutDashboard />
    },
    {
        id:'products',
        label: "Products",
        path:"/admin/products",
        icon:<ShoppingCart />
    },
    {
        id:'orders',
        label: "Orders",
        path:"/admin/orders",
        icon:<CalendarArrowDown />
    },
    {
        id:'features',
        label: "Features",
        path:"/admin/features",
        icon:<ShieldCheck />
    },

]

function AdminSidebar({open,setOpen}) {

    const navigate = useNavigate()

    function MenuItmes ({setOpen}){
        const navigate =useNavigate()

        return <nav className="mt-8 flex flex-col gap-2">
            {
                adminSidebarMenuItems.map((menuItems)=>
                <div onClick={()=>{
                navigate(menuItems.path)
                setOpen ? setOpen(false) : null
                }} key={menuItems.id} className="flex itmes-center gap-2 py-2 px-3 rounded-md text-muted-foreground hover:bg-muted hover:text-foreground cursor-pointer">
                    {menuItems.icon}
                    <span>{menuItems.label}</span>
                </div>
                )
            }
        </nav>
    }

    return ( <Fragment>
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetContent side="left" className='w-64'>
                <div className="flex flex-col h-full">
                    <SheetHeader className='border-b'>
                        <SheetTitle className='flex gap-2'>
                         <ChartNoAxesCombined size={30} />
                          <span>Admin panel</span>
                        </SheetTitle>
                    </SheetHeader>
                    <MenuItmes setOpen={setOpen}/>
                </div>
            </SheetContent>
        </Sheet>
        <aside className="hidden lg:flex w-64 flex-col border-r bg-background p-6">
            <div onClick={()=>navigate('/admin/dashboard')} className="flex cursor-pointer items-center gap-2">
                <ChartNoAxesCombined size={30} />
                <h1 className="text-xl font-extrabold">Admin panel</h1>
            </div>
        <MenuItmes/>
        </aside>
    </Fragment> );
}

export default AdminSidebar;