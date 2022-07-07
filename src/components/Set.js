import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "./Card";
import {
  Paper,
  Container,
  Grid,
  Typography,
  LinearProgress,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import pokemon from "pokemontcgsdk";
pokemon.configure({ apiKey: "0903cfaf-97d3-42cb-84cf-c142627e9438" });

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  padding: theme.spacing(2),
  textAlign: "center",
  boxShadow: "none",
}));

function Set() {
  const params = useParams();
  const [set, setSet] = useState([]);

  useEffect(() => {
    pokemon.card.where({ q: `set.id:${params.id}` }).then((result) => {
      setSet(result.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Typography variant="h2" textAlign="center" color="#EC0101" gutterBottom>
        {set[0] ? (
          set[0].set.name
        ) : (
          <LinearProgress
            sx={{
              backgroundColor: "#F1F3DE",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#CD0A0A",
              },
            }}
          />
        )}
      </Typography>
      <div align="center" className="row">
        <Container align="center">
          <Grid
            className="grid"
            container
            spacing={1}
            alignItems="center"
            justifyContent="center"
          >
            {set.map((card) => {
              return (
                <Item>
                  <Card
                    key={card.id}
                    setid={card.set.id}
                    id={card.id}
                    image={card.images.small}
                  />
                </Item>
              );
            })}
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Set;
