import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import ContactHome from "./components/ContactHome";
import { Footer } from "./components/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage";
import ServicesPage from './pages/ServicesPageNew';
import { ProjectsPage } from "./pages/ProjectsPage";
import { ContactPage } from "./pages/ContactPage";
import { GetAQuotePage } from "./pages/GetAQuotePage";
import { useEffect } from "react";
import { QuoteModalProvider } from "./contexts/QuoteModalContext";
 

// Helper hook to handle Intersection Observer for animations
function useScrollReveal(trigger: unknown) {
  useEffect(() => {
    // Check if IntersectionObserver is available
    if (!('IntersectionObserver' in window)) return;
    
    // Elements with reveal class will be animated when they come into view
    const elementsToReveal = document.querySelectorAll('.reveal');
    
    const observerOptions = {
      root: null, // relative to viewport
      rootMargin: '0px 0px -50px 0px', // reveal when element is 50px within viewport
      threshold: 0.15 // trigger when 15% of element is visible
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add active class to trigger animation
          entry.target.classList.add('active');
          
          // If element should only animate once
          if (entry.target.classList.contains('once')) {
            observer.unobserve(entry.target);
          }
        } else {
          // Remove active class if element should animate multiple times
          if (!entry.target.classList.contains('once')) {
            entry.target.classList.remove('active');
          }
        }
      });
    }, observerOptions);
    
    // Observe all elements with reveal class
    elementsToReveal.forEach(element => {
      observer.observe(element);
    });
    
    // Clean up observer on component unmount
    return () => {
      elementsToReveal.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, [trigger]);
}

export default function App() {
  // Re-run reveal setup on route changes so animations work after navigation
  const location = useLocation();
  useScrollReveal(location.pathname);

  // Scroll to top on route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return (
    <QuoteModalProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Services />
                  <Projects />
                  <ContactHome />
                </>
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/get-a-quote" element={<GetAQuotePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </QuoteModalProvider>
  );
}
