import { Button } from '@/components/ui/button';

interface CharacterDetails {
  name: string;
  gender: string;
  age: string;
  hairColor: string;
  eyeColor: string;
  favoriteColor: string;
}

interface OrderConfirmationProps {
  characterDetails: CharacterDetails;
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
  characterDetails,
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
        <h3 className="mb-2 font-semibold">Character Details:</h3>
        <ul className="mb-4 list-inside list-disc">
          <li>
            <span className="font-semibold">Name:</span> {characterDetails.name}
          </li>
          <li>
            <span className="font-semibold">Gender:</span>{' '}
            {characterDetails.gender}
          </li>
          <li>
            <span className="font-semibold">Age:</span> {characterDetails.age}
          </li>
          {characterDetails.hairColor && (
            <li>
              <span className="font-semibold">Hair Color:</span>{' '}
              {characterDetails.hairColor}
            </li>
          )}
          {characterDetails.eyeColor && (
            <li>
              <span className="font-semibold">Eye Color:</span>{' '}
              {characterDetails.eyeColor}
            </li>
          )}
          {characterDetails.favoriteColor && (
            <li>
              <span className="font-semibold">Favorite Color:</span>{' '}
              {characterDetails.favoriteColor}
            </li>
          )}
        </ul>
        <p className="mb-2">
          <span className="font-semibold">Selected Story:</span>{' '}
          {storyTitles[selectedStory as keyof typeof storyTitles]}
        </p>
        <p className="text-sm text-purple-700">
          Your personalized storybook will feature {characterDetails.name} in an
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
