import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Auth";
import { NotificationProvider } from "./utilis/NotificaitonSystem";
import AddProduct from "./components/product/AddProduct";
import UploadImage from "./components/product/UploadImage";
import EditProduct from "./components/product/EditProduct";
import LoginPage from "./components/auth/Login";
import RegisterPage from "./components/auth/Register";
import ScrollToTop from "./utilis/ScrollToTop";
import AddCategory from "./components/category/AddCategory";
import EditCategory from "./components/category/EditCategory";
import AddSubCategory from "./components/category/AddSubCategory";
import EditSubCategory from "./components/category/EditSubCategory";
import CreateBusiness from "./components/business/CreateBusiness";
import AddPerson from "./components/personal/AddPerson";
import MyBusinessProfileCard from "./components/business/MyBusinessProfileCard";
import AddTable from "./components/table/AddTable";
import AdminProfile from "./pages/AdminProfilePage";
import ChangePassword from "./components/AdminProfile/ChangePassword ";
import SittingPage from "./components/AdminProfile/SittingPage ";
import { ExpensePage } from "./pages/ExpensePage ";
import WifiCollector from "./components/business/WifiCollector";
import WifiList from "./components/business/WifiList";
import CariPage from "./pages/CariPage";
import ReportPage from "./pages/ReportPage";
import ProductList from "./components/product/ProductList";
import CategoryList from "./components/category/CategoryList";
import TableList from "./components/table/TableList";
import PersonalList from "./components/personal/PersonList";
import OrderList from "./components/order/OrderList";
import StepCounter from "./utilis/StepCounter ";

const App = () => {

  return (
    <NotificationProvider>
    <BrowserRouter>
    <ScrollToTop /> {/* Sayfa değişikliklerinde üst kısmına kaydırma */}

      <Routes>
        <Route path="/dad" element={<StepCounter />} />
        <Route path="/auth" element={<Auth/>} >
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
        </Route>

        <Route path="/" element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reports/expense" element={<ExpensePage />} />
          <Route path="/reports/sales" element={<ReportPage />} />
          <Route path="/reports/current-accounts" element={<CariPage />} />
          <Route path="/product/list" element={<ProductList />} />
          <Route path="/product/add" element={<AddProduct />} />
          <Route path="/product/:productId/edit" element={<EditProduct />} />
          <Route path="/product/:productId/upload-image" element={<UploadImage />} />
          <Route path="/category/list" element={<CategoryList/>} />
          <Route path="/category/add" element={<AddCategory />} />
          <Route path="/category/add-subcategory" element={<AddSubCategory />} />
          <Route path="/category/:subcategoryId/edit-subcategory" element={<EditSubCategory />} />
          <Route path="/category/:categoryId/edit" element={<EditCategory />} />
          <Route path="/business/profile" element={<MyBusinessProfileCard />} />
          <Route path="/business/add" element={<CreateBusiness />} />
          <Route path="/business/add-wifi" element={<WifiCollector />} />
          <Route path="/business/wifi-list" element={<WifiList />} />
          <Route path="/order/list" element={<OrderList />} />
          <Route path="/personel/list" element={<PersonalList />} />
          <Route path="/personel/add" element={<AddPerson />} />
          <Route path="/table/list" element={<TableList />} />
          <Route path="/table/add" element={<AddTable />} />
        </Route>
        <Route path="/profile" element={<AdminProfile />} />
        <Route path="/profile/change-password" element={<ChangePassword />} />
        <Route path="/profile/setting" element={<SittingPage />} />
       



          
      </Routes>

    </BrowserRouter>
    </NotificationProvider>
  );
};

export default App;
