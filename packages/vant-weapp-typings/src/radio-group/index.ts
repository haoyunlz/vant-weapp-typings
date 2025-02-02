import { VantComponent } from '../base';

export interface VantRadioGroupProps {
    /**
     * 在表单内提交时的标识符
     */
    name?: string;

    /**
     * 当前选中项的标识符
     */
    value?: any;

    /**
     * 是否禁用所有单选框
     *
     * @default false
     */
    disabled?: boolean;

    /**
     * 排列方向
     *
     * @version v1.6.7
     */
    direction?: 'horizontal' | 'vertical';
}

export interface VantRadioGroupEvents {
    /**
     * 当绑定值变化时触发的事件
     */
    'bind:change'?: (name?: string) => void;
}

export type VantRadioGroup = VantComponent<VantRadioGroupProps, VantRadioGroupEvents>;
