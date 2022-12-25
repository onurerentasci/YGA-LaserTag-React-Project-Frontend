import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function SignUpComponent() {
  return (
    <div className="signup-container">
      <div class="row g-0 text-center">
        <h3>Kayıt Ol!</h3>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              id="outlined-firstname-input"
              label="Ad"
              placeholder=""
              color="secondary"
            />
            <TextField
              id="outlined-lastname-input"
              label="Soyad"
              color="secondary"
              autoComplete="current-password"
            />
            <div />
            <div>
              <TextField
                id="outlined-mail-input"
                label="E-Posta"
                type="email"
                color="secondary"
                placeholder="exemple@domain.com"
              />
              <TextField
                id="outlined-password-input"
                label="Parola"
                type="password"
                color="secondary"
                autoComplete="current-password"
              />
            </div>
            <div>
              <TextField
                id="outlined-date-input"
                type="date"
                color="secondary"
              />
            </div>
          </div>
          <button type="button" class="btn btn-outline-secondary">
            Kayıt Ol
          </button>
        </Box>
      </div>
    </div>
  );
}
