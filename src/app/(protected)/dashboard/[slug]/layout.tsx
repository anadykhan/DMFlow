import Navbar from "@/components/global/Navbar";
import Sidebar from "@/components/global/Sidebar";
import {
  prefetchUserAutomations,
  prefetchUserProfile,
} from "@/react-query/prefetch";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

type Props = {
  children: React.ReactNode;
  params: { slug: string };
};

const query = new QueryClient();

const Layout = async ({ children, params }: Props) => {
  await prefetchUserProfile(query);

  await prefetchUserAutomations(query);

  return (
    <HydrationBoundary state={dehydrate(query)}>
      <div className="p-3">
        {/*Sidebar*/}
        <Sidebar slug={params.slug}></Sidebar>

        {/*Navbar*/}
        <div className="lg:ml-[250px] lg:pl-10 lg:py-5 flex flex-col overflow-auto">
          <Navbar slug={params.slug}></Navbar>
          {children}
        </div>
      </div>
    </HydrationBoundary>
  );
};
export default Layout;
