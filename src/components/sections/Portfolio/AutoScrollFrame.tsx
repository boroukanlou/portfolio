import { useState, useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";

interface AutoScrollFrameProps {
  image: string;
  title: string;
  liveUrl?: string;
  onClick?: () => void;
}

export function AutoScrollFrame({
  image,
  title,
  liveUrl,
  onClick,
}: AutoScrollFrameProps) {
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isHovered || !scrollRef.current) return;

    const scrollElement = scrollRef.current;
    const scrollHeight =
      scrollElement.scrollHeight - scrollElement.clientHeight;

    let start: number | null = null;
    const duration = 16000;

    const animateScroll = (timestamp: number) => {
      if (!start) start = timestamp;

      const progress = (timestamp - start) / duration;

      if (progress < 1) {
        scrollElement.scrollTop = progress * scrollHeight;
        requestAnimationFrame(animateScroll);
      } else {
        start = null;
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);

    return () => {
      start = null;
    };
  }, [isHovered]);

  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-black/50 backdrop-blur-sm border border-border/50 shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        if (scrollRef.current) scrollRef.current.scrollTop = 0;
      }}
      onClick={onClick}
    >
      <div className="relative">
        <div className="h-10 bg-gradient-to-b from-gray-900 to-gray-800 border-b border-gray-700 flex items-center px-4 gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="ml-4 text-xs text-gray-400 truncate">{title}</div>
        </div>

        <div
          ref={scrollRef}
          className="h-64 overflow-y-auto scrollbar-hide cursor-pointer"
          style={{
            maskImage: isHovered
              ? "linear-gradient(to bottom, black 90%, transparent 100%)"
              : "none",
          }}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-auto blocks"
            draggable={false}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {liveUrl && (
          <div className="absolute top-12 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg">
              <ExternalLink className="w-4 h-4s" />
              Live Demo
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
