import { useEffect } from 'react';

export const useSectionSEO = (sections: Record<string, { title: string; description: string }>) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (sections[id]) {
            document.title = sections[id].title;
            const meta = document.querySelector('meta[name="description"]');
            if (meta) {
              meta.setAttribute('content', sections[id].description);
            }
          }
        }
      });
    }, { threshold: 0.5 });

    Object.keys(sections).forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sections]);
};
