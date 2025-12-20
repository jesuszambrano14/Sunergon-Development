import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

// Add animations style
const style = document.createElement('style');
style.innerHTML = `
/* Animation Definitions */

/* Fade In */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Slide Up */
@keyframes slideUp {
  from { transform: translateY(30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

/* Slide In (Left to Right) */
@keyframes slideIn {
  from { transform: translateX(-30px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

/* Slide In (Right to Left) */
@keyframes slideInRight {
  from { transform: translateX(30px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

/* Scale In */
@keyframes scaleIn {
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

/* Scroll Dot Animation */
@keyframes scrollDot {
  0% { transform: translateY(0); opacity: 1; }
  50% { transform: translateY(6px); opacity: 0.5; }
  100% { transform: translateY(0); opacity: 1; }
}

/* Animation Utility Classes */

/* Fade In Animation */
.animate-fadeIn {
  animation: fadeIn 0.8s ease-out forwards;
}

.animate-fadeIn-slow {
  animation: fadeIn 1.2s ease-out forwards;
}

/* Slide Up Animation */
.animate-slideUp {
  animation: slideUp 0.8s ease-out forwards;
}

/* Slide In Animation */
.animate-slideIn {
  animation: slideIn 0.8s ease-out forwards;
}

/* Slide In Right Animation */
.animate-slideInRight {
  animation: slideInRight 0.8s ease-out forwards;
}

/* Scale In Animation */
.animate-scaleIn {
  animation: scaleIn 0.8s ease-out forwards;
}

/* Scroll Dot Animation */
.animate-scrollDot {
  animation: scrollDot 1.5s infinite ease-in-out;
}

/* Staggered Animation Classes */
.stagger-1 {
  animation-delay: 0.1s;
}

.stagger-2 {
  animation-delay: 0.2s;
}

.stagger-3 {
  animation-delay: 0.3s;
}

.stagger-4 {
  animation-delay: 0.4s;
}

.stagger-5 {
  animation-delay: 0.5s;
}

/* Grid Pattern */
.bg-grid-pattern {
  background-size: 40px 40px;
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
}

/* Reveal Animation Classes */
.reveal {
  opacity: 0;
  transition: all 0.8s ease-in-out;
}

.reveal.active {
  opacity: 1;
}

.reveal.fade-up {
  transform: translateY(30px);
}

.reveal.fade-up.active {
  transform: translateY(0);
}
`;

document.head.appendChild(style);


createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);