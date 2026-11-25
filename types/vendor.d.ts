declare module "masonry-layout" {
  interface MasonryOptions {
    itemSelector?: string;
    gutter?: number;
    fitWidth?: boolean;
  }

  export default class Masonry {
    constructor(element: Element | string, options?: MasonryOptions);
    layout(): void;
    destroy(): void;
  }
}

declare module "rellax" {
  interface RellaxOptions {
    center?: boolean;
    speed?: number;
  }

  export default class Rellax {
    constructor(selector: string | Element, options?: RellaxOptions);
    destroy(): void;
    refresh(): void;
  }
}
