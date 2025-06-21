import { Outlet } from "react-router-dom";
import ShopingHeader from "./header";

function ShopingLayout() {
    return ( <div className="flex flex-col bg-white overflow-hidden">
        {/* Shoping Header */}
        <ShopingHeader/>
        <main className="flex flex-col w-full">
            <Outlet/>
        </main>
    </div> );
}

export default ShopingLayout;