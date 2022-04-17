import { Divider, Flex } from "@chakra-ui/react";

export function ContentDivider() {
  return (
    <Flex justifyContent={"center"}>
      <Divider borderWidth={2} width={"90px"} borderColor="gray.900" />
    </Flex>
  );
}
