import {
  Tooltip,
  Fab,
  Modal,
  styled,
  Avatar,
  Stack,
  Typography,
  TextField,
  Button,
  ButtonGroup
} from "@mui/material";
import React from "react";
import {
  Add as AddIcon,
  EmojiEmotions,
  Image,
  VideoCameraBack,
  PersonAdd,
  DateRange,
} from "@mui/icons-material";
import { useState } from "react";
import { Box } from "@mui/system";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip title="Add Post" onClick={(e) => setOpen(true)}>
        <Fab
          color="primary"
          aria-label="add"
          sx={{
            position: "fixed",
            bottom: 20,
            left: { xs: "calc(50% - 25px)", md: 30 },
          }}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal open={open} onClose={(e) => setOpen(false)}>
        <Box
          width={400}
          height={280}
          backgroundColor={'background.default'} 
          color={'text.primary'}
          borderRadius={5}
          padding={3}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>

          <UserBox>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src="https://images.pexels.com/photos/371985/pexels-photo-371985.jpeg?cs=srgb&dl=pexels-pixabay-371985.jpg&fm=jpg"
            />
            <Typography>Marzia</Typography>
          </UserBox>

          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="what's on your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} marginTop={2} marginBottom={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
