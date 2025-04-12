import { useEffect } from "react";

const ReactHelmet = ({ title }) => {
  useEffect(() => {
    document.title = `Bistro Boss Restaurant || ${title}`;
  }, [title]);
};

export default ReactHelmet;
