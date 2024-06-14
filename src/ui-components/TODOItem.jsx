import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "./utils";
import { Flex, Text } from '@aws-amplify/ui-react';


export default function TODOItem(props) {
  const { overrides, ...rest } = props;

  return (
  <Flex
    gap="10px"
    direction="row"
    width="179px"
    justifyContent="flex-start"
    alignItems="flex-start"
    overflow="hidden"
    position="relative"
    padding="10px 10px 10px 10px"
    backgroundColor="rgba(255,255,255,1)"
    {...getOverrideProps(overrides, "TODOItem")}
    {...rest}
  >
    <Text
      fontFamily="Inter"
      fontSize="16px"
      fontWeight="400"
      color="rgba(0,0,0,1)"
      lineHeight="19.363636016845703px"
      textAlign="left"
      display="block"
      shrink="0"
      position="relative"
      whiteSpace="pre-wrap"
      {...getOverrideProps(overrides, "title")}
    >
      title
    </Text>
  </Flex>
  )
}
