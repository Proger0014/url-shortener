import { BrowserRouter, Routes as RouteList, Route } from "react-router-dom";
import NotFound from "../../components/Error/NotFound";

export default function Routes() {
  return (
    <BrowserRouter basename="/">
      <RouteList>
        <Route path="*" element={<NotFound />} />
      </RouteList>
    </BrowserRouter>
  );
}