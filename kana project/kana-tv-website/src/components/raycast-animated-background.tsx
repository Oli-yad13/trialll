import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import UnicornScene from "unicornstudio-react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize(); // Set initial size
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { ...windowSize, isClient };
};

export const Component = () => {
  const { width, height, isClient } = useWindowSize();

  // Don't render on server to avoid hydration mismatch
  if (!isClient) {
    return (
      <div className={cn("flex flex-col items-center w-full h-full bg-stone-50")}>
        <div className="w-full h-full bg-stone-50" />
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col items-center w-full h-full relative bg-stone-50")}>
        <div className="w-full h-full bg-stone-50 relative">
          <div style={{
            filter: 'invert(1) brightness(0.98) contrast(0.95)',
            width: '100%',
            height: '100%'
          }}>
            <UnicornScene
            production={true} projectId="cbmTT38A0CcuYxeiyj5H" width={width} height={height} />
          </div>
        </div>
        {/* Pink overlay for red raycast beams */}
        <div
          className="absolute inset-0 w-full h-full mix-blend-color opacity-60"
          style={{
            backgroundColor: '#E45A97'
          }}
        />
    </div>
  );
};

