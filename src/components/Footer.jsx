import { ArrowUp, Eye } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export const Footer = () => {
  const [views, setViews] = useState(null);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    // Fetch and increment the view count
    fetch("https://api.counterapi.dev/v1/jatin-portfolio/home/up")
      .then((res) => res.json())
      .then((data) => setViews(data.count))
      .catch((err) => console.error("Error fetching view count", err));
  }, []);

  return (
    <footer className="py-6 px-4 bg-card relative border-t border-border flex flex-wrap justify-center items-center gap-8">
      
      <div className="flex items-center gap-2 text-sm font-bold text-primary bg-primary/10 px-4 py-2 rounded-full">
        <Eye size={18} />
        <span>{views !== null ? views.toLocaleString() : "..."} Total Views</span>
      </div>

      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Jatin Avtani. All Rights Reserved.
      </p>

      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};