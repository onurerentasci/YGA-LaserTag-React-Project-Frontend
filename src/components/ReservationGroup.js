import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export default function ReservationGroup() {
  return (
    <div className="reservation-container">
      <div className="login">
        <h3>Giris Yap!</h3>
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
              id="outlined-mail-input"
              label="E-Posta"
              placeholder="exemple@mail.com"
            />
            <TextField
              id="outlined-password-input"
              label="Parola"
              type="password"
              autoComplete="current-password"
            />
          </div>
        </Box>
        <button type="button" class="btn btn-outline-secondary">
          Giriş Yap
        </button>
      </div>
      <div className="choice">
        <div className="c1">
          <div>
            <h6>Almak istediginiz hizmeti seçiniz!</h6>
          </div>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="LaserTag"
                control={<Radio />}
                label="LaserTag"
              />
              <FormControlLabel
                value="PlayStation"
                control={<Radio />}
                label="PlayStation"
              />
              <FormControlLabel value="PC" control={<Radio />} label="PC" />
            </RadioGroup>
          </FormControl>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { marginTop: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div className="telefon">
              <h6>Telefon numaranızı yazınız</h6>
              <TextField
                id="outlined-mail-input"
                label="Telefon Numarası"
                placeholder="53xxxxxxxx"
              />
            </div>
            <div>
              <button class="button-77" role="button">
                Rezervasyon
              </button>
            </div>
          </Box>
        </div>
        <div className="c2">
          <div><h6>Saatler</h6></div>
        </div>
      </div>
    </div>
  );
}
