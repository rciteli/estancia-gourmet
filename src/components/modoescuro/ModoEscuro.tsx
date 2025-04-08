// ContextoTema.tsx
import { createContext, useState, useContext } from 'react';

const TemaContext = createContext({
  isDark: false,
  toggleTema: () => {},
});

export function TemaProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false);
  const toggleTema = () => setIsDark(!isDark);
  return (
    <TemaContext.Provider value={{ isDark, toggleTema }}>
      {children}
    </TemaContext.Provider>
  );
}

export const useTema = () => useContext(TemaContext);