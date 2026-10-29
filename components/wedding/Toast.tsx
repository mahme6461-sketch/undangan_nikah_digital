"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";
export function useToast() {
  const [t, setT] = useState<{ msg: string; ok: boolean } | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>();
  const show = useCallback((msg: string, ok = true) => {
    setT({ msg, ok }); clearTimeout(timer.current); timer.current = setTimeout(() => setT(null), 3500);
  }, []);
  useEffect(() => () => clearTimeout(timer.current), []);
  const node = t && (
    <div role="status" aria-live="polite" className="fixed inset-x-4 top-5 z-[70] mx-auto flex max-w-sm animate-fade items-center gap-3 rounded-2xl border border-gold/40 bg-paper px-4 py-3 text-sm shadow-lg">
      {t.ok ? <CheckCircle2 className="h-5 w-5 shrink-0 text-sage-dark" /> : <AlertCircle className="h-5 w-5 shrink-0 text-red-700" />}
      <span>{t.msg}</span>
    </div>
  );
  return { show, node };
}
