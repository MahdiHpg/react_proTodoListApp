import { useEffect } from "react";

const useClickOutside = (ref, handleState) => {
  useEffect(() => {
    const eventListener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      handleState();
    };
    document.addEventListener("mousedown", eventListener);
    document.addEventListener("touchstart", eventListener);

    // unmount
    return () => {
      document.removeEventListener("mousedown", eventListener);
      document.removeEventListener("touchstart", eventListener);
    };
  }, [ref]);
};
export default useClickOutside;
