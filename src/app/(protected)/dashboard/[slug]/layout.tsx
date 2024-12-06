import Navbar from "@/components/global/Navbar";
import Sidebar from "@/components/global/Sidebar";

type Props = {
  children: React.ReactNode;
  params: { slug: string };
};
const Layout = ({ children, params }: Props) => {
  return (
    <div className="p-3">
      {/*Sidebar*/}
      <Sidebar slug={params.slug}></Sidebar>
      
      {/*Navbar*/}
      <div className="lg:ml-[250px] lg:pl-10 lg:py-5 flex flex-col overflow-auto">
        <Navbar slug={params.slug}>
        </Navbar>
        {children}
      </div>
    </div>
  );
};
export default Layout;
