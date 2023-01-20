import {
  ComponentType,
  LazyExoticComponent,
  ComponentProps,
  Suspense,
} from "react";
import * as React from "react";

import { useBreakpointUp } from "~/utils/use-breakpoints";

export const createLazySvg = <T extends ComponentType<any>>(
  factory: () => Promise<{ default: T }>,
  largeSvgFactory?: () => Promise<{ default: T }>
) => {
  const Comp = React.lazy(factory);
  let XlComp: LazyExoticComponent<T>;
  if (largeSvgFactory) XlComp = React.lazy(largeSvgFactory);
  return (params: ComponentProps<LazyExoticComponent<T>>) => {
    const isLarge = useBreakpointUp("lg");
    const Component = isLarge && largeSvgFactory ? XlComp : Comp;
    return (
      <Suspense>
        <Component {...params} />
      </Suspense>
    );
  };
};
