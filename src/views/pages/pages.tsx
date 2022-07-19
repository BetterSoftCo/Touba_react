import { Route, Routes, useLocation } from "react-router-dom";
import { CompanyProfileEdit, CompanyProfileExcess, CompanyProfileProduct, CompanyProfileStart, Dashboard, DetailsOrder, EditOrder, Finance, LikeCard, Report, Review, TableOrder, WorkGroup } from "./dashboard";
import { About, Card, CompanyProfile, ExcessCapacity, Help, Home, Login, Membership, Product, ProductSingle, Register, ResultExcessCapacity, ResultProduct, ResultSupplier, SideService, SpecialOffer, Supplier } from "./desktop";
import { default as DashboarNav } from "../layout/dashboard/dashobord";
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';

import { TopNavHome, TopNav, BottomNav, Footer } from "../layout/layout";

function Pages() {
  const location = useLocation();

  return (
    <div>
      <>
        {
          location.pathname.includes("/dashboard") ||
            location.pathname === "/login" ||
            location.pathname === "/register" ? (null) : (
            <>
              {location.pathname === "/" ? <TopNavHome /> : <TopNav />}
              <BottomNav />
            </>
          )}
        {location.pathname.includes("/dashboard") ? (
          <div className="row p-0 m-0">
            <div className="col-2">
              <DashboarNav />
            </div>
            <div className="col-10">
              <Routes>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="dashboard/profile-edit" element={<CompanyProfileEdit />} />
                <Route path="dashboard/profile-start" element={<CompanyProfileStart />} />
                <Route path="dashboard/profile-excess" element={<CompanyProfileExcess />} />
                <Route path="dashboard/profile-product" element={<CompanyProfileProduct />} />
                <Route path="dashboard/finance" element={<Finance />} />
                <Route path="dashboard/like-card" element={<LikeCard />} />
                <Route path="dashboard/details-order" element={<DetailsOrder />} />
                <Route path="dashboard/edit-order" element={<EditOrder />} />
                <Route path="dashboard/report" element={<Report />} />
                <Route path="dashboard/review" element={<Review />} />
                <Route path="dashboard/table-order" element={<TableOrder />} />
                <Route path="dashboard/table-order" element={<TableOrder />} />
                <Route path="dashboard/work-group" element={<WorkGroup />} />
              </Routes>
            </div>
          </div>
        ) : (null)}
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="card" element={<Card />} />
          <Route path="company-profile" element={<CompanyProfile />} />
          <Route path="excess-capacity" element={<ExcessCapacity />} />
          <Route path="help" element={<Help />} />
          <Route path="login" element={<Login />} />
          <Route path="membership" element={<Membership />} />
          <Route path="product" element={<Product />} />
          <Route path="product-single" element={<ProductSingle />} />
          <Route path="register" element={<Register />} />
          <Route path="result-excess-capacity" element={<ResultExcessCapacity />} />
          <Route path="result-product" element={<ResultProduct />} />
          <Route path="result-supplier" element={<ResultSupplier />} />
          <Route path="side-service" element={<SideService />} />
          <Route path="special-offer" element={<SpecialOffer />} />
          <Route path="detail-product" element={<ProductSingle />} />
          <Route path="supplier" element={<Supplier />} />
        </Routes>
        {
          location.pathname.includes("/dashboard") ||
            location.pathname === "/login" ||
            location.pathname === "/register"
            ? (null) : (
              <Footer />
            )
        }
      </>
    </div>
  );
}

export default Pages;
