import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface CharacterDetails {
  name: string;
  gender: string;
  age: string;
  hairColor: string;
  eyeColor: string;
  favoriteColor: string;
}

interface ThankYouProps {
  characterDetails: CharacterDetails;
}

export default function ThankYou({ characterDetails }: ThankYouProps) {
  return (
    <div className="text-center">
      <h2 className="mb-4 text-2xl font-semibold text-purple-800">
        Thank You for Your Order!
      </h2>
      <p className="mb-4">
        Your personalized storybook featuring {characterDetails.name}, a{' '}
        {characterDetails.age}-year-old {characterDetails.gender}, is being
        created and will be shipped to you soon.
      </p>
      <p className="mb-6">We hope you enjoy your magical adventure!</p>
      <Link href="/">
        <Button>Create Another Story</Button>
      </Link>
    </div>
  );
}
