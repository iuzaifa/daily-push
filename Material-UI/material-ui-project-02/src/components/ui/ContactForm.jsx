import { Card, TextField, Button, Typography } from "@mui/material";
import { useState } from "react";

const input30px = {
  "& .MuiOutlinedInput-root": {
    height: "40px",
    fontSize: "13px",
  },
  "& .MuiOutlinedInput-input": {
    padding: "0 15px",
    height: "40px",
    display: "flex",
    alignItems: "center",
  },
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Card sx={{ maxWidth: 500 , boxShadow : "0" , border : "1px solid #90909042", background : "#efefef4b", padding : "5px 40px"}}>
        <Typography variant="h6" sx={{fontSize : `30px`, fontWeight : `900`}}>
            Contact My Team
        </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          placeholder="Full Name"
          fullWidth
          margin="normal"
          value={formData.name}
          onChange={handleChange}
          sx={input30px}
        />

        <TextField
          name="email"
          placeholder="Email"
          type="email"
          fullWidth
          margin="normal"
          value={formData.email}
          onChange={handleChange}
          sx={input30px}
        />

        <TextField
          name="phone"
          placeholder="Phone Number"
          type="tel"
          fullWidth
          margin="normal"
          value={formData.phone}
          onChange={handleChange}
          sx={input30px}
        />

        <TextField
          name="message"
          placeholder="Message"
          fullWidth
          margin="normal"
          multiline
          rows={3}
          value={formData.message}
          onChange={handleChange}
        />

        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 , mb : 5}}>
          Submit
        </Button>
      </form>
    </Card>
  );
};

export default ContactForm;
