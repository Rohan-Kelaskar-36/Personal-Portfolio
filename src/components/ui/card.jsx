import React from "react";
import { cn } from "../../lib/utils";

export const Card = ({ className, ...props }) => (
  <div
    className={cn(
      "rounded-2xl border border-slate-700/60 bg-slate-900/70 backdrop-blur shadow-xl shadow-slate-950/40",
      className
    )}
    {...props}
  />
);

export const CardHeader = ({ className, ...props }) => (
  <div className={cn("p-5 pb-2", className)} {...props} />
);

export const CardTitle = ({ className, ...props }) => (
  <h3
    className={cn("text-lg font-semibold tracking-tight", className)}
    {...props}
  />
);

export const CardContent = ({ className, ...props }) => (
  <div className={cn("px-5 pb-5 pt-2 text-sm text-slate-200", className)} {...props} />
);

