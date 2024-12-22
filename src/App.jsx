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

const Events = lazy(() => import("./pages/Events"));
const Home = lazy(() => import("./pages/Home"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const EventDetails = lazy(() => import("./pages/EventDetails"));

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route
                index
                element={
                    <Suspense fallback={<Loading />}>
                        <Home />
                    </Suspense>
                }
            />
            <Route
                path="/events"
                element={
                    <Suspense fallback={<Loading />}>
                        <Events />
                    </Suspense>
                }
            />
            <Route
                path="/contact"
                element={
                    <Suspense fallback={<Loading />}>
                        <ContactUs />
                    </Suspense>
                }
            />
            <Route
                path="/about"
                element={
                    <Suspense fallback={<Loading />}>
                        <AboutUs />
                    </Suspense>
                }
            />
            <Route
                path="/eventDetails/:id"
                loader={eventDetailsLoader}
                element={
                    <Suspense fallback={<Loading />}>
                        <EventDetails />
                    </Suspense>
                }
            />
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
