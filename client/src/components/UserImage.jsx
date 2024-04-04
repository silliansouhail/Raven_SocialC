import { Box } from "@mui/material";

const UserImage = ({ image, size = "60px" }) => {

  //http://localhost:5000
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`https://raven-social.onrender.com/assets/${image}`}
      />
    </Box>
  );
};

export default UserImage;
