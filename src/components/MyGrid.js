import React from "react";
import { Grommet, Box, Grid, Heading, ResponsiveContext } from "grommet";
import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";
import "./styles/MyGrid.css"

  export default function MyGrid({
    isLoading,
    className = "MyGrid",
    disabled = false,
    ...props
  }) {
    const customBreakpoints = deepMerge(grommet, {
        global: {
          breakpoints: {
            small: {
              value: 600
            },
            medium: {
              value: 900
            },
            large: {
              value: 3000
            }
          }
        }
      });
      
      // columns, rows and areas are for Grid with a known number of contents / boxes.
      
      // If the size is small, we only see 1 column
      // If the size is medium, we only see 2 columns
      // If the size is either large or xlarge, we see 3 columns
      const columns = {
        small: ["auto"],
        medium: ["auto", "auto"],
        large: ["auto", "auto", "auto"],
        xlarge: ["auto", "auto", "auto"]
      };
      
      // If the size is small, we have 3 rows
      // If the size is medium, we have 2 rows
      // If the size is large or xlarge, we have 1 row
      const rows = {
        small: ["xsmall", "xsmall", "xsmall"],
        medium: ["xsmall", "xsmall"],
        large: ["xsmall"],
        xlarge: ["xsmall"]
      };
      
      // Set the different areas you need for every size
      const fixedGridAreas = {
        small: [
          { name: "header", start: [0, 0], end: [0, 0] },
          { name: "test", start: [0, 1], end: [0, 1] },
          { name: "test1", start: [0, 2], end: [0, 2] }
        ],
        medium: [
          { name: "header", start: [0, 0], end: [1, 0] },
          { name: "test", start: [0, 1], end: [0, 1] },
          { name: "test1", start: [1, 1], end: [1, 1] }
        ],
        large: [
          { name: "header", start: [0, 0], end: [0, 0] },
          { name: "test", start: [1, 0], end: [1, 0] },
          { name: "test1", start: [2, 0], end: [2, 0] }
        ],
        xlarge: [
          { name: "header", start: [0, 0], end: [0, 0] },
          { name: "test", start: [1, 0], end: [1, 0] },
          { name: "test1", start: [2, 0], end: [2, 0] }
        ]
      };
      
      // Let's say this is returned from an API
      const animals = [
        "Kinematics",
        "Dynamics",
        "UCM",
        "Grav",
        "Energy",
        "Momentum",
        "Rotation",
        "Waves",
        "Statics",
        "EandM",
        "Fluids",
        "Thermo",
        "Optics",
        "Quantum",
        "Nuclear"
      ];
      

      // Create box for each animal
      const listAnimalsBoxes = animals.map(animalName => (
          
        <Box
          className="myBox"
          pad="none"
          elevation="large"
          background="#001a00"
          key={animalName}
          flex={false}
          justify="center"
          align="center"
          round="medium"
          height="75px"
          margin="none"
          alignContent="center"

        >
          <Heading width="100%" height="30px" margin="none" level={1}><a className="gridBoxes" href={animalName}>{animalName}</a></Heading>
        </Box>
      ));
      
      const Responsive = ({
        children,
        overrideColumns,
        overrideRows,
        areas,
        ...props
      }) => (
        <ResponsiveContext.Consumer>
          {size => {
            // Take into consideration if not array is sent but a simple string
            let columnsVal = columns;
            if (columns) {
              if (columns[size]) {
                columnsVal = columns[size];
              }
            }
      
            let rowsVal = rows;
            if (rows) {
              if (rows[size]) {
                rowsVal = rows[size];
              }
            }
      
            // Also if areas is a simple array not an object of arrays for
            // different sizes
            let areasVal = areas;
            if (areas && !Array.isArray(areas)) areasVal = areas[size];
      
            return (
              <Grid
                {...props}
                areas={!areasVal ? undefined : areasVal}
                rows={4}
                columns={!columnsVal ? size : columnsVal}
              >
                {children}
              </Grid>
            );
          }}
        </ResponsiveContext.Consumer>
      );
      
      const ResponsiveGrid = () => (
        <Grommet theme={customBreakpoints}>
          <Box style={{background: "rgb(53, 78, 1)"}}>      
            <Responsive pad="small" gap="medium" margin="large" columns="small" rows="medium">
              {listAnimalsBoxes}
            </Responsive>
          </Box>
        </Grommet>
      );

  return (
    <ResponsiveGrid></ResponsiveGrid>
  );
}