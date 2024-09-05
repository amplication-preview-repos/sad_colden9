import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SpendingTitle } from "../spending/SpendingTitle";

export const DeviceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
