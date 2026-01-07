import React, { useEffect, useRef, useState } from "react";

function Counter({ end, duration = 1800, suffix = "", prefix = "" }: {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}) {
  const elRef = useRef<HTMLSpanElement | null>(null);
  const [val, setVal] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const animate = () => {
      if (started) return;
      setStarted(true);
      const start = performance.now();
      const from = 0;
      const to = end;
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        const current = Math.round(from + (to - from) * eased);
        setVal(current);
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const el = elRef.current;
    if (!el) return;

    let timeoutId: number | undefined;
    try {
      const io = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          animate();
          io.disconnect();
        }
      }, { threshold: 0.15, rootMargin: "0px 0px -12% 0px" });
      io.observe(el);
      timeoutId = window.setTimeout(() => animate(), 800);
      return () => {
        io.disconnect();
        if (timeoutId) window.clearTimeout(timeoutId);
      };
    } catch {
      animate();
    }
  }, [end, duration, started]);

  return <span ref={elRef}>{`${prefix}${val}${suffix}`}</span>;
}

export default function HomeStats() {
  const items = [
    { value: 3000, label: "Piers Installed", prefix: "+", suffix: " LF" },
    { value: 6000, label: "Grade Beams Constructed", prefix: "+", suffix: " LF" },
    { value: 35000, label: "Concrete Slabs Placed", prefix: "+", suffix: " SF" },
    { value: 100000, label: "Paving Completed", prefix: "+", suffix: " SF" },
  ];

  return (
    <section className="py-14 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {items.map((it, idx) => (
              <div key={idx} className="text-center py-8 md:py-10">
                <div className="text-4xl md:text-5xl font-extrabold text-[#001F42] mb-2 tracking-tight">
                  <Counter end={it.value} prefix={it.prefix as string || ''} suffix={it.suffix as string || ''} duration={1800 + idx * 150} />
                </div>
                <div className="text-sm text-gray-500 font-medium">
                  {it.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
