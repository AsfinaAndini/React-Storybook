import React from "react";
import { Button } from "../Button/Button";

export interface CardProps {
  title?: string;
  description?: string;
  variant: "Light" | "Dark";
}

export const Card: React.FC<CardProps> = ({ title, description, variant }) => {
  return (
    <div
      className={[
        "max-w-sm p-6 rounded-lg shadow",
        variant === "Light"
          ? "bg-white border border-gray-200"
          : "bg-gray-800 border-gray-700",
      ].join(" ")}
    >
      <a href="#">
        <h5
          className={[
            "mb-2 text-2xl font-bold tracking-tight ",
            variant === "Light" ? " text-gray-900" : "text-white",
          ].join(" ")}
        >
          {title}
        </h5>
      </a>
      <p
        className={[
          "mb-3 font-normal ",
          variant === "Light" ? "text-gray-700" : "text-gray-400",
        ].join(" ")}
      >
        {description}
      </p>
      <Button label="Read More" />
    </div>
  );
};
