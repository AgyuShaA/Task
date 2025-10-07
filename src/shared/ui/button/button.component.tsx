"use client";

import {
  Button as HeroButton,
  ButtonProps as HeroButtonProps,
} from "@heroui/react";
import clsx from "clsx";

type MyButtonVariant = "primary" | "secondary";

interface ButtonProps extends Omit<HeroButtonProps, "variant"> {
  variant?: MyButtonVariant;
  className?: string;
}

export default function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const heroVariantMap: Record<MyButtonVariant, HeroButtonProps["variant"]> = {
    primary: "solid",
    secondary: "light",
  };

  const variantClass = clsx(
    variant === "primary" &&
      " cursor-pointer bg-blue-600 hover:bg-blue-700 text-white",
    variant === "secondary" &&
      " cursor-pointer  bg-gray-200 hover:bg-gray-300 text-gray-800",
    "px-4 py-1 rounded",
    className
  );

  return (
    <HeroButton
      {...props}
      variant={heroVariantMap[variant]}
      className={variantClass}
    />
  );
}
