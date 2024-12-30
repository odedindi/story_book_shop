import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';

interface CharacterDetails {
  name: string;
  gender: string;
  age: string;
  hairColor: string;
  eyeColor: string;
  favoriteColor: string;
}

interface CharacterInputProps {
  characterDetails: CharacterDetails;
  setCharacterDetails: (details: CharacterDetails) => void;
  nextStep: () => void;
}

export default function CharacterInput({
  characterDetails,
  setCharacterDetails,
  nextStep,
}: CharacterInputProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      characterDetails.name.trim() &&
      characterDetails.gender &&
      characterDetails.age
    ) {
      nextStep();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCharacterDetails({ ...characterDetails, [name]: value });
  };

  const handleSelectChange = (name: string) => (value: string) => {
    setCharacterDetails({ ...characterDetails, [name]: value });
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
            value={characterDetails.name}
            onChange={handleInputChange}
            placeholder="Enter your character's name"
            required
          />
        </div>
        <div>
          <Label htmlFor="gender">Gender</Label>
          <Select
            name="gender"
            value={characterDetails.gender}
            onValueChange={handleSelectChange('gender')}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="boy">Boy</SelectItem>
              <SelectItem value="girl">Girl</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="age">Age</Label>
          <Input
            type="number"
            id="age"
            name="age"
            value={characterDetails.age}
            onChange={handleInputChange}
            placeholder="Enter your character's age"
            min="1"
            max="100"
            required
          />
        </div>
        <div>
          <Label htmlFor="hairColor">Hair Color</Label>
          <Input
            type="text"
            id="hairColor"
            name="hairColor"
            value={characterDetails.hairColor}
            onChange={handleInputChange}
            placeholder="Enter hair color"
          />
        </div>
        <div>
          <Label htmlFor="eyeColor">Eye Color</Label>
          <Input
            type="text"
            id="eyeColor"
            name="eyeColor"
            value={characterDetails.eyeColor}
            onChange={handleInputChange}
            placeholder="Enter eye color"
          />
        </div>
        <div>
          <Label htmlFor="favoriteColor">Favorite Color</Label>
          <Input
            type="text"
            id="favoriteColor"
            name="favoriteColor"
            value={characterDetails.favoriteColor}
            onChange={handleInputChange}
            placeholder="Enter favorite color"
          />
        </div>
        <Button type="submit" className="w-full">
          Start Your Story
        </Button>
      </form>
    </div>
  );
}
