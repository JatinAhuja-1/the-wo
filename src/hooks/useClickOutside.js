import { useEffect, useRef } from "react";

export function useClickOutside(handler , listenCapturing = true) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      // Check if click happened outside the referenced element
      if (ref.current && !ref.current.contains(e.target)) {
        handler(); // Close the modal if clicked outside
      }
    }

    // Add event listener to detect clicks
    document.addEventListener("click", handleClick, listenCapturing);

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener("click", handleClick, listenCapturing);
    };
  }, [handler, listenCapturing]);
  // Dependencies ensure it runs correctly when either `ref` or `close` changes
  return ref;
}

