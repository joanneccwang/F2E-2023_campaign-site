import { InjectionKey, ComputedRef, Ref } from 'vue';

import { DeviceType } from '@/utils/typings';

export const deviceTypeKey: InjectionKey<ComputedRef<DeviceType>> =
  Symbol('deviceType');
export const shouldBreakHeaderKey: InjectionKey<Ref<Boolean>> =
  Symbol('shouldBreakHeader');
