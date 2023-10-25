import { BrowserRouter, Routes as RouteList, Route } from "react-router-dom";
import NotFound from "../../components/Error/NotFound";
import Header from "../../components/Base/Header";
import Main from "../../components/Main/Main";
import Footer from "../../components/Base/Footer";

export default function Routes() {
  return (
    <BrowserRouter basename="/">
      <Header />
      <RouteList>
        <Route path="" element={<Main />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="r/:shortUrl" /> */}
      </RouteList>
      <Footer />
    </BrowserRouter>
  );
}