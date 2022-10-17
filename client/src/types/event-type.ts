import { FormEvent } from 'react';
import { NameTextField } from '../utils/const';

type OnChangeType = (value: string, name: NameTextField, id?: string) => void;

type OnSubmitType = (event: FormEvent<HTMLFormElement>) => void;

export type { OnChangeType, OnSubmitType };
