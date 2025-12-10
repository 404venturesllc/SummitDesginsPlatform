import { useState, useEffect } from "react";
import ResponsiveLanding from "./components/ResponsiveLanding";
import PortfolioPage from "./components/PortfolioPage";
import ContactPage from "./components/ContactPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    // Handle initial hash
    const hash = window.location.hash.slice(1) || "home";
    setCurrentPage(hash);

    // Listen for hash changes
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || "home";
      setCurrentPage(hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  if (currentPage === "portfolio") {
    return <PortfolioPage />;
  }

  if (currentPage === "contact") {
    return <ContactPage />;
  }

  return <ResponsiveLanding />;
}