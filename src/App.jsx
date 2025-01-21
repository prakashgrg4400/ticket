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
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

const Events = lazy(() => import("./pages/Events"));
const Home = lazy(() => import("./pages/Home"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const EventDetails = lazy(() => import("./pages/EventDetails"));

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
            <Route path="/test" element={<Test />} />
        </Route>
    )
);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
