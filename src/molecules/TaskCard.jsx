import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }}>라면 먹기</Typography>
      <Typography sx={{ fontSize: 8 }} color="text.secondary">
        2022.04.30
      </Typography>
      <Typography variant="body2">
        새벽 3시 라면이 가장 먹고 싶은 시간
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">상태 변경</Button>
    </CardActions>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
