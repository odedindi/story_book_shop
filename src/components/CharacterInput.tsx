import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface CharacterInputProps {
  characterName: string;
  setCharacterName: (name: string) => void;
  nextStep: () => void;
}

export default function CharacterInput({
  characterName,
  setCharacterName,
  nextStep,
}: CharacterInputProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (characterName.trim()) {
      nextStep();
    }
  };

  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold text-purple-800">
        Create Your Character
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="characterName"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Character Name
          </label>
          <Input
            type="text"
            id="characterName"
            value={characterName}
            onChange={(e) => setCharacterName(e.target.value)}
            placeholder="Enter your character's name"
            required
            className="w-full"
          />
        </div>
        <Button type="submit" className="w-full">
          Start Your Story
        </Button>
      </form>
    </div>
  );
}
