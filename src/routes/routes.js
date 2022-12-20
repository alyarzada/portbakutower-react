import { lazy } from "react";

import Home from "../layout/Home";
import ControlPanel from "../pages/ControlPanel/ControlPanel";
import LoginPage from "../auth/Login";

const ComplexPanel = lazy(() => import("../pages/ComplexPanel/ComplexPanel"));
const CalendarPage = lazy(() => import("../pages/FullCalendar/CalendarPage"));
const Profile = lazy(() => import("../pages/Profile/Profile"));
const Notifications = lazy(() =>
  import("../pages/Notifications/Notifications")
);
const NotFound404 = lazy(() => import("../pages/NotFound404"));
const Contacts = lazy(() => import("../pages/Contact/Contacts"));
const InfoTable = lazy(() => import("../pages/InfoTable/InfoTable"));
const Requests = lazy(() => import("../pages/Managment/Requests/Requests"));
const CreateNewRequest = lazy(() =>
  import("../pages/Managment/Requests/CreateNewRequest")
);
const CommunalServices = lazy(() =>
  import("../pages/Managment/CommunalServices/CommunalServices")
);
const Communal = lazy(() =>
  import("../pages/Managment/CommunalServices/Communal")
);
const EntryCards = lazy(() =>
  import("../pages/Managment/EntryCard/EntryCards")
);
const RenterRegistration = lazy(() =>
  import("../pages/Managment/RenterRegistration/RenterRegistration")
);
const News = lazy(() => import("../pages/ComplexPanel/News"));
const Chat = lazy(() => import("../pages/ComplexPanel/Chat"));
const SavedPosts = lazy(() => import("../pages/ComplexPanel/SavedPosts"));
const Phone = lazy(() => import("../pages/Managment/CommunalServices/Phone"));
const AllRequests = lazy(() =>
  import("../pages/Managment/Requests/AllRequests")
);
const Information = lazy(() =>
  import("../pages/Managment/Requests/Information")
);
const Request = lazy(() => import("../pages/Managment/Requests/Request"));
const Suggestion = lazy(() => import("../pages/Managment/Requests/Suggestion"));
const Archive = lazy(() => import("../pages/Managment/Requests/Archive"));
const Compliant = lazy(() => import("../pages/Managment/Requests/Compliant"));
const Question = lazy(() => import("../pages/Managment/Requests/Question"));
const MeetingRoom = lazy(() =>
  import("../pages/Managment/LocalClub/MeetingRoom")
);
const Massage = lazy(() => import("../pages/Managment/LocalClub/Massage"));
const Cinema = lazy(() => import("../pages/Managment/LocalClub/Cinema"));
const NewEntryCard = lazy(() =>
  import("../pages/Managment/EntryCard/NewEntryCard")
);
const NewParkingCard = lazy(() =>
  import("../pages/Managment/EntryCard/NewParkingCard")
);
const Menu = lazy(() => import("../pages/Restaurant/Menu"));
const Card = lazy(() => import("../pages/Restaurant/Card"));
const TenantRegistration = lazy(() =>
  import("../pages/ControlPanel/TenantRegistration")
);
const Internet = lazy(() =>
  import("../pages/Managment/CommunalServices/Internet")
);
const Tv = lazy(() => import("../pages/Managment/CommunalServices/Tv"));
const RentPayment = lazy(() => import("../pages/PaymentAndFinance/RentPayment"));

const routes = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <ControlPanel />,
      },
      {
        path: "contact",
        element: <Contacts />,
      },
      {
        path: "information",
        element: <InfoTable />,
      },
      {
        path: "calendar",
        element: <CalendarPage />,
      },
      {
        path: "rentpayment",
        element: <RentPayment />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
      {
        path: "restaurant-menu-orders",
        element: <Menu />,
      },
      {
        path: "restaurant-menu-orders/card",
        element: <Card />,
      },
      {
        path: "communalservices",
        element: <CommunalServices />,
      },
      {
        path: "communalservices/telephone",
        element: <Phone />,
      },
      {
        path: "communalservices/utilities",
        element: <Communal />,
      },
      {
        path: "/communalservices/internet",
        element: <Internet />,
      },
      {
        path: "communalservices/tv",
        element: <Tv />,
      },
      {
        path: "requests",
        element: <Requests />,
      },
      {
        path: "user-card-request",
        element: <EntryCards />,
      },
      {
        path: "meetingroom",
        element: <MeetingRoom />,
      },
      {
        path: "massage",
        element: <Massage />,
      },
      {
        path: "cinema",
        element: <Cinema />,
      },
      {
        path: "user-tenant-registration",
        element: <RenterRegistration />,
      },
      {
        path: "tenant-registration",
        element: <TenantRegistration />,
      },
      {
        path: "user-card-request/access/create",
        element: <NewEntryCard />,
      },
      {
        path: "user-card-request/parking/create",
        element: <NewParkingCard />,
      },
      {
        path: "/requests",
        element: <Requests />,
        children: [
          {
            index: true,
            element: <AllRequests />,
          },
          {
            path: "createnewrequest",
            element: <CreateNewRequest />,
          },
          {
            path: "question",
            element: <Question />,
          },
          {
            path: "suggestion",
            element: <Suggestion />,
          },
          {
            path: "compliant",
            element: <Compliant />,
          },
          {
            path: "information",
            element: <Information />,
          },
          {
            path: "request",
            element: <Request />,
          },
          {
            path: "archive",
            element: <Archive />,
          },
        ],
      },
      {
        path: "complexpanel",
        element: <ComplexPanel />,
        children: [
          {
            index: true,
            element: <News />,
          },
          {
            path: "savedposts",
            element: <SavedPosts />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
  {
    path: "*",
    element: <NotFound404 />,
  },
];

export default routes;
