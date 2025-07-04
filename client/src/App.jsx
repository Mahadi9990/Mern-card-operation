import { Routes,Route } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import AdminLayout from "./components/admin-view/layout";
import AdminFeatures from "./pages/admin-view/features";
import AdminProducts from "./pages/admin-view/product";
import AdminOrders from "./pages/admin-view/orders";
import AdminDashboard from "./pages/admin-view/dashboard";
import ShopingLayout from "./components/shopping-view/layout";
import NotFound from "./pages/not-found";
import Home from "./pages/homepage";
import ShopingHome from "./pages/shopping-view/home";
import ShopingList from "./pages/shopping-view/listing";
import ShopingAccount from "./pages/shopping-view/accoutn";
import ShopingChackout from "./pages/shopping-view/chackout";
import CheackAuth from "./components/common/check-auth";
import UnatuthPage from "./pages/unAuthPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "./store/auth-slice";
import { Skeleton } from "@/components/ui/skeleton"

function App() {
  const {user,isAuthenticated,isloading}=useSelector((state)=>state.auth)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(checkAuth())
  }, [dispatch]);

  if(isloading) return <Skeleton className="h-[20px] bg-black w-[100px] rounded-full" />

  return (<div className="flex flex-col overflow-hidden bg-white">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/auth" element={<CheackAuth isAuthenticated={isAuthenticated} user={user}>
          <AuthLayout/>
        </CheackAuth>}>
        <Route path="login" element={<AuthLogin/> }/>
        <Route path="register" element={<AuthRegister/> }/>
      </Route>
      <Route path="/admin" element={<CheackAuth isAuthenticated={isAuthenticated} user={user}>
        <AdminLayout/>
      </CheackAuth>}>
        <Route path="dashboard" element={<AdminDashboard/> }/>
        <Route path="orders" element={<AdminOrders/> }/>
        <Route path="products" element={<AdminProducts/> }/>
        <Route path="features" element={<AdminFeatures/> }/>
      </Route>
      <Route path="/shop" element={<CheackAuth isAuthenticated={isAuthenticated} user={user}>
        <ShopingLayout/>
        </CheackAuth>}>
        <Route path="home" element={<ShopingHome/> }/>
        <Route path="list" element={<ShopingList/> }/>
        <Route path="account" element={<ShopingAccount/> }/>
        <Route path="cheackout" element={<ShopingChackout/> }/>
      </Route>
      <Route path="*" element={<NotFound/>}/>
      <Route path="/unauthriage" element={<UnatuthPage/>}/>
    </Routes>
  </div> 
  );
}

export default App;