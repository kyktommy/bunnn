import { useCallback, useRef } from "react";

// Interface for the hook return type
interface UseMultipleRefsReturn<T extends HTMLElement> {
  setRef: (key: string) => (element: T | null) => void;
  getRef: (key: string) => T | undefined;
  getAllRefs: () => T[];
  getRefsByKeys: (keys: string[]) => T[];
  performAction: (action: (element: T, key: string) => void) => void;
  performActionOnKeys: (
    keys: string[],
    action: (element: T, key: string) => void
  ) => void;
  hasRef: (key: string) => boolean;
  getKeys: () => string[];
  clear: () => void;
}

function useMultipleRefs<
  T extends HTMLElement = HTMLElement
>(): UseMultipleRefsReturn<T> {
  const refs = useRef<Map<string, T>>(new Map());

  const setRef = useCallback(
    (key: string) => (element: T | null) => {
      if (element) {
        refs.current.set(key, element);
      } else {
        refs.current.delete(key);
      }
    },
    []
  );

  const getRef = useCallback((key: string): T | undefined => {
    return refs.current.get(key);
  }, []);

  const getAllRefs = useCallback((): T[] => {
    return Array.from(refs.current.values());
  }, []);

  const getRefsByKeys = useCallback((keys: string[]): T[] => {
    return keys
      .map((key) => refs.current.get(key))
      .filter((ref): ref is T => ref !== undefined);
  }, []);

  const performAction = useCallback(
    (action: (element: T, key: string) => void) => {
      refs.current.forEach((element, key) => {
        action(element, key);
      });
    },
    []
  );

  const performActionOnKeys = useCallback(
    (keys: string[], action: (element: T, key: string) => void) => {
      keys.forEach((key) => {
        const element = refs.current.get(key);
        if (element) {
          action(element, key);
        }
      });
    },
    []
  );

  const hasRef = useCallback((key: string): boolean => {
    return refs.current.has(key);
  }, []);

  const getKeys = useCallback((): string[] => {
    return Array.from(refs.current.keys());
  }, []);

  const clear = useCallback(() => {
    refs.current.clear();
  }, []);

  return {
    setRef,
    getRef,
    getAllRefs,
    getRefsByKeys,
    performAction,
    performActionOnKeys,
    hasRef,
    getKeys,
    clear,
  };
}

export default useMultipleRefs;
