import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

interface StorySelectionProps {
  selectedStory: string;
  setSelectedStory: (story: string) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const stories = [
  {
    id: 'adventure',
    title: 'The Lost Treasure of Atlantis',
    description:
      'Embark on an underwater adventure to find the legendary lost city.',
  },
  {
    id: 'mystery',
    title: 'The Haunted Mansion Mystery',
    description:
      'Solve the spooky secrets hidden within an old, mysterious house.',
  },
  {
    id: 'fairy-tale',
    title: 'The Enchanted Forest',
    description:
      'Journey through a magical forest filled with talking animals and fairy creatures.',
  },
  {
    id: 'superhero',
    title: 'Cosmic Defenders',
    description:
      'Join a team of superheroes to save the galaxy from an evil alien invasion.',
  },
];

export default function StorySelection({
  selectedStory,
  setSelectedStory,
  nextStep,
  prevStep,
}: StorySelectionProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedStory) {
      nextStep();
    }
  };

  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold text-purple-800">
        Choose Your Adventure
      </h2>
      <form onSubmit={handleSubmit}>
        <RadioGroup
          value={selectedStory}
          onValueChange={setSelectedStory}
          className="mb-6 space-y-4"
        >
          {stories.map((story) => (
            <div key={story.id} className="flex items-center space-x-2">
              <RadioGroupItem value={story.id} id={story.id} />
              <Label htmlFor={story.id} className="flex flex-col">
                <span className="font-semibold">{story.title}</span>
                <span className="text-sm text-gray-600">
                  {story.description}
                </span>
              </Label>
            </div>
          ))}
        </RadioGroup>
        <div className="flex justify-between">
          <Button type="button" variant="outline" onClick={prevStep}>
            Back
          </Button>
          <Button type="submit" disabled={!selectedStory}>
            Choose Your Adventure
          </Button>
        </div>
      </form>
    </div>
  );
}
