import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FaqPage from './pages/FaqPage';
import PaymentPage from './pages/PaymentPage';
import QuickLinkPage from "./pages/QuickLinkPage";
import TermsOfServicePage from './pages/TermsOfServicePage';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

// router to go to different pages
const router = createBrowserRouter([
  // paths to go to each seperate page
  {
    path:"/",
    element: <App/>,
  },
  {
    path:"/about",
    element: <AboutPage/>,
  },
  {
    path:"/contact",
    element: <ContactPage/>,
  },
  {
    path:"/faq",
    element: <FaqPage/>,
  },
  {
    path:"/payment",
    element: <PaymentPage/>,
  },
  {
    path:"/quick",
    element: <QuickLinkPage/>,
  },
  {
    path:"/term",
    element: <TermsOfServicePage/>,
  },
  {
    path:"/privacy",
    element: <PrivacyPolicyPage/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} /> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
