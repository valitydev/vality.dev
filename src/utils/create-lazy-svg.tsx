import { ComponentType, LazyExoticComponent, ComponentProps } from "react";
import * as React from "react";

import loadable from "@loadable/component";

import { useBreakpointUp } from "~/utils/use-breakpoints";

export const createLazySvg = <T extends ComponentType<any>>(
  factory: () => Promise<{ default: T }>,
  largeSvgFactory?: () => Promise<{ default: T }>
) => {
  const Comp = loadable(factory, { ssr: true });
  const XlComp = largeSvgFactory
    ? loadable(largeSvgFactory, { ssr: true })
    : Comp;
  return (props: ComponentProps<LazyExoticComponent<T>>) => {
    const isLarge = useBreakpointUp("lg");
    return (
      <>
        {isLarge && largeSvgFactory ? (
          <XlComp {...props} />
        ) : (
          <Comp {...props} />
        )}
      </>
    );
  };
};
