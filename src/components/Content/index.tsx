import { Flex, FlexProps } from "@chakra-ui/react";

type ContentProps = {
  children: React.ReactNode;
} & FlexProps;

export function Content({ children, ...props }: ContentProps) {
  return (
    <Flex maxW={1160} width="100%" mx="auto" p="10" {...props}>
      {children}
    </Flex>
  );
}
