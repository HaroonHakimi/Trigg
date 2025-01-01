import Navbar from "@/components/global/navbar";
import Sidebar from "@/components/global/sidebar";

import {
  PrefetchUserAutomations,
  PreFetchUserProfile,
} from "@/react-query/prefetch";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import React from "react";

type Props = {
  children: React.ReactNode;
  params: { slug: string };
};

const Layout = async ({ children, params }: Props) => {
  //Query
  // WIP: Query client fetchdata

  const query = new QueryClient();

  await PreFetchUserProfile(query);

  await PrefetchUserAutomations(query);

  return (
    <HydrationBoundary state={dehydrate(query)}>
      <div className="p-3">
        {/* Sidebar */}
        <Sidebar slug={params.slug} />
        {/* Navigation */}

        <div
          className="lg:ml-[250px] lg:pl-10 lg:py-5
    flex flex-col overflow-auto"
        >
          <Navbar slug={params.slug} />
          {children}
        </div>
      </div>
    </HydrationBoundary>
  );
};

export default Layout;
