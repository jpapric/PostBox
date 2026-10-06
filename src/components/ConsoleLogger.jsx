import { useEffect } from "react";

function ConsoleLogger({ message, componentName }) {
  useEffect(() => {
    console.log(`${message} ${componentName}`);
  }, [message, componentName]);
  return null;
}

export default ConsoleLogger;
