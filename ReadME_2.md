# СОздание переключения между светлой и темной темой

1. App 

## создаем тип для переменной ThemeContext
type ContextType = {
  theme: string;
};

## создаем переменную для конткста
export const ThemeContext = createContext<ContextType | null>(null);


