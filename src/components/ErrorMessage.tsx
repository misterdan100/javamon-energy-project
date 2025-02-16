import { ReactNode } from "react";

export const ErrorMessage = ({ children }: { children: ReactNode }) => {
  return <p
    className="text-red-500 text-sm py-1"
  >{children}</p>;
}