import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./navigations/MainRoutes";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <MainRoutes />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
