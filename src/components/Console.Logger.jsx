import { useEffect } from "react";

const helloMessage = "Hello from";

function ConsoleLogger({ message, componentName }) {
  useEffect(() => {
    console.log(`${helloMessage} ${componentName}`);
  }, [message, componentName]);
  return null;
}

export default ConsoleLogger;
