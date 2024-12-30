import { Button } from '@/components/ui/button';

interface OrderConfirmationProps {
  characterName: string;
  selectedStory: string;
  nextStep: () => void;
  prevStep: () => void;
}

const storyTitles = {
  adventure: 'The Lost Treasure of Atlantis',
  mystery: 'The Haunted Mansion Mystery',
  'fairy-tale': 'The Enchanted Forest',
  superhero: 'Cosmic Defenders',
};

export default function OrderConfirmation({
  characterName,
  selectedStory,
  nextStep,
  prevStep,
}: OrderConfirmationProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold text-purple-800">
        Confirm Your Order
      </h2>
      <div className="mb-6 rounded-lg bg-purple-50 p-4">
        <p className="mb-2">
          <span className="font-semibold">Character Name:</span> {characterName}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Selected Story:</span>{' '}
          {storyTitles[selectedStory as keyof typeof storyTitles]}
        </p>
        <p className="text-sm text-purple-700">
          Your personalized storybook will feature {characterName} in an
          exciting adventure!
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between">
          <Button type="button" variant="outline" onClick={prevStep}>
            Back
          </Button>
          <Button type="submit">Place Order</Button>
        </div>
      </form>
    </div>
  );
}
