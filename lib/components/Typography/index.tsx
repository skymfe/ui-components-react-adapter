import React, { useEffect, useRef } from "react";
import { Typography as BaseTypography } from "@skymfe/ui-components";
import type { TypographyProps as BaseTypographyProps } from "@skymfe/ui-components";

export interface TypographyProps extends Omit<React.HTMLAttributes<HTMLElement>, "children"> {
  variant?: BaseTypographyProps["variant"];
  children: string;
}

export const Typography: React.FC<TypographyProps> = ({ children, variant = "body1", ...props }) => {
  const typographyRef = useRef<HTMLDivElement>(null);
  const typographyInstanceRef = useRef<BaseTypography | null>(null);

  useEffect(() => {
    if (typographyRef.current) {
      // Create new instance of BaseTypography
      typographyInstanceRef.current = new BaseTypography({
        variant,
        text: children,
        ...props,
      });

      // Clear previous content
      typographyRef.current.innerHTML = "";
      // Append the typography element
      typographyRef.current.appendChild(typographyInstanceRef.current.getElement());
    }

    // Cleanup
    return () => {
      if (typographyInstanceRef.current) {
        const element = typographyInstanceRef.current.getElement();
        element.remove();
      }
    };
  }, [children, variant, props]);

  return <div ref={typographyRef} />;
};
