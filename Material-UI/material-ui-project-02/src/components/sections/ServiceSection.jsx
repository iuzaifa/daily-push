import { Box, Container, Typography, Grid } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const services = [
  {
    id: 1,
    title: "Custom Software Development",
    description:
      "We build scalable and secure software solutions tailored to your business needs.",
  },
  {
    id: 2,
    title: "Web Application Development",
    description:
      "Modern, responsive, and high-performance web applications using the latest technologies.",
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps for Android and iOS.",
  },
  {
    id: 4,
    title: "UI/UX Design",
    description:
      "User-centered design solutions that enhance usability and customer experience.",
  },
  {
    id: 5,
    title: "API Development & Integration",
    description: "Robust RESTful APIs and seamless third-party integrations.",
  },
  {
    id: 6,
    title: "Cloud Solutions",
    description:
      "Cloud architecture, deployment, and optimization for scalable applications.",
  },
  {
    id: 7,
    title: "DevOps & CI/CD",
    description:
      "Automated deployment pipelines and infrastructure management.",
  },
  {
    id: 8,
    title: "Enterprise Application Development",
    description:
      "Reliable enterprise-grade applications for large-scale businesses.",
  },
  {
    id: 9,
    title: "Maintenance & Support",
    description: "Ongoing support, monitoring, and performance optimization.",
  },
  {
    id: 10,
    title: "IT Consulting",
    description:
      "Expert guidance to help you choose the right technology solutions.",
  },
];

const ServiceSection = () => {
  return (
    <Container maxWidth="xl" sx={{ background: "#f5f6f7c8", py: 5 }}>
      {/* Heading */}
      <Box textAlign="center" maxWidth="md" mx="auto" mb={4}>
        <Typography variant="h2" component="h2">
          Our Services
        </Typography>
        <Typography fontSize={14} lineHeight={1.6} color="#606060" mt={1}>
          We provide end-to-end software development services to help businesses
          grow with scalable, secure, and modern digital solutions.
        </Typography>
      </Box>

      {/* Carousel */}
      <Grid container justifyContent="center">
        <Grid size={10} sx={{ position: "relative" }}>
          <Swiper
            loop
            navigation
            mousewheel
            keyboard
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1440: { slidesPerView: 4 },
            }}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          >
            {services.map((service) => (
              <SwiperSlide key={service.id}>
                <Box
                  sx={{
                    background: "#fff",
                    borderRadius: "10px",
                    p: 3,
                    height: "100%",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                  }}
                >
                  <Typography fontSize={16} fontWeight={600}>
                    {service.title}
                  </Typography>

                  <Typography fontSize={13} color="#404040" mt={1}>
                    {service.description}
                  </Typography>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ServiceSection;
