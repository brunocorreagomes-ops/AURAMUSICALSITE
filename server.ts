import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Mock Endpoints
  app.post("/api/orders", (req, res) => {
    const { songRequest, paymentInfo } = req.body;
    console.log("New Order Received:", songRequest);
    
    // System Design: Automation Logic
    // 1. Capture user data (email, memory, style)
    // 2. Send confirmation Email/WhatsApp (Zapier/Webhooks)
    // 3. Create production task in our proprietary AI Composition Engine
    // 4. Queue artist review and mastering
    // 5. Trigger delivery flow (generate protected URL)

    res.status(201).json({ 
      success: true, 
      orderId: "ORD-" + Math.random().toString(36).substring(7).toUpperCase(),
      deliveryUrl: "/gift/demo-123"
    });
  });

  app.post("/api/briefing", async (req, res) => {
    const briefingData = req.body;
    
    console.log("--- NOVO BRIEFING RECEBIDO ---");
    console.log(JSON.stringify(briefingData, null, 2));
    
    // Automação via Make.com
    const webhookUrl = process.env.VITE_MAKE_WEBHOOK_URI || process.env.MAKE_WEBHOOK_URI || process.env.MAKE_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...briefingData,
            timestamp: new Date().toISOString(),
            source: "Aura Musical - Site"
          })
        });
        console.log("Briefing enviado para o Make.com com sucesso.");
      } catch (error) {
        console.error("Erro ao enviar para o Make.com:", error);
      }
    } else {
      console.warn("Aviso: MAKE_WEBHOOK_URL não configurada nas variáveis de ambiente.");
    }

    res.status(200).json({ success: true, message: "Briefing recebido com sucesso!" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Aura Musical Server running on http://localhost:${PORT}`);
    console.log("SYSTEM ENGINE: Ready for AI-assisted composition tasks.");
  });
}

startServer();
