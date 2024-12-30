import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BasicCharacterDetails, StoryDetails } from '@/app/page';

interface ThankYouProps {
  basicCharacterDetails: BasicCharacterDetails;
  selectedStory: StoryDetails;
}

export default function ThankYou({
  basicCharacterDetails,
  selectedStory,
}: ThankYouProps) {
  return (
    <div className="text-center">
      <h2 className="mb-4 text-2xl font-semibold text-purple-800">
        Thank You for Your Order!
      </h2>
      <p className="mb-4">
        Your personalized storybook featuring {basicCharacterDetails.name} in
        &quot;{selectedStory.title}&quot; is being created and will be shipped
        to you soon.
      </p>
      <p className="mb-6">
        We hope {basicCharacterDetails.name} enjoys their magical adventure!
      </p>
      <Link href="/">
        <Button>Create Another Story</Button>
      </Link>
    </div>
  );
}
