
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { ArrowRight, Building, Users } from 'lucide-react';

interface CompanyFormProps {
  companyName: string;
  setCompanyName: (name: string) => void;
  clientCount: number;
  setClientCount: (count: number) => void;
  onSubmit: () => void;
}

const CompanyForm: React.FC<CompanyFormProps> = ({
  companyName,
  setCompanyName,
  clientCount,
  setClientCount,
  onSubmit
}) => {
  const handleSubmit = () => {
    if (!companyName.trim()) {
      toast.error('Please enter your company name');
      return;
    }
    onSubmit();
  };

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        <div className="space-y-1">
          <Label htmlFor="companyName">Company Name</Label>
          <div className="relative">
            <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              id="companyName"
              placeholder="Your Company Name" 
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>

        <div className="space-y-1">
          <Label htmlFor="clientCount">Potential Clients</Label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              id="clientCount"
              type="number" 
              placeholder="How many clients could you sell to?" 
              value={clientCount}
              onChange={(e) => setClientCount(Number(e.target.value))}
              min={1}
              className="pl-9"
            />
          </div>
        </div>
      </div>

      <Button 
        className="w-full"
        onClick={handleSubmit}
      >
        Continue
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};

export default CompanyForm;
