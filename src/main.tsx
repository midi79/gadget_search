import ReactDOM from "react-dom/client";
import "./index.css";
import MainPage from "./components/MainPage";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./util/http";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
    },
    {
        path: "/:path",
        element: <MainPage />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
    </QueryClientProvider>
);
