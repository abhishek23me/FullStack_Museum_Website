import React, { useEffect } from "react";

function Botpress() {
  useEffect(() => {
    // Load the Botpress script
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
    script.async = true;
    //add the scripts with the link here.
    document.body.appendChild(script);

    // Cleanup function to remove the script
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}

export default Botpress;
