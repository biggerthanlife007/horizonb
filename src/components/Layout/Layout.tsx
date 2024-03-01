// components/Layout.tsx
import React, { ReactNode, useEffect } from "react";

interface Task {
  children: ReactNode;
}

const Layout: React.FC<Task> = ({ children }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://embed.tawk.to/65e2015f8d261e1b5f6754f0/1hntdao7s";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Your layout structure */}
      {children}
    </div>
  );
};

export default Layout;
