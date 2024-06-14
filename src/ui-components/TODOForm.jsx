import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "./utils";
import { Flex, TextField, Button } from '@aws-amplify/ui-react';


export default function TODOForm(props) {
  const { overrides, ...rest } = props;

  return (
  <Flex
    gap="10px"
    direction="row"
    justifyContent="flex-end"
    alignItems="flex-end"
    overflow="hidden"
    position="relative"
    padding="10px 10px 10px 10px"
    backgroundColor="rgba(255,255,255,1)"
    {...getOverrideProps(overrides, "TODOForm")}
    {...rest}
  >
    <TextField
      width="300px"
      shrink="0"
      label="Label"
      placeholder="Placeholder"
      size="default"
      isDisabled={false}
      labelHidden={false}
      variation="default"
      {...getOverrideProps(overrides, "TextField")}
    />
    <Button
      shrink="0"
      size="default"
      isDisabled={false}
      variation="default"
      {...getOverrideProps(overrides, "Button")}
    >
      Button
    </Button>
  </Flex>
  )
}
