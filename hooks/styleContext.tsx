"use client";
import React, {
  createContext,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from "react";

interface ThemeContextValues {
  isDarkTheme: boolean;
  toggleThemeHandler: () => void;
}

const MyThemeContext = createContext<ThemeContextValues>({
  isDarkTheme: true,
  toggleThemeHandler: () => {},
});

interface ThemePropsInterface {
  children?: ReactNode;
}

export function MyThemeContextProvider(
  props: ThemePropsInterface
): ReactElement {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    initialThemeHandler();
    return () => {
      // Cleanup function if needed
    };
  }, []);

  function isLocalStorageEmpty(): boolean {
    return !localStorage.getItem("isDarkTheme");
  }

  function initialThemeHandler(): void {
    if (isLocalStorageEmpty()) {
      localStorage.setItem("isDarkTheme", `true`);
      document.body.classList.add("dark");
      setIsDarkTheme(true);
    } else {
      const isDarkThemeStored: boolean = JSON.parse(
        localStorage.getItem("isDarkTheme")!
      );
      isDarkThemeStored && document.body.classList.add("dark");
      setIsDarkTheme(isDarkThemeStored);
    }
  }

  function toggleThemeHandler(): void {
    const isDarkThemeStored: boolean = JSON.parse(
      localStorage.getItem("isDarkTheme")!
    );
    setIsDarkTheme(!isDarkThemeStored);
    toggleDarkClassToBody();
    setValueToLocalStorage(!isDarkThemeStored);
  }

  function toggleDarkClassToBody(): void {
    document.body.classList.toggle("dark");
  }

  function setValueToLocalStorage(value: boolean): void {
    localStorage.setItem("isDarkTheme", `${value}`);
  }

  return (
    <MyThemeContext.Provider value={{ isDarkTheme, toggleThemeHandler }}>
      {props.children}
    </MyThemeContext.Provider>
  );
}

export default MyThemeContext;
