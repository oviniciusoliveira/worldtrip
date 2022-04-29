import { Flex, FlexProps } from "@chakra-ui/react";

type ContentProps = {
  children: React.ReactNode;
  addMarginY?: boolean;
} & FlexProps;

export function Content({
  children,
  addMarginY = true,
  ...props
}: ContentProps) {
  return (
    <Flex
      maxW={1160}
      width="100%"
      mx="auto"
      my={addMarginY ? "10" : "0"}
      px={14}
      {...props}
    >
      {children}
    </Flex>
  );
}
