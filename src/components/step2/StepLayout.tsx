
import React from 'react';
import { UserData } from '@/context/UserContext';
import DashboardContent from '@/components/DashboardContent';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';
import { ArrowRight } from 'lucide-react';
import StepContent from './StepContent';

interface StepLayoutProps {
  showPreviewUpdate: boolean;
  userData: UserData;
  stage: 'location' | 'email' | 'receptionist';
  email: string;
  setEmail: (email: string) => void;
  handleEmailSubmit: () => void;
  handleNextStage: () => void;
  handleReceptionistResponse: (value: string) => void;
  showReceptionistAlert: boolean;
  hasTestedReceptionist: string | undefined;
  handleContinue: () => void;
}

const StepLayout: React.FC<StepLayoutProps> = ({
  showPreviewUpdate,
  userData,
  stage,
  email,
  setEmail,
  handleEmailSubmit,
  handleNextStage,
  handleReceptionistResponse,
  showReceptionistAlert,
  hasTestedReceptionist,
  handleContinue
}) => {
  return (
    <div className="flex-1 overflow-hidden">
      {/* Desktop view with ResizablePanelGroup */}
      <div className="hidden md:block h-full">
        <ResizablePanelGroup
          direction="horizontal"
          className="h-full w-full rounded-lg overflow-hidden border"
        >
          <ResizablePanel defaultSize={33} minSize={25} maxSize={40}>
            <div className="h-full overflow-y-auto p-4 bg-background">
              <StepContent 
                stage={stage}
                userData={userData}
                email={email}
                setEmail={setEmail}
                handleEmailSubmit={handleEmailSubmit}
                handleNextStage={handleNextStage}
                handleReceptionistResponse={handleReceptionistResponse}
                showReceptionistAlert={showReceptionistAlert}
                hasTestedReceptionist={hasTestedReceptionist}
                handleContinue={handleContinue}
              />
            </div>
          </ResizablePanel>
          
          <ResizableHandle withHandle className="bg-primary/20 hover:bg-primary/30" />
          
          <ResizablePanel defaultSize={67}>
            <div className={`h-full overflow-hidden relative ${showPreviewUpdate ? 'before:absolute before:inset-0 before:bg-primary/5 before:animate-pulse before:z-10 before:rounded-lg before:pointer-events-none' : ''}`}>
              <div className="absolute top-2 right-2 bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full z-10 animate-fade-in">
                <ArrowRight className="inline-block w-3 h-3 mr-1" />
                Live Preview
              </div>
              <DashboardContent userData={userData} />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>

      {/* Mobile view without ResizablePanelGroup */}
      <div className="md:hidden grid grid-cols-1 gap-4 h-full">
        <StepContent 
          stage={stage}
          userData={userData}
          email={email}
          setEmail={setEmail}
          handleEmailSubmit={handleEmailSubmit}
          handleNextStage={handleNextStage}
          handleReceptionistResponse={handleReceptionistResponse}
          showReceptionistAlert={showReceptionistAlert}
          hasTestedReceptionist={hasTestedReceptionist}
          handleContinue={handleContinue}
        />
        
        {/* Mobile preview - smaller version */}
        <div className={`overflow-hidden relative h-[300px] border rounded-lg ${showPreviewUpdate ? 'before:absolute before:inset-0 before:bg-primary/5 before:animate-pulse before:z-10 before:rounded-lg' : ''}`}>
          <div className="absolute top-2 right-2 bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full z-10">
            <ArrowRight className="inline-block w-3 h-3 mr-1" />
            Preview
          </div>
          <DashboardContent userData={userData} />
        </div>
      </div>
    </div>
  );
};

export default StepLayout;
