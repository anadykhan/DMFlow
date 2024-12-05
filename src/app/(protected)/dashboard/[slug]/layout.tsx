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
    </div>
  );
};
export default Layout;
