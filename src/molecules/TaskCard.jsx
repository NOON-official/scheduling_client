import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function card(props) {
  return (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }}>{props.content}</Typography>
        <Typography sx={{ fontSize: 8 }} color="text.secondary">
          2022.04.30
        </Typography>
        <Typography variant="body2">{props.detail}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">상태 변경</Button>
      </CardActions>
    </React.Fragment>
  );
}
function OutlinedCard(props) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card(props)}</Card>
    </Box>
  );
}

export default OutlinedCard;
