
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import PageTransition from "./components/PageTransition";
import Index from "./pages/Index";
import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import Step3 from "./pages/Step3";
import ReceptionistDemo from "./pages/ReceptionistDemo";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <UserProvider>
        <BrowserRouter>
          <div className="h-screen w-screen overflow-hidden flex flex-col">
            <Toaster />
            <Sonner />
            <Routes>
              <Route path="/" element={<Navigate to="/step1" replace />} />
              <Route path="/step1" element={<Step1 />} />
              <Route path="/step2" element={<Step2 />} />
              <Route path="/receptionist-demo" element={<ReceptionistDemo />} />
              <Route path="/step3" element={<Step3 />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </UserProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
