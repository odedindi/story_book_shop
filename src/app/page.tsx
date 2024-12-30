'use client';

import CharacterInput from '@/components/CharacterInput';
import OrderConfirmation from '@/components/OrderConfirmation';
import StorySelection from '@/components/StorySelection';
import ThankYou from '@/components/ThankYou';
import { useState } from 'react';

export default function Home() {
  const [step, setStep] = useState(1);
  const [characterName, setCharacterName] = useState('');
  const [selectedStory, setSelectedStory] = useState('');

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-blue-100">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8 text-center">
          <h1 className="mb-2 text-4xl font-bold text-purple-800">
            Magical Storybook Creator
          </h1>
          <p className="text-xl text-purple-600">
            Create your own personalized adventure!
          </p>
        </header>
        <main className="mx-auto max-w-2xl rounded-lg bg-white p-6 shadow-lg md:p-8">
          {step === 1 && (
            <CharacterInput
              characterName={characterName}
              setCharacterName={setCharacterName}
              nextStep={nextStep}
            />
          )}
          {step === 2 && (
            <StorySelection
              selectedStory={selectedStory}
              setSelectedStory={setSelectedStory}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}
          {step === 3 && (
            <OrderConfirmation
              characterName={characterName}
              selectedStory={selectedStory}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}
          {step === 4 && <ThankYou characterName={characterName} />}
        </main>
      </div>
    </div>
  );
}
