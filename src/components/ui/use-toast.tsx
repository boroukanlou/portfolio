import * as React from "react";

export type Toast = {
  id: string;
  title?: string;
  description?: string;
  action?: React.ReactElement;
  variant?: "default" | "destructive";
};

const toast = () => {
  const { toast } = useToast();
  return toast;
};

console.log(toast);

export function useToast() {
  return {
    toast: ({ title, description, variant = "default" }: Partial<Toast>) => {
      console.log("Toast:", title, description, variant);
    },
  };
}
