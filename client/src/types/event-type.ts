import { FormEvent } from 'react';
import AuthInput from './auth-type';
import TaskInput from './task-type';
import UserInput from './user-type';

type OnChangeType = (
  name: keyof AuthInput | keyof TaskInput | keyof UserInput,
  value: string
) => void;

type OnSubmitType = (evt: FormEvent<HTMLFormElement>) => void;

export type { OnChangeType, OnSubmitType };
