import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

// Styled components
const Container = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const CardContainer = styled.div`
  width: 100%;
  max-width: 400px;
  height: 400px;
  background-color: ${(props) => (props.darkMode ? "#2d3748" : "#fff")};
  border: 1px solid ${(props) => (props.darkMode ? "#4a5568" : "#e2e8f0")};
  border-radius: 0.5rem;
  box-shadow: ${(props) => (props.darkMode ? "0 2px 10px rgba(0, 0, 0, 0.5)" : "0 2px 10px rgba(0, 0, 0, 0.1)")};
  display: flex;
  flex-direction: column;
`;

const ProductImage = styled.img`
  width: 80%;
  height: 10rem;
  object-fit: contain;
  padding: 1rem;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
`;

const ProductTitle = styled.h5`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${(props) => (props.darkMode ? "#fff" : "#2d3748")};  
  overflow: hidden;
  text-overflow: ellipsis; 
`;



const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.625rem;
  margin-bottom: 0.625rem;
`;

const StarIcon = styled.svg`
  width: 1rem;
  height: 1rem;
  fill: ${(props) => (props.filled ? "#fbbf24" : "#e2e8f0")};
`;

const RatingValue = styled.span`
  background-color: #c3dafe;
  color: #2c5282;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 0.25rem;
  margin-left: 0.75rem;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Price = styled.span`
  font-size: 1.875rem;
  font-weight: 700;
  color: ${(props) => (props.darkMode ? "#fff" : "#2d3748")};
`;

const AddToCartButton = styled.a`
  background-color: #3182ce;
  color: #fff;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.625rem 1rem;
  border-radius: 0.5rem;
  text-align: center;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2b6cb0;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(66, 153, 225, 0.5);
  }
`;

// Main component
const Card = () => {
  const [products, setProducts] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const getData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response.data);
      setProducts(response.data);

    } catch (error) {
      console.error("Error fetching the products", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      {products.map((product) => (
        <CardContainer key={product.id} darkMode={darkMode}>
          <a href="#">
            <ProductImage src={product.image} alt={product.title} />
          </a>
          <div style={{ padding: "1rem", flex: "1 1 auto" }}>
            <a href="#">
              <ProductTitle darkMode={darkMode}>{product.title}</ProductTitle>
            </a>
            <RatingContainer>
              <div style={{ display: "flex", gap: "0.25rem" }}>
                {Array.from({ length: 5 }, (_, index) => (
                  <StarIcon
                    key={index}
                    viewBox="0 0 22 20"
                    filled={index < Math.round(product.rating.rate)}
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </StarIcon>
                ))}
              </div>
              <RatingValue>{product.rating.rate}</RatingValue>
            </RatingContainer>
            <PriceContainer>
              <Price darkMode={darkMode}>${product.price}</Price>
              <AddToCartButton href="#">Add to cart</AddToCartButton>
            </PriceContainer>
          </div>
        </CardContainer>
      ))}
    </Container>
  );
};

export default Card;
