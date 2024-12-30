import { Button } from '@/components/ui/button';
import {
  BasicCharacterDetails,
  StoryDetails,
  CustomizationDetails,
} from '@/app/page';

interface OrderConfirmationProps {
  basicCharacterDetails: BasicCharacterDetails;
  selectedStory: StoryDetails;
  customizationDetails: CustomizationDetails;
  nextStep: () => void;
  prevStep: () => void;
}

export default function OrderConfirmation({
  basicCharacterDetails,
  selectedStory,
  customizationDetails,
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
            <span className="font-semibold">Name:</span>{' '}
            {basicCharacterDetails.name}
          </li>
          <li>
            <span className="font-semibold">Age:</span>{' '}
            {basicCharacterDetails.age}
          </li>
        </ul>
        <h3 className="mb-2 font-semibold">Story:</h3>
        <p className="mb-2">{selectedStory.title}</p>
        <h3 className="mb-2 font-semibold">Customizations:</h3>
        <ul className="mb-4 list-inside list-disc">
          {Object.entries(customizationDetails).map(([key, value]) => (
            <li key={key}>
              <span className="font-semibold">
                {selectedStory.customizationOptions[key].label}:
              </span>{' '}
              {value}
            </li>
          ))}
        </ul>
        <p className="text-sm text-purple-700">
          Your personalized storybook featuring {basicCharacterDetails.name} in{' '}
          {selectedStory.title} is ready to be created!
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
