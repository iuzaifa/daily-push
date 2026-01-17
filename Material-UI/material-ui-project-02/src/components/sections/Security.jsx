import { Button, Container, Grid, Box } from "@mui/material";
import SectionHeading from "./SectionHeading";
import SectionTitle from "./SectionTitle";
import SectionDesctiption from "./SectionDesctiption";

const Security = () => {
  return (
    <>
      <Container maxWidth={`xl`}>
        <Grid
          container
          spacing={10}
          padding={5}
          sx={{ display: `flex`, alignItems: " center" }}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <SectionTitle title={"Security"} />
            <SectionHeading
              heading={
                "Every layer of Ankar is engineered to meet the highest standards of data protection and security"
              }
            />
            <SectionDesctiption
              description={`Our platform achieved full certification before our first customer. We believe that in IP, trust isn’t optional. It’s foundational.`}
            />
            <Button
              variant="contained"
              sx={{
                background: "#fff",
                color : "#101010",
                borderRadius: 0,
                fontSize: 12,
                fontWeight: 400,
                marginTop : "30px"
              }}
            >
              Read our principles
            </Button>
          </Grid>
          <Grid size={{ xs: 12, md: 6 , display : "flex", alignItems : "center"}} spacing={2}>
            <Box component={'div'} size={{xs : 12, md : 6}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ipsum vero, quasi, voluptatum fugit maiores et exercitationem ab blanditiis nemo placeat hic quis atque excepturi eveniet sunt temporibus tempora voluptatibus!</Box>
            <Box component={'div'} size={{xs : 12, md : 6}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ipsum vero, quasi, voluptatum fugit maiores et exercitationem ab blanditiis nemo placeat hic quis atque excepturi eveniet sunt temporibus tempora voluptatibus!</Box>
            <Box component={'div'} size={{xs : 12, md : 6}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ipsum vero, quasi, voluptatum fugit maiores et exercitationem ab blanditiis nemo placeat hic quis atque excepturi eveniet sunt temporibus tempora voluptatibus!</Box>
            <Box component={'div'} size={{xs : 12, md : 6}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ipsum vero, quasi, voluptatum fugit maiores et exercitationem ab blanditiis nemo placeat hic quis atque excepturi eveniet sunt temporibus tempora voluptatibus!</Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Security;
