'use client';

import { useState } from 'react';
import Layout from '@/components/Layout';
import BasicCharacterInput from '@/components/BasicCharacterInput';
import StorySelection from '@/components/StorySelection';
import StoryCustomization from '@/components/StoryCustomization';
import OrderConfirmation from '@/components/OrderConfirmation';
import ThankYou from '@/components/ThankYou';

export interface BasicCharacterDetails {
  name: string;
  age: number;
}

export interface StoryDetails {
  id: string;
  title: string;
  description: string;
  customizationOptions: {
    [key: string]: {
      type: 'select' | 'input';
      label: string;
      options?: string[];
    };
  };
}

export interface CustomizationDetails {
  [key: string]: string;
}

const stories: StoryDetails[] = [
  {
    id: 'space-adventure',
    title: 'Space Adventure',
    description: 'Embark on an intergalactic journey to save the universe!',
    customizationOptions: {
      alienFriend: { type: 'input', label: "Alien Friend's Name" },
      spaceship: {
        type: 'select',
        label: 'Spaceship Color',
        options: ['Red', 'Blue', 'Green', 'Silver'],
      },
      planet: {
        type: 'select',
        label: 'Planet to Explore',
        options: ['Mars', 'Jupiter', 'Saturn', 'Neptune'],
      },
    },
  },
  {
    id: 'underwater-quest',
    title: 'Underwater Quest',
    description: 'Dive into an oceanic adventure to discover hidden treasures!',
    customizationOptions: {
      seaCreature: {
        type: 'select',
        label: 'Sea Creature Companion',
        options: ['Dolphin', 'Octopus', 'Seahorse', 'Turtle'],
      },
      treasure: { type: 'input', label: 'Hidden Treasure' },
      underwaterCity: { type: 'input', label: 'Underwater City Name' },
    },
  },
  {
    id: 'enchanted-forest',
    title: 'Enchanted Forest',
    description: 'Explore a magical forest filled with mythical creatures!',
    customizationOptions: {
      magicalPower: {
        type: 'select',
        label: 'Magical Power',
        options: [
          'Invisibility',
          'Flying',
          'Talking to Animals',
          'Shape-shifting',
        ],
      },
      forestGuardian: { type: 'input', label: "Forest Guardian's Name" },
      enchantedItem: { type: 'input', label: 'Enchanted Item' },
    },
  },
];

export default function CustomStorybookShop() {
  const [step, setStep] = useState(1);
  const [basicCharacterDetails, setBasicCharacterDetails] =
    useState<BasicCharacterDetails>({ name: '', age: 0 });
  const [selectedStory, setSelectedStory] = useState<StoryDetails | null>(null);
  const [customizationDetails, setCustomizationDetails] =
    useState<CustomizationDetails>({});

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <Layout>
      {step === 1 && (
        <BasicCharacterInput
          basicCharacterDetails={basicCharacterDetails}
          setBasicCharacterDetails={setBasicCharacterDetails}
          nextStep={nextStep}
        />
      )}
      {step === 2 && (
        <StorySelection
          stories={stories}
          selectedStory={selectedStory}
          setSelectedStory={setSelectedStory}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 3 && selectedStory && (
        <StoryCustomization
          story={selectedStory}
          customizationDetails={customizationDetails}
          setCustomizationDetails={setCustomizationDetails}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 4 && selectedStory && (
        <OrderConfirmation
          basicCharacterDetails={basicCharacterDetails}
          selectedStory={selectedStory}
          customizationDetails={customizationDetails}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 5 && selectedStory && (
        <ThankYou
          basicCharacterDetails={basicCharacterDetails}
          selectedStory={selectedStory}
        />
      )}
    </Layout>
  );
}
