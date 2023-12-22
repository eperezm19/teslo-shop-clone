import { Sidebar, TopMenu } from "@/components";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <TopMenu />
      <main className="px-0 sm:px-10">{children}</main>
    </div>
  );
}
