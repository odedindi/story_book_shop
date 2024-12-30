import { BasicCharacterDetails } from '@/app/page';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface BasicCharacterInputProps {
  basicCharacterDetails: BasicCharacterDetails;
  setBasicCharacterDetails: (details: BasicCharacterDetails) => void;
  nextStep: () => void;
}

export default function BasicCharacterInput({
  basicCharacterDetails,
  setBasicCharacterDetails,
  nextStep,
}: BasicCharacterInputProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (basicCharacterDetails.name.trim() && basicCharacterDetails.age > 0) {
      nextStep();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBasicCharacterDetails({
      ...basicCharacterDetails,
      [name]: name === 'age' ? parseInt(value) || 0 : value,
    });
  };

  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold text-purple-800">
        Create Your Character
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Character Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={basicCharacterDetails.name}
            onChange={handleInputChange}
            placeholder="Enter your character's name"
            required
            aria-required="true"
          />
        </div>
        <div>
          <Label htmlFor="age">Age</Label>
          <Input
            type="number"
            id="age"
            name="age"
            value={basicCharacterDetails.age || ''}
            onChange={handleInputChange}
            placeholder="Enter your character's age"
            min="1"
            max="100"
            required
            aria-required="true"
          />
        </div>
        <Button type="submit" className="w-full">
          Choose Your Story
        </Button>
      </form>
    </div>
  );
}
