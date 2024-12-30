import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
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
          {children}
        </main>
      </div>
    </div>
  );
}
