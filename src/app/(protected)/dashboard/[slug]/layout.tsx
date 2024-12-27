
import Navbar from "@/components/global/navbar";
import Sidebar from "@/components/global/sidebar";
import React from "react";

type Props = {
  children: React.ReactNode;
  params: { slug: string };
};

const Layout = ({ children, params }: Props) => {
  //Query
  // WIP: Query client fetchdata
  return <div className="p-3">
    {/* Sidebar */}
    <Sidebar slug={params.slug}/>
    {/* Navigation */}

    <div className="lg:ml-[250px] lg:pl-10 lg:py-5
    flex flex-col overflow-auto">
      <Navbar slug={params.slug}/>
      {children}
    </div>
  </div>;
};

export default Layout;
