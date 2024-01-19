import Box from "@components/dom/Box/Box";
import Stack from "@components/dom/Stack/Stack";
import React, { ReactElement } from "react";

type Props = {
  label: ReactElement;
  input: ReactElement;
};

const InputContainer = ({ label, input, ...props }: Props) => {
  return (
    <Stack alignItems="center" {...props}>
      <Box flex={1}>{label}</Box>
      <Box width="70%" display="flex" justifyContent="flex-end">
        {input}
      </Box>
    </Stack>
  );
};

export default InputContainer;
