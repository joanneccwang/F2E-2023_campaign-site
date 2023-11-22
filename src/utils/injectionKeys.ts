import { DeviceType } from '@/utils/typings';
import { InjectionKey } from 'vue';

export const deviceTypeKey: InjectionKey<DeviceType> = Symbol('deviceType');
