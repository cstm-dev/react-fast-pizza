import CartOverview from "features/Cart/CartOverview.jsx";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "utils/Header.jsx";
import Loader from "utils/Loader.jsx";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="layout">
      {isLoading && <Loader />}

      <Header />

      <main>
        <h1>Content</h1>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
