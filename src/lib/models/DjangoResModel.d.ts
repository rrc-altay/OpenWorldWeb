export interface DjangoResModel<T> {
  readonly count: number;
  readonly next: null | string;
  readonly previous: null | string;
  readonly results: T[];
}
