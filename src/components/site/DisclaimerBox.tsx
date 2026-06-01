import { DISCLAIMER_TEXT } from "@/lib/site-data";
import { Info } from "lucide-react";

export function DisclaimerBox() {
  return (
    <aside
      role="note"
      aria-label="Disclaimer"
      className="bg-warning/10 border-l-4 border-warning rounded-lg p-4 sm:p-5 flex gap-3"
    >
      <Info className="h-5 w-5 text-warning shrink-0 mt-0.5" aria-hidden />
      <p className="text-sm leading-relaxed text-foreground/80">
        {DISCLAIMER_TEXT}
      </p>
    </aside>
  );
}
