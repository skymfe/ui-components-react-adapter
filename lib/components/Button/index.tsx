import React, { useLayoutEffect, useRef } from "react";
import { Button as BaseButton } from "@skymfe/ui-components";
import type { ButtonProps as BaseButtonProps } from "@skymfe/ui-components";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: BaseButtonProps["variant"];
  size?: BaseButtonProps["size"];
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  ...props
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    let buttonInstance: BaseButton | null = null;

    if (buttonRef.current) {
      buttonInstance = new BaseButton(
        {
          variant,
          size,
          ...props,
        },
        buttonRef.current
      );
    }

    return () => {
      if (buttonInstance) {
        buttonInstance.destroy();
      }
    };
  }, []);

  return (
    <button ref={buttonRef} {...props}>
      {children}
    </button>
  );
};
