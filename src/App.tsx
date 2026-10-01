import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { SiteShell } from "components/layout/site-shell";
import { Home } from "pages/HomePage";
import { ApproachPage } from "pages/ApproachPage";
import { SolutionsPage } from "pages/SolutionsPage";
import { StoryPage } from "pages/StoryPage";
import { ContactPage } from "pages/ContactPage";

const titles: Record<string, string> = {
  "/": "NexaCura Healthcare — Physiological Intelligence System",
  "/approach": "How it works · NexaCura Healthcare",
  "/solutions": "Who it's for · NexaCura Healthcare",
  "/story": "The story · NexaCura Healthcare",
  "/contact": "Contact · NexaCura Healthcare",
};

function DocumentTitle() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = titles[pathname] ?? "NexaCura Healthcare";
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <DocumentTitle />
      <SiteShell>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/approach" element={<ApproachPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </SiteShell>
    </BrowserRouter>
  );
}
