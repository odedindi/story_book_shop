import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ThankYouProps {
  characterName: string;
}

export default function ThankYou({ characterName }: ThankYouProps) {
  return (
    <div className="text-center">
      <h2 className="mb-4 text-2xl font-semibold text-purple-800">
        Thank You for Your Order!
      </h2>
      <p className="mb-4">
        Your personalized storybook featuring {characterName} is being created
        and will be shipped to you soon.
      </p>
      <p className="mb-6">We hope you enjoy your magical adventure!</p>
      <Link href="/">
        <Button>Create Another Story</Button>
      </Link>
    </div>
  );
}
