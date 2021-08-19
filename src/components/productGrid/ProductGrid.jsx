import React, { useState, useEffect } from "react";
import { commerce } from "../lib/commerce";
import styled from "styled-components";
import Header from "./Header";

const ProductGrid = () => {
  const [data, setData] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    console.log("aa gya", data);
    setData(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const dummy = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <>
      <Header />
      {data[0] ? (
        <GridContainer>
          <FilterBar>FILTERS</FilterBar>
          <Grid>
            {dummy.map((value, index) => (
              <Card key={index}>
                <span>{value}</span>
                <Image src={data[0].assets[0].url} alt="" />
              </Card>
            ))}
          </Grid>
        </GridContainer>
      ) : (
        <div>BAD LUCK</div>
      )}
    </>
  );
};

const GridContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FilterBar = styled.div`
  background-color: #afafaf;
  width: 80vw;
  height: 5em;
  display: flex;
`;

const Grid = styled.div`
  background-color: #ffffff;
  width: 80vw;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 2em;
`;

const Card = styled.div`
  display: block;
  background-color: #e7e7e7;
  width: 100%;
  height: 100%;
  justify-self: center;
`;

const Image = styled.img`
  object-fit: cover;
  max-width: 400px;
  max-height: 400px;
`;

export default ProductGrid;
