"use client";

import { useEffect, useState } from "react";

type Props = {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  start?: boolean;      // 控制什么时候开始打
  onDone?: () => void;  // 打完通知外面
  cursor?: boolean;     // 打完后是否保留光标
};

export default function Typewriter({
  text,
  speed = 70,
  delay = 300,
  className,
  start = true,
  onDone,
  cursor = true,
}: Props) {
  const [count, setCount] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!start) return;
    const t = setTimeout(() => setReady(true), delay);
    return () => clearTimeout(t);
  }, [start, delay]);

  useEffect(() => {
    if (!ready || count >= text.length) return;
    const t = setTimeout(() => setCount((c) => c + 1), speed);
    return () => clearTimeout(t);
  }, [ready, count, text.length, speed]);

  const done = ready && count >= text.length;

  useEffect(() => {
    if (done) onDone?.();
  }, [done, onDone]);

  return (
    <span className={className} aria-label={text}>
      <span aria-hidden="true">{text.slice(0, count)}</span>
      {cursor && (ready || start) && (
        <span aria-hidden="true" className="animate-pulse">
          /
        </span>
      )}
    </span>
  );
}