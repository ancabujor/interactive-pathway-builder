
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, ArrowRight } from 'lucide-react';
import { Collapsible, CollapsibleContent } from '@/components/ui/collapsible';

interface ReadyEmailFormProps {
  showEmailField: boolean;
  readyEmail: string;
  emailError: string;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

const ReadyEmailForm: React.FC<ReadyEmailFormProps> = ({
  showEmailField,
  readyEmail,
  emailError,
  onEmailChange,
  onSubmit
}) => {
  return (
    <Collapsible open={showEmailField} className="mt-3">
      <CollapsibleContent className="mt-3 space-y-2">
        <div className="bg-muted/50 p-2 rounded text-sm">
          <p className="font-medium">Perfect! Your personalized dashboard is ready. Where should we send your business plan?</p>
        </div>
        <div className="space-y-1">
          <Label htmlFor="ready-email">Email Address</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              id="ready-email" 
              placeholder="you@example.com" 
              value={readyEmail} 
              onChange={onEmailChange} 
              className={`pl-9 ${emailError ? 'border-red-500 focus-visible:ring-red-500' : ''}`} 
              type="email" 
            />
          </div>
          {emailError && <p className="text-xs text-red-500 mt-1">{emailError}</p>}
          <Button 
            onClick={onSubmit} 
            className="w-full mt-2" 
            disabled={!readyEmail || !!emailError} 
            size="sm"
          >
            Start my AI Business <ArrowRight className="ml-1 w-3 h-3" />
          </Button>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default ReadyEmailForm;
