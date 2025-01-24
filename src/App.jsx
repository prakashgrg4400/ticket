import { lazy, Suspense } from "react";
import "./App.css";
import RootLayout from "./layout/RootLayout";
import { eventDetailsLoader } from "./loaders/eventDetailsLoader";
import Loading from "./components/Loading";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router";
import Test from "./components/Test/Test";
import { Provider } from "react-redux";
import store from "./redux/store";

const Events = lazy(() => import("./pages/Events"));
const Home = lazy(() => import("./pages/Home"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const EventDetails = lazy(() => import("./pages/EventDetails"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const ConfirmPayment = lazy(() => import("./pages/ConfirmPayment"));
const SuccessPayment = lazy(() => import("./pages/SuccessPayment"));
const FailurePayment = lazy(() => import("./pages/FailurePayment"));

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={
                <Suspense fallback={<Loading />}>
                    <RootLayout />
                </Suspense>
            }
        >
            <Route index element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route
                path="/eventDetails/:id"
                loader={eventDetailsLoader}
                element={<EventDetails />}
            />
            <Route path="/cart/:id" element={<Cart />} />
            <Route path="/checkout/:id" element={<Checkout />} />
            <Route path="/confirmPayment" element={<ConfirmPayment />} />
            <Route path="/success" element={<SuccessPayment />} />
            <Route path="/failure" element={<FailurePayment />} />
            <Route path="/test" element={<Test />} />
        </Route>
    )
);

function App() {
    return (
        <>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </>
    );
}

export default App;
