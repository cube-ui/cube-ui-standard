import { ComputedGetter, WritableComputedOptions } from '@vue/reactivity'
import {
  ComponentOptions,
  ComponentOptionsWithoutProps,
  ComponentOptionsWithArrayProps,
  ComponentOptionsWithProps,
  ComponentPublicInstance,
  ComponentPropsOptions,
  Prop,
  VNodeProps
} from 'vue'

export type ComputedOptions = Record<
  string,
  ComputedGetter<any> | WritableComputedOptions<any>
>

export interface MethodOptions {
  [key: string]: Function
}

type InferPropType<T> = T extends null
  ? any // null & true would fail to infer
  : T extends { type: null | true }
  ? any // somehow `ObjectConstructor` when inferred from { (): T } becomes `any`
  : T extends ObjectConstructor | { type: ObjectConstructor }
  ? { [key: string]: any }
  : T extends Prop<infer V>
  ? V
  : T

type RequiredKeys<T, MakeDefaultRequired> = {
  [K in keyof T]: T[K] extends
    | { required: true }
    | (MakeDefaultRequired extends true ? { default: any } : never)
    ? K
    : never
}[keyof T]

type OptionalKeys<T, MakeDefaultRequired> = Exclude<
  keyof T,
  RequiredKeys<T, MakeDefaultRequired>
>

export type ExtractPropTypes<
  O,
  MakeDefaultRequired extends boolean = true
> = O extends object
  ? { [K in RequiredKeys<O, MakeDefaultRequired>]: InferPropType<O[K]> } &
      { [K in OptionalKeys<O, MakeDefaultRequired>]?: InferPropType<O[K]> }
  : { [K in string]: any }

export function componentOptions<
  Props,
  RawBindings,
  D,
  C extends ComputedOptions = {},
  M extends MethodOptions = {}
>(
  options: ComponentOptionsWithoutProps<Props, RawBindings, D, C, M>
): ComponentOptionsWithoutProps<Props, RawBindings, D, C, M> & {
  new (): ComponentPublicInstance<
    Props,
    RawBindings,
    D,
    C,
    M,
    VNodeProps & Props
  >
  options: object
}

export function componentOptions<
  PropNames extends string,
  RawBindings,
  D,
  C extends ComputedOptions = {},
  M extends MethodOptions = {}
>(
  options: ComponentOptionsWithArrayProps<PropNames, RawBindings, D, C, M>
): ComponentOptionsWithArrayProps<PropNames, RawBindings, D, C, M> & {
  // array props technically doesn't place any contraints on props in TSX
  new (): ComponentPublicInstance<VNodeProps, RawBindings, D, C, M>
  options: object
}

export function componentOptions<
  // the Readonly constraint allows TS to treat the type of { required: true }
  // as constant instead of boolean.
  PropsOptions extends Readonly<ComponentPropsOptions>,
  RawBindings,
  D,
  C extends ComputedOptions = {},
  M extends MethodOptions = {}
>(
  options: ComponentOptionsWithProps<PropsOptions, RawBindings, D, C, M>
): ComponentOptionsWithProps<PropsOptions, RawBindings, D, C, M> & {
  new (): ComponentPublicInstance<
    ExtractPropTypes<PropsOptions>,
    RawBindings,
    D,
    C,
    M,
    VNodeProps & ExtractPropTypes<PropsOptions, false>
  >
  options: object
}

export function componentOptions(options: ComponentOptions) {
  return options
}
