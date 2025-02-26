import { renderHook, act } from "@testing-library/react";
import { useState } from "react";
import { describe, expect, test } from "vitest";

const useTheme = () => {
  const [theme, setTheme] = useState("light");
  
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
};

describe("useTheme hook", () => {
  test("should toggle theme from light to dark", () => {
    const { result } = renderHook(() => useTheme());
    expect(result.current.theme).toBe("light");

    act(() => {
      result.current.toggleTheme();
    });
    
    expect(result.current.theme).toBe("dark");
  });

  test("should toggle theme from dark to light", () => {
    const { result } = renderHook(() => useTheme());
    
    act(() => {
      result.current.toggleTheme();
    });
    expect(result.current.theme).toBe("dark");

    act(() => {
      result.current.toggleTheme();
    });
    
    expect(result.current.theme).toBe("light");
  });
});
