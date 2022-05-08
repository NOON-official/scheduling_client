import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DatePicker from '../atoms/DatePicker';

const card = (
  <Box>
    <CardContent>
      <TextField id="title" label="제목을 입력하세요" variant="standard"></TextField>
    </CardContent>
    <CardContent>
      <TextField id="detail" label="상세내용을 입력하세요" variant="standard" multiline="true"></TextField>
    </CardContent>
    <CardContent>
      <DatePicker></DatePicker>
    </CardContent>
    <CardActions>
      <Button size="small">make</Button>
    </CardActions>
  </Box>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
