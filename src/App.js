import { createStore, applyMiddleware } from "redux";
import { Provider, useDispatch } from "react-redux";
import thunk from "redux-thunk";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Counter from "./pages/Counter";
import rootReducer from "./reducers/index";
import Api from "./pages/Api";

//Making a global redux store for the application
const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route exact path="/" element={<Counter />} />
          <Route exact path="/api" element={<Api />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
