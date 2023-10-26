import { BrowserRouter, Routes as RouteList, Route } from "react-router-dom";
import NotFound from "../../components/Error/NotFound";
import Header from "../../components/Base/Header";
import Main from "../../components/Main/Main";
import Footer from "../../components/Base/Footer";
import Redirect from "../../components/Redirect/Redirect";

export default function Routes() {
  return (
    <BrowserRouter basename="/">
      <Header />
      <div className="h-100 d-flex flex-column justify-content-between">
        <RouteList>
          <Route path="" element={<Main />} />
          <Route path="*" element={<NotFound />} />
          <Route path="r/:shortUrl" element={<Redirect />} />
        </RouteList>
        <Footer />
      </div>
    </BrowserRouter>
  );
}