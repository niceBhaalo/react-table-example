import { Button, Typography, Box } from '@mui/material';
import Link from 'next/link';

export default function Home() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Showcase of React Table
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        href="/tableComponent"
        sx={{ mt: 2 }}
      >
        Go to Table Component
      </Button>
    </Box>
  );
}
