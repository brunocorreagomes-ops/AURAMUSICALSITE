import { Suspense, lazy } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "motion/react";

const LandingPage = lazy(() => import("./components/LandingPage"));
const ObrigadoPage = lazy(() => import("./components/ObrigadoPage"));
const PendentePage = lazy(() => import("./components/PendentePage"));
const AnalisePage = lazy(() => import("./components/AnalisePage"));
const SobreNosPage = lazy(() => import("./components/SobreNosPage"));
const PrivacidadePage = lazy(() => import("./components/PrivacidadePage"));
const TermosLegaisPage = lazy(() => import("./components/TermosLegaisPage"));
const SuportePage = lazy(() => import("./components/SuportePage"));

export default function App() {
  return (
  <HashRouter>
      <div className="bg-brand-bg min-h-screen selection:bg-brand-accent selection:text-black">
        <AnimatePresence mode="wait">
          <Suspense fallback={<div className="min-h-screen bg-brand-bg flex items-center justify-center"><div className="w-12 h-12 rounded-full border-t-2 border-brand-accent animate-spin" /></div>}>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/obrigado" element={<ObrigadoPage />} />
              <Route path="/pendente" element={<PendentePage />} />
              <Route path="/analise" element={<AnalisePage />} />
              <Route path="/sobre-nos" element={<SobreNosPage />} />
              <Route path="/privacidade" element={<PrivacidadePage />} />
              <Route path="/termos-legais" element={<TermosLegaisPage />} />
              <Route path="/suporte" element={<SuportePage />} />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </div>
    </HashRouter>
  );
}
