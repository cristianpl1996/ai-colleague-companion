import { useState, useEffect, useRef } from "react";
import { ChevronDown, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ExpandableSectionProps {
  icon: LucideIcon;
  title: string;
  visibleContent: string[];
  expandedContent: string[];
  index: number;
}

export const ExpandableSection = ({
  icon: Icon,
  title,
  visibleContent,
  expandedContent,
  index,
}: ExpandableSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, index * 150);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <section 
      ref={sectionRef}
      className={`glass-card rounded-2xl p-8 md:p-12 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
      }`}
    >
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        <div className="flex-shrink-0">
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center glow-icon">
            <Icon className="w-7 h-7 text-primary animate-glow" strokeWidth={1.5} />
          </div>
        </div>
        
        <div className="flex-1 space-y-6">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground glow-text">
            {title}
          </h2>
          
          <div className="space-y-4">
            {visibleContent.map((text, i) => (
              <p key={i} className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {text}
              </p>
            ))}
            
            {isExpanded && (
              <div className="space-y-4 animate-fade-in pt-4 border-t border-border/30">
                {expandedContent.map((text, i) => (
                  <p key={i} className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    {text}
                  </p>
                ))}
              </div>
            )}
          </div>
          
          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            variant="ghost"
            className="group text-primary hover:text-primary hover:bg-primary/10 transition-all"
          >
            {isExpanded ? "Ver menos" : "Ver más"}
            <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
          </Button>
        </div>
      </div>
    </section>
  );
};
