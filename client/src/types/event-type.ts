import { FormEvent } from 'react';
import TaskInput from './task-type';
import { UserInput } from './user-type';

type OnChangeType = (
  name: keyof UserInput | keyof TaskInput,
  value: string
) => void;

type OnSubmitType = (evt: FormEvent<HTMLFormElement>) => void;

type OnClickType = () => void;

export type { OnChangeType, OnSubmitType, OnClickType };
