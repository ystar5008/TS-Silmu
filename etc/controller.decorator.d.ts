// import { ScopeOptions, VersionOptions } from '../../interfaces';

import { ScopeOptions } from "./scope-options.interface";

/** 인터페이스 정의 옵션 @Controller 데코레이터
 * @publicAPI
 */
export interface ControllerOPtions extends ScopeOptions {
  path?: string | string[];

  host?: string | RegExp | Array<string | RegExp>;
}

export declare function Controller(): ClassDecorator;
