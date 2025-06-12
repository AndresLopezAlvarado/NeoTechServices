import Header from "./Header";
import { Outlet } from "react-router";
import Footer from "./Footer";

export const Layout = () => {
  return (
    <div>
      <Header />

      <main className="mt-16 min-h-[calc(100dvh-3rem)]">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
