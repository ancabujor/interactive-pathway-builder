import React from 'react';
import { Building, Users } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
interface CompanyDetailsFormProps {
  companyName: string;
  clientCount: number;
  onCompanyNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClientCountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const CompanyDetailsForm: React.FC<CompanyDetailsFormProps> = ({
  companyName,
  clientCount,
  onCompanyNameChange,
  onClientCountChange
}) => {
  return <>
      <div className="space-y-1 mt-4">
        <Label htmlFor="company-name">Company Name</Label>
        <div className="relative">
          <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input id="company-name" placeholder="Your Agency or Company" value={companyName} onChange={onCompanyNameChange} className="pl-9" />
        </div>
      </div>
      
      <div className="space-y-1 mt-4">
        <Label htmlFor="client-count">Number of Clients</Label>
        <div className="relative">
          <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input id="client-count" type="number" min="1" placeholder="5" value={clientCount} onChange={onClientCountChange} className="pl-9" />
        </div>
        <p className="text-xs text-muted-foreground mt-1">Estimate how many clients you'll onboard in the first month(s)</p>
      </div>
    </>;
};
export default CompanyDetailsForm;