/**
 * @publicAPI
 */

export declare enum Scope {
  DEFAULT = 0,
  TRANSIENT = 1,
  REQUEST = 2,
}

/**
 * @publicAPI
 * @see [Injection Scopes](https://docs.nestjs.com/fundamentals/injection-scopes)
 */

export interface ScopeOptions {
  /**
   * Specifies the lifetime of an injected Provider or Controller.
   */
  scope?: Scope;
  /**
   * Flags provider as durable. This flag can be used in combination with custom context id
   * factory strategy to construct lazy DI subtrees.
   *
   * This flag can be used only in conjunction with scope = Scope.REQUEST.
   */
  durable?: boolean;
}
