import React, { useState } from "react";
import Cards from "react-credit-cards";
import { Box, TextField, Button } from "@mui/material";
import "react-credit-cards/es/styles-compiled.css";
import DoneIcon from "@mui/icons-material/Done";
import InputMask from "react-input-mask";

const CreditCard = () => {
  const [values, setValues] = useState({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  });

  const handleInputFocus = (e) => {
    setValues({ ...values, focus: e.target.name });
  };

  return (
    <Box>
      <Box id="PaymentForm">
        <Box>
          <Cards
            cvc={values.cvc}
            expiry={values.expiry}
            focused={values.focus}
            name={values.name}
            number={values.number}
          />
        </Box>

        <form>
          <TextField
            sx={{
              "& .MuiInputBase-input": {
                height: "50px",
              },
            }}
            className="w-full mb-2"
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            onFocus={handleInputFocus}
            name="name"
            required
            id="outlined-basic"
            label="Holder Name"
            variant="outlined"
          />
          <InputMask
            mask="9999 9999 9999 9999"
            onChange={(e) => setValues({ ...values, number: e.target.value })}
            onFocus={handleInputFocus}
          >
            {() => (
              <TextField
                sx={{
                  "& .MuiInputBase-input": {
                    height: "50px",
                  },
                }}
                className="w-full mb-2 form-control"
                name="number"
                inputProps={{
                  type: "tel",
                }}
                required
                id="outlined-basic"
                label="Card Number"
                variant="outlined"
              />
            )}
          </InputMask>

          <InputMask
            mask="99/99"
            onChange={(e) => setValues({ ...values, expiry: e.target.value })}
            onFocus={handleInputFocus}
          >
            {() => (
              <TextField
                sx={{
                  "& .MuiInputBase-input": {
                    height: "50px",
                  },
                }}
                className="w-full mb-2"
                name="expiry"
                type="tel"
                required
                id="outlined-basic"
                label="Expiry Date"
                variant="outlined"
              />
            )}
          </InputMask>
          <InputMask
            mask="999"
            onChange={(e) => setValues({ ...values, cvc: e.target.value })}
            onFocus={handleInputFocus}
          >
            {() => (
              <TextField
                sx={{
                  "& .MuiInputBase-input": {
                    height: "50px",
                  },
                }}
                className="w-full mb-4 rounded-lg"
                name="cvc"
                type="text"
                required
                id="outlined-basic"
                label="CVC"
                variant="outlined"
              />
            )}
          </InputMask>

          <Box className="flex justify-center">
            <Button
              endIcon={<DoneIcon />}
              className="capitalize bg-slate-800"
              variant="contained"
            >
              Sifarisi tamamla
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default CreditCard;
