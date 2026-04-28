import { useState } from "react";
import LandingPage from "./components/LandingPage";
import PersonalizationForm from "./components/PersonalizationForm";
import Checkout from "./components/Checkout";
import DeliveryPage from "./components/DeliveryPage";
import { SongRequest, AppStep } from "./types";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [step, setStep] = useState<AppStep>("landing");
  const [songRequest, setSongRequest] = useState<Partial<SongRequest>>({});

  const handleStart = () => setStep("form");
  const handleFormSubmit = (data: Partial<SongRequest>) => {
    setSongRequest(data);
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
              onSubmit={handleFormSubmit} 
              onBack={() => setStep("landing")} 
            />
          )}
          {step === "checkout" && (
            <Checkout 
              songRequest={songRequest} 
              onPaid={handlePaid} 
              onBack={() => setStep("form")} 
            />
          )}
          {step === "delivery" && <DeliveryPage songRequest={songRequest} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
