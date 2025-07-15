import React from 'react'; // Import React Library to create components
import ReactDOM from 'react-dom/client'; // Import REACT DOM for rendering components to the DOM
import './index.css'; // Import global CSS styles
import App from './App'; // Import the main App component
import AboutPage from './pages/AboutPage'; //Import AboutPage component
import ContactPage from './pages/ContactPage'; //Import ContactPage component
import FaqPage from './pages/FaqPage'; //Import FaqPage component 
import PaymentPage from './pages/PaymentPage'; //Import PaymentPage component
import QuickLinkPage from "./pages/QuickLinkPage"; //Import QuickLinkPage component
import TermsOfServicePage from './pages/TermsOfServicePage'; //Import TermsOfServicePage
import reportWebVitals from './reportWebVitals'; //Import for measuring performance metrics
import {
  createBrowserRouter, //Import method to create a browser router for navigation
  RouterProvider, // Import RouterProvider to provide routing capabilities
} from "react-router-dom"; // Import routing library for React
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'; // Import PrivacyPolicyPage component
// router to go to different pages
const router = createBrowserRouter([
  // paths to go to each seperate page
  {
    path:"/", // Home route
    element: <App/>, //Render the App component for the home page
  },
  {
    path:"/about", // Route for the About page
    element: <AboutPage/>, //Render the AboutPage component 
  },
  {
    path:"/contact", // Route for Contact page
    element: <ContactPage/>, //Render the ContactPage component 
  },
  {
    path:"/faq", // Route for Faq page
    element: <FaqPage/>, // Render the FaqPage component
  },
  {
    path:"/payment", // Route for the Payment Page
    element: <PaymentPage/>, //Render the Payment Page 
  },
  {
    path:"/quick", // Route for the QuickLink page
    element: <QuickLinkPage/>, // Render the QuickLink page
  },
  {
    path:"/term", // Route for the TermofService page
    element: <TermsOfServicePage/>, //Render the QuickLink page
  },
  {
    path:"/privacy", // Route for the Privacy Policy page
    element: <PrivacyPolicyPage/>, // Render the Privacy Policy Page
  },
]);

// Get the root element from the HTML file
const root = ReactDOM.createRoot(document.getElementById('root'));
//Render the RouteProvider with the defined router to manage navigation
root.render(
  <RouterProvider router={router} /> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
