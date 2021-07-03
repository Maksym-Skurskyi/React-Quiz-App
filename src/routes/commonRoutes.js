import { lazy } from "react";


// Common routes with using React code splitting approach
const Auth = lazy(() => import("../pages/common/Auth/Auth"));
const Quiz = lazy(() => import("../pages/common/Quiz/Quiz"));
const QuizList = lazy(() => import("../pages/common/QuizList/QuizList"));

export const commonRoutes = [
  {
    component: Auth,
    path: "/auth",
    exact: false,
  },
  {
    component: Quiz,
    path: "/quiz/:id",
    exact: false,
  },
  {
    component: QuizList,
    path: "/",
    exact: true,
  },
];
