import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SpendingTitle } from "../spending/SpendingTitle";

export const DeviceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="dailyCost" source="dailyCost" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="spendings"
          reference="Spending"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SpendingTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
