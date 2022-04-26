import GlobalLayout from "./pages/_layout";

import Index from "./pages/index";
import LecturesIndex from "./pages/lectures/index";
import LectureIndex from "./pages/lectures/[id]";
import NotFound from "./pages/error";

export const routes = [
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      { path: "/", element: <Index /> },
      { path: "/lectures", element: <LecturesIndex /> },
      { path: "/lectures/:id", element: <LectureIndex /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];
