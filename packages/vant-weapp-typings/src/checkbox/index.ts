import { VantBaseExternalClassName, VantComponent } from '../base';

export interface VantCheckboxProps {
    /**
     * 标识`Checkbox`名称
     */
    name?: string;

    /**
     * 形状
     *
     * @default 'round'
     */
    shape?: 'round' | 'square';

    /**
     * 是否为选中状态
     *
     * @default false
     */
    value?: boolean;

    /**
     * 是否禁用单选框
     *
     * @default false
     */
    disabled?: boolean;

    /**
     * 是否禁用单选框内容点击
     *
     * @default false
     */
    'label-disabled'?: boolean;

    /**
     * 文本位置
     *
     * @default 'right'
     */
    'label-position'?: 'left' | 'right';

    /**
     * 是否使用`icon slot`
     *
     * @default false
     */
    'use-icon-slot'?: boolean;

    /**
     * 选中状态颜色
     *
     * @default '#1989fa'
     */
    'checked-color'?: string;

    /**
     * `icon`大小
     *
     * @default 20px
     */
    'icon-size'?: string | number;
}

export interface VantCheckboxEvents {
    /**
     * 当绑定值变化时触发的事件
     */
    'bind:change'?: (value: boolean) => void;
}

export interface VantCheckboxExternalClassName extends VantBaseExternalClassName {
    /**
     * 图标样式类
     */
    'icon-class'?: string;

    /**
     * 描述信息样式类
     */
    'label-class'?: string;
}

export type VantCheckbox = VantComponent<VantCheckboxProps, VantCheckboxEvents, VantCheckboxExternalClassName>;
