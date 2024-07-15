import { Button, Typography, Box } from '@mui/material';
import Link from 'next/link';

export default function TableInteractions() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
      <Typography variant="h4" gutterBottom textAlign="center">
        React Table With Sort and Filter
      </Typography>
      <Typography variant="body1" gutterBottom textAlign="center">
        Type in keywords in the search bar to search for items in the table.
        Click on any column header to sort it by ascending or descending order.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        href="/"
        sx={{ mt: 2 }}
      >
        Go Back to Home
      </Button>
    </Box>
  );
}
