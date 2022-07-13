import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";

import { sources } from "../utils/helper";

const AllowedSources = () => {
  const poss = Object.keys(sources);
  const [values, setValues] = useState(
    poss.reduce((p, n) => {
      p[n] = true;
      return p;
    }, {})
  );

  return (
    <Container>
      {poss.map((p) => (
        <FormControlLabel
          key={p}
          label={p}
          control={
            <Checkbox
              checked={values[p]}
              onClick={() => {
                const nvalues = { ...values };
                nvalues[p] = !nvalues[p];
                setValues(nvalues);
              }}
            />
          }
        />
      ))}
    </Container>
  );
};

export default AllowedSources;
