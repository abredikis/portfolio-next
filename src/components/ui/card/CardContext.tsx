import { createContext, useContext } from 'react';
import type { CardVariants } from './Card';

type CardContextType = CardVariants;

const CardContext = createContext<CardContextType | null>(null);

export function useCardContext() {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error(
      'Card subcomponents cannot be rendered outside the Card component'
    );
  }
  return context;
}

type CardProviderProps = {
  children: React.ReactNode;
} & CardVariants;

export function CardProvider({ children, ...rest }: CardProviderProps) {
  return (
    <CardContext.Provider value={{ ...rest }}>{children}</CardContext.Provider>
  );
}
