import { useRef, useEffect } from "react";

export default function usePrev(value) {
    const ref = useRef();

    // Update the ref with the current value after each render
    useEffect(() => {
      ref.current = value;
    }, [value]);
  
    // Return the previous value (current value of ref before it is updated)
    return ref.current;
}