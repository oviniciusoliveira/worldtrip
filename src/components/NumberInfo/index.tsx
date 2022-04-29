import { Flex, Text, Tooltip } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";

type NumberInfoProps = {
  number: number;
  text: string;
  showTooltip?: boolean;
  tooltipLabel?: string;
};

export function NumberInfo({
  number,
  text,
  showTooltip = false,
  tooltipLabel = "",
}: NumberInfoProps) {
  return (
    <Flex flexDirection="column" alignItems="center">
      <Text color="yellow.500" fontSize="5xl" fontWeight="medium">
        {number}
      </Text>
      <Flex alignItems="center">
        <Text fontWeight="medium" fontSize="lg">
          {text}
        </Text>
        {showTooltip && (
          <Tooltip label={tooltipLabel}>
            <InfoOutlineIcon w="3" h="3" color="gray.500" marginLeft="2" />
          </Tooltip>
        )}
      </Flex>
    </Flex>
  );
}
