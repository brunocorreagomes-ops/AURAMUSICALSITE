import { useState, useEffect } from "react";
import LandingPage from "./components/LandingPage";
import PersonalizationForm from "./components/PersonalizationForm";
import Checkout from "./components/Checkout";
import DeliveryPage from "./components/DeliveryPage";
import PricingGrid from "./components/PricingGrid";
import SuccessPage from "./components/SuccessPage";
import { SongRequest, AppStep } from "./types";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [step, setStep] = useState<AppStep>("landing");
  const [songRequest, setSongRequest] = useState<Partial<SongRequest>>({});

  useEffect(() => {
    // Check if URL indicates a successful purchase (Hotmart redirect)
    if (window.location.pathname === '/obrigado' || window.location.search.includes('obrigado=1')) {
      setStep("success");
    }
  }, []);

  const handleStart = (initialData?: any) => {
    if (initialData) {
      setSongRequest(prev => ({
        ...prev,
        style: initialData.estilo === 'acustico' ? 'Acústico Voz & Violão' : 
               initialData.estilo === 'piano' ? 'Piano & Orquestra' :
               initialData.estilo === 'pop' ? 'Pop / Moderno' :
               initialData.estilo === 'sertanejo' ? 'Sertanejo' : prev.style,
        occasion: initialData.persona === 'namoro' ? 'Namoro / Amor' :
                  initialData.persona === 'amigo' ? 'Amizade' :
                  initialData.persona === 'familia' ? 'Família' : prev.occasion,
        emotion: initialData.vibe === 'romantica' ? 'Romântica' :
                 initialData.vibe === 'engracada' ? 'Engraçada' :
                 initialData.vibe === 'nostalgica' ? 'Nostálgica' : initialData.vibe || prev.emotion
      }));
    }
    setStep("form");
  };
  const handleFormSubmit = (data: Partial<SongRequest>) => {
    setSongRequest(prev => ({
      ...prev,
      ...data,
      planId: 'popular', // default selection
      upsells: {
        expressDelivery: false,
        instrumental: false,
        extended: false,
        pdfLyrics: false,
        spokenMessage: false,
        coverArt: false
      }
    }));
    setStep("pricing");
  };

  const handlePlanSelect = (planId: SongRequest['planId']) => {
    setSongRequest(prev => ({ ...prev, planId }));
    setStep("checkout");
  };

  const handlePaid = () => {
    setStep("delivery");
  };

  return (
    <div className="bg-brand-bg min-h-screen">
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {step === "landing" && <LandingPage onStart={handleStart} />}
          {step === "form" && (
            <PersonalizationForm 
              initialData={songRequest}
              onSubmit={handleFormSubmit} 
              onBack={() => setStep("landing")} 
            />
          )}
          {step === "pricing" && (
            <PricingGrid 
              onSelect={handlePlanSelect} 
              onBack={() => setStep("form")} 
            />
          )}
          {step === "checkout" && (
            <Checkout 
              songRequest={songRequest} 
              onPaid={handlePaid} 
              onBack={() => setStep("pricing")} 
            />
          )}
          {step === "delivery" && <DeliveryPage songRequest={songRequest} />}
          {step === "success" && <SuccessPage />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
