import React, { useState } from "react";
import { Box, Heading, Text, Flex, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Button, Image, Grid, Badge } from "@chakra-ui/react";
import { FaChartLine, FaPercentage, FaEye, FaRobot } from "react-icons/fa";

const Index = () => {
  const [selectedDashboard, setSelectedDashboard] = useState("prices");

  const dashboards = [
    { id: "prices", title: "Price Analysis", icon: FaChartLine },
    { id: "promotions", title: "Promotion Analysis", icon: FaPercentage },
    { id: "visibility", title: "Visibility Analysis", icon: FaEye },
  ];

  const recommendations = [
    {
      id: 1,
      title: "Adjust pricing strategy",
      description: "Consider reducing prices on slow-moving products to boost sales.",
    },
    {
      id: 2,
      title: "Increase promotional activities",
      description: "Run targeted promotions on high-margin products to improve profitability.",
    },
    {
      id: 3,
      title: "Optimize product placement",
      description: "Place top-selling products in prominent positions to enhance visibility.",
    },
  ];

  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={8}>
        FMCG E-commerce Co-Pilot Analyst
      </Heading>

      <Flex mb={8}>
        {dashboards.map((dashboard) => (
          <Button key={dashboard.id} leftIcon={<dashboard.icon />} variant={selectedDashboard === dashboard.id ? "solid" : "ghost"} onClick={() => setSelectedDashboard(dashboard.id)} mr={4}>
            {dashboard.title}
          </Button>
        ))}
      </Flex>

      {selectedDashboard === "prices" && (
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Price Analysis
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={8}>
            <Stat>
              <StatLabel>Average Price</StatLabel>
              <StatNumber>$25.99</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                5.7%
              </StatHelpText>
            </Stat>
            <Stat>
              <StatLabel>Price Range</StatLabel>
              <StatNumber>$10 - $50</StatNumber>
            </Stat>
            <Stat>
              <StatLabel>Price Competitiveness</StatLabel>
              <StatNumber>85%</StatNumber>
              <StatHelpText>Compared to market average</StatHelpText>
            </Stat>
          </Grid>
        </Box>
      )}

      {selectedDashboard === "promotions" && (
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Promotion Analysis
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={8}>
            <Stat>
              <StatLabel>Active Promotions</StatLabel>
              <StatNumber>25</StatNumber>
            </Stat>
            <Stat>
              <StatLabel>Promotion Effectiveness</StatLabel>
              <StatNumber>+15%</StatNumber>
              <StatHelpText>Sales uplift during promotions</StatHelpText>
            </Stat>
            <Stat>
              <StatLabel>Promotion ROI</StatLabel>
              <StatNumber>2.5x</StatNumber>
              <StatHelpText>Return on promotional investment</StatHelpText>
            </Stat>
          </Grid>
        </Box>
      )}

      {selectedDashboard === "visibility" && (
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Visibility Analysis
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={8}>
            <Stat>
              <StatLabel>Product Views</StatLabel>
              <StatNumber>10,500</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                12.3%
              </StatHelpText>
            </Stat>
            <Stat>
              <StatLabel>Search Ranking</StatLabel>
              <StatNumber>Top 5</StatNumber>
              <StatHelpText>For key product categories</StatHelpText>
            </Stat>
            <Stat>
              <StatLabel>Visibility Score</StatLabel>
              <StatNumber>92%</StatNumber>
              <StatHelpText>Compared to competitors</StatHelpText>
            </Stat>
          </Grid>
        </Box>
      )}

      <Box mt={12}>
        <Flex align="center" mb={4}>
          <FaRobot size={24} />
          <Heading as="h2" size="lg" ml={2}>
            AI-Assisted Recommendations
          </Heading>
        </Flex>
        <Grid templateColumns="repeat(3, 1fr)" gap={8}>
          {recommendations.map((recommendation) => (
            <Box key={recommendation.id} borderWidth={1} borderRadius="md" p={4}>
              <Heading as="h3" size="md" mb={2}>
                {recommendation.title}
              </Heading>
              <Text>{recommendation.description}</Text>
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Index;
