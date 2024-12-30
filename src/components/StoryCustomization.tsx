import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { StoryDetails, CustomizationDetails } from '@/app/page';

interface StoryCustomizationProps {
  story: StoryDetails;
  customizationDetails: CustomizationDetails;
  setCustomizationDetails: (details: CustomizationDetails) => void;
  nextStep: () => void;
  prevStep: () => void;
}

export default function StoryCustomization({
  story,
  customizationDetails,
  setCustomizationDetails,
  nextStep,
  prevStep,
}: StoryCustomizationProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    nextStep();
  };

  const handleInputChange = (key: string, value: string) => {
    setCustomizationDetails({ ...customizationDetails, [key]: value });
  };

  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold text-purple-800">
        Customize Your {story.title}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {Object.entries(story.customizationOptions).map(([key, option]) => (
          <div key={key}>
            <Label htmlFor={key}>{option.label}</Label>
            {option.type === 'input' ? (
              <Input
                type="text"
                id={key}
                name={key}
                value={customizationDetails[key] || ''}
                onChange={(e) => handleInputChange(key, e.target.value)}
                placeholder={`Enter ${option.label.toLowerCase()}`}
                required
              />
            ) : (
              <Select
                value={customizationDetails[key] || ''}
                onValueChange={(value) => handleInputChange(key, value)}
              >
                <SelectTrigger>
                  <SelectValue
                    placeholder={`Select ${option.label.toLowerCase()}`}
                  />
                </SelectTrigger>
                <SelectContent>
                  {option.options?.map((opt) => (
                    <SelectItem key={opt} value={opt}>
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          </div>
        ))}
        <div className="flex justify-between">
          <Button type="button" variant="outline" onClick={prevStep}>
            Back
          </Button>
          <Button type="submit">Review Order</Button>
        </div>
      </form>
    </div>
  );
}
