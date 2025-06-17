import React, { useLayoutEffect, useMemo, useRef } from "react";
import { Typography as BaseTypography, getTypographyTagName } from "@skymfe/ui-components";
import type { TypographyProps as BaseTypographyProps } from "@skymfe/ui-components";

export interface TypographyProps extends Omit<React.HTMLAttributes<HTMLElement>, "variant"> {
  variant?: BaseTypographyProps["variant"];
}

export const Typography: React.FC<TypographyProps> = ({
  variant = "body1",
  children,
  ...props
}) => {
  const typographyRef = useRef<HTMLElement>(null);

  const Tag = useMemo(() => getTypographyTagName(variant), [variant]);

  useLayoutEffect(() => {
    if (typographyRef.current) {
      new BaseTypography(
        {
          variant,
          ...props,
        },
        typographyRef.current
      );
    }
  }, []);

  return React.createElement(Tag, { ...props, ref: typographyRef }, children);
};
