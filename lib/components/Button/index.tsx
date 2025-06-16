import React, { useEffect, useRef } from "react";
import { Button as BaseButton } from "@skymfe/ui-components";
import type { ButtonProps as BaseButtonProps } from "@skymfe/ui-components";

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  variant?: BaseButtonProps["variant"];
  size?: BaseButtonProps["size"];
  onClick?: (event: MouseEvent) => void;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = "primary", size = "medium", onClick, ...props }) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const buttonInstanceRef = useRef<BaseButton | null>(null);

  useEffect(() => {
    if (buttonRef.current) {
      // Create new instance of BaseButton
      buttonInstanceRef.current = new BaseButton({
        variant,
        size,
        text: children as string,
        onClick,
        ...props,
      });

      // Clear previous content
      buttonRef.current.innerHTML = "";
      // Append the button element
      buttonRef.current.appendChild(buttonInstanceRef.current.getElement());
    }

    // Cleanup
    return () => {
      if (buttonInstanceRef.current) {
        const element = buttonInstanceRef.current.getElement();
        element.remove();
      }
    };
  }, [children, variant, size, onClick, props]);

  return <div ref={buttonRef} />;
};
