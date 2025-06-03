import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

export const Layout = () => {
  return (
    <div>
      <Header />

      <main className="mt-12 min-h-[calc(100dvh-3rem)]">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
