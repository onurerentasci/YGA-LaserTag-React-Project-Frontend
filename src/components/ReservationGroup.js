import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { CustomLink } from "./Navbar";
import SignUp from "../pages/SignUp";
import TimeGrid from "./TimeGrid";

export default function ReservationGroup() {
  return (
    <div className="reservation-container">
      <div class="row g-0 text-center">
        <div class="col-sm-6 col-md-8 ">
          <h6>Almak istediginiz hizmeti seçiniz!</h6>
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
          </Box>
          <h6>Saatler</h6>
          <div className="time-grid">
            <TimeGrid />
          </div>
          <div>
            <div className="submit-button">
            <button class="button-36" role="button">Rezervasyon</button>

            </div>
          </div>
        </div>

        <div class="col-6 col-md-4">
          <div className="login">
            <h3>Giris Yap!</h3>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "35ch" },
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
              <button type="button" class="btn btn-outline-secondary">
                Giriş Yap
              </button>
              <CustomLink to={"/signup"} element={<SignUp />}>
                Üye Değil Misin? Kayıt Ol!
              </CustomLink>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}
