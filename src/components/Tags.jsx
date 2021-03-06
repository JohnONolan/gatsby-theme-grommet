import React from 'react';
import { push } from 'gatsby';
import { Box, Button, Text } from 'grommet';

const Tags = ({ tags }) => (
  <Box direction="row" gap="xsmall">
    {tags.map(tag => (
      <Button key={tag} onClick={() => push(`/tag/${tag.toLowerCase()}`)}>
        <Box margin={{ top: 'xsmall' }} background="brand" round="xsmall" pad={{ horizontal: 'xsmall' }}>
          <Text size="small">{tag}</Text>
        </Box>
      </Button>
    ))}
  </Box>
);
export default Tags;
