import { useEffect } from "react";

type UseKeyType = (key: string, cb: () => void) => void;

const subscribedKeys = new Set<string>();

export const useKey: UseKeyType = (key, cb) => {
  useEffect(() => {
    const handleKeyEvent = (event: KeyboardEvent) => {
      if (subscribedKeys.has(key)) {
        event.preventDefault();
      }
      if (event.key === key) {
        subscribedKeys.add(key);
        cb();
      }
    };

    document.addEventListener("keydown", handleKeyEvent);

    return () => {
      document.removeEventListener("keydown", handleKeyEvent);
    };
  }, [cb]);
};
