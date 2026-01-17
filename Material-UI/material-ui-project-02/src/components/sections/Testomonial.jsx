import { Grid, Box, Container, Typography, Button } from "@mui/material";
import SectionDesctiption from "./SectionDesctiption";
import useEmblaCarousel from "embla-carousel-react";

const data = [
  {
    id: 1,
    name: "Alexander R.L",
    designation: "Designer & Developer",
    review:
      "Whilst Vorys views AI as a powerful accelerator of quality, its use is always governed by one principle: client discretion. Some clients fully embrace AI-enhanced patent practice; others prefer traditional workflows.",
    profile: "c1.png",
    backgroundImg: "c1.png",
  },
  {
    id: 2,
    name: "Sophia Martinez",
    designation: "Product Manager",
    review:
      "The team balances innovation with responsibility. Their AI-assisted workflows are applied only when aligned with client expectations and compliance requirements.",
    profile: "c2.png",
    backgroundImg: "c1.png",
  },
  {
    id: 3,
    name: "Daniel Wong",
    designation: "Legal Consultant",
    review:
      "What stands out is their respect for client guidelines. Whether using AI tools or traditional methods, quality and confidentiality are never compromised.",
    profile: "c3.png",
    backgroundImg: "c1.png",
  },
  {
    id: 4,
    name: "Emily Johnson",
    designation: "UX Strategist",
    review:
      "Their approach to AI is thoughtful and client-centric. Every engagement reflects sensitivity to context, workflow preferences, and industry standards.",
    profile: "c4.png",
    backgroundImg: "c1.png",
  },
  {
    id: 5,
    name: "Rahul Verma",
    designation: "Technology Lead",
    review:
      "AI is used as an enabler—not a replacement. The flexibility to adapt to different client needs makes their delivery both modern and trustworthy.",
    profile: "c5.png",
    backgroundImg: "c1.png",
  },
];

const Testomonial = () => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {data.map((dt) => (
            <div className="embla__slide" key={dt.id}>
              <Container maxWidth="md">
                <Grid sx={{ padding: "100px 0px" }}>
                  <Box
                    component="div"
                    sx={{ width: "100%", height: "auto", overflow: "hidden" }}
                  >
                    <Box component="img" src={dt.backgroundImg} alt="image"></Box>
                  </Box>
                  <Box sx={{ marginTop: "8px" }}>
                    <SectionDesctiption
                    description={dt.review}

                    />
                  </Box>
                  <Box
                    component="div"
                    sx={{
                      marginTop: "30px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: " center",
                        gap: "10px ",
                      }}
                    >
                      <Box
                        component="img"
                        src={dt.profile}
                        alt="image"
                        height={40}
                        width={40}
                        sx={{ borderRadius: "100%" }}
                      ></Box>
                      <Box component={"div"}>
                        <Typography
                          sx={{
                            fontSize: "12px",
                            fontWeight: 600,
                            color: "#303030",
                          }}
                        >
                          {dt.name}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "10px",
                            fontWeight: 400,
                            color: "#303030",
                            marginTop: "-5px",
                          }}
                        >
                          {dt.designation}
                        </Typography>
                      </Box>
                    </Box>

                    <Button
                      variant="contained"
                      sx={{
                        background: "#101010",
                        borderRadius: "0",
                        fontSize: "12px",
                        fontWeight: 400,
                      }}
                    >
                      Learn More
                    </Button>
                  </Box>
                </Grid>
              </Container>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testomonial;
