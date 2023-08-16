import React, { useEffect, createContext, PropsWithChildren, useContext, useState } from "react";

interface IThemeContext
{
  themeName: string;
  toggleTheme(): void;
}

enum themes
{
  light = "light",
  dark = "dark"
};

const prefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
).matches;

const NullThemeContext: IThemeContext =
{
  themeName: localStorage.getItem('app-theme') || (prefersDark ? themes.dark : themes.light),
  toggleTheme: () => {  }
};

const ThemeContext = createContext<IThemeContext>(NullThemeContext);

export function ThemeProvider<T>({ children }: PropsWithChildren<T>)
{
  const [themeName, setThemeName] = useState<`${themes}`>(getTheme());
  const [theme, setTheme] = useState(getTheme());

  function getTheme()
  {
   
    //get from localstorage
    const current = localStorage.getItem('app-theme') || (prefersDark ? themes.dark : themes.light);

    return current as `${themes}`;
  }

  function toggleTheme()
  {
    const name = themeName === themes.light ? themes.dark : themes.light;
    localStorage.setItem('app-theme', name);
    setThemeName(name);
    setTheme(getTheme());
  }

  useEffect(() => {
    document.body.setAttribute('data-mode',themeName);
  },[themeName])

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
        {children}
    </ThemeContext.Provider>
  );
}

export function useTheme()
{
  return useContext(ThemeContext);
}


