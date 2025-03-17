
import React from 'react';
import { Info } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface StageSelectorProps {
  handleReceptionistResponse: (value: string) => void;
  showReceptionistAlert: boolean;
  hasTestedReceptionist: string | undefined;
  handleContinue: () => void;
}

const StageSelector: React.FC<StageSelectorProps> = ({
  handleReceptionistResponse,
  showReceptionistAlert,
  hasTestedReceptionist,
  handleContinue
}) => {
  return (
    <div className="space-y-4">
      <label className="text-sm font-medium">
        Have you tested our AI receptionist?
      </label>
      <Select onValueChange={handleReceptionistResponse}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="yes">Yes</SelectItem>
          <SelectItem value="no">No</SelectItem>
        </SelectContent>
      </Select>

      {showReceptionistAlert && (
        <Alert className="mt-3 bg-primary/5 border-primary/20">
          <Info className="h-4 w-4" />
          <AlertDescription className="text-sm">
            As a reseller in our White Label Program, your reputation depends on the quality of solutions you provide. That's why we've made testing your AI receptionist a crucial step in your registration process.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default StageSelector;
