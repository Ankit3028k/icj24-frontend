import React from "react";
import AdminNewsForm from "../Components/Admin/NewsPost.jsx";
import AdminCategoryForm from "../Components/Admin/AdminCategoryForm.jsx";

import CategoriesList from "../Components/Admin/CategoriesList.jsx";

function Admin() {
  return (
    <div>
      {/* Main content */}
      <div className="flex flex-wrap px-2 py-4">
        {/* Main content takes full width on mobile, half on medium screens */}
        <div className="flex-1 w-full md:w-3/4">
          <div className="mt-6">
            <AdminNewsForm />

          </div>
          
        </div>

        {/* Sidebar */}
        <div className="w-full md:w-1/4 pl-3 mt-6 md:mt-0">
          <div className="border border-gray-600">
            <AdminCategoryForm />
          </div>
          
          {/*  <WeatherForecasting /> */}
           <CategoriesList />
        </div>
      </div>
    </div>
  );
}

export default Admin;
