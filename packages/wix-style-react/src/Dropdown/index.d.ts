import { DropdownLayoutProps } from '../DropdownLayout';
import InputWithOptions, {
  InputWithOptionsProps,
  ManualInputFnSignature,
  OnSelectFnSignature,
} from '../InputWithOptions';

export interface DropdownPropsControlled extends InputWithOptionsProps {
  selectedId?: DropdownLayoutProps['selectedId'];
  initialSelectedId?: never;
}

export interface DropdownPropsUncontrolled extends InputWithOptionsProps {
  selectedId?: never;
  initialSelectedId?: DropdownLayoutProps['selectedId'];
}

export type DropdownProps = DropdownPropsControlled | DropdownPropsUncontrolled;

export default class Dropdown extends InputWithOptions<
  ManualInputFnSignature,
  OnSelectFnSignature,
  DropdownProps
> {}
