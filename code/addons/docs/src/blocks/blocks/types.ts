import type { ModuleExport } from 'storybook/internal/types';

export const PRIMARY_STORY = '^';

// TODO

export type Component = any;

export type DocsStoryProps = {
  of: ModuleExport;
  expanded?: boolean;
  withToolbar?: boolean;
  /** Freeze the story to its initial args while keeping it in docs mode. */
  forceInitialArgs?: boolean;
  /** @deprecated Use `forceInitialArgs` instead. */
  __forceInitialArgs?: boolean;
  __primary?: boolean;
};
