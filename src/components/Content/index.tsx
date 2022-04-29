import { Flex, FlexProps } from "@chakra-ui/react";

type ContentProps = {
  children: React.ReactNode;
  addMarginY?: boolean;
  addPaddingX?: boolean;
} & FlexProps;

export function Content({
  children,
  addMarginY = true,
  addPaddingX = true,
  ...props
}: ContentProps) {
  return (
    <Flex
      maxW={1160}
      width="100%"
      mx="auto"
      my={addMarginY ? "10" : "0"}
      px={addPaddingX ? 14 : 0}
      {...props}
    >
      {children}
    </Flex>
  );
}
