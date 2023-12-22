import { useState, useEffect } from "react";

const useLocalStorage = () => {
  const [tokens, setTokens] = useState<number>(0);

  useEffect(() => {
    const remainingTokens = localStorage.getItem(
      "remainingTokens"
    );
    if (remainingTokens) {
      setTokens(Number(remainingTokens));
    } else {
      setTokens(10);
      localStorage.setItem("remainingTokens", "10");
    }
  }, []);

  const decreaseToken = () => {
    setTokens((prevTokens) => {
      const newTokens = prevTokens - 1;
      localStorage.setItem(
        "remainingTokens",
        String(newTokens)
      );
      return newTokens;
    });
  };

  const increaseTokens = () => {
    setTokens((prevTokens) => {
      const newTokens = prevTokens + 10;
      localStorage.setItem(
        "remainingTokens",
        String(newTokens)
      );
      return newTokens;
    });
  };

  return { tokens, decreaseToken, increaseTokens };
};

export default useLocalStorage;
