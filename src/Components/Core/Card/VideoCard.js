import { Grid, Link } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import {
  legExcercise,
  chestExcercise,
  absExcercise,
  backExcercise,
  tricepExcercise,
  bicepExcercise,
  shoulderExcercise,
} from "../../ExcerciseList/ExcerciseList";
import { useLocation, useNavigate } from "react-router-dom";

const VideoCard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const receivedValue = queryParams.get("E");
  const [excercise, setExcercise] = useState([]);

  useEffect(() => {
    switch (receivedValue) {
      case "Leg":
        setExcercise(legExcercise);
        break;
      case "Biceps":
        setExcercise(bicepExcercise);
        break;
      case "Tricep":
        setExcercise(tricepExcercise);
        break;
      case "Shoulder":
        setExcercise(shoulderExcercise);
        break;
      case "Back":
        setExcercise(backExcercise);
        break;
      case "Chest":
        setExcercise(chestExcercise);
        break;
      case "ABS":
        setExcercise(absExcercise);
        break;
      default:
        break;
    }
  }, [receivedValue]);

  return (
    <Grid
      container
      columnSpacing={3}
      paddingTop={10}
      paddingBottom={10}
      paddingLeft={5}
      paddingRight={5}
      rowSpacing={2}
    >
      {excercise.map((data, index) => {
        return (
          <Grid item md={3} sm={6} xs={12}>
            <Card sx={{ maxWidth: "max-content" }}>
              <CardMedia
                component="video"
                autoPlay
                muted
                loop
                src={data.path}
              />
              <CardContent>
                <Typography
                  sx={{ minHeight: { md: 70, xs: 70, sm: 70 } }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  {data.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data.title}
                  <Link
                    underline="none"
                    sx={{ cursor: "pointer" }}
                    onClick={() => {
                      navigate(data.href, { state: { ...excercise } });
                    }}
                  >
                    more
                  </Link>
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">See Full Description </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default VideoCard;
