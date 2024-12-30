import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { StoryDetails } from '@/app/page';

interface StorySelectionProps {
  stories: StoryDetails[];
  selectedStory: StoryDetails | null;
  setSelectedStory: (story: StoryDetails) => void;
  nextStep: () => void;
  prevStep: () => void;
}

export default function StorySelection({
  stories,
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
          value={selectedStory?.id}
          onValueChange={(value) =>
            setSelectedStory(stories.find((s) => s.id === value) || stories[0])
          }
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
            Customize Your Story
          </Button>
        </div>
      </form>
    </div>
  );
}
