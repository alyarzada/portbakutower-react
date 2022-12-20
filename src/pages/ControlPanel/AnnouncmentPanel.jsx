import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const AnnouncmentPanel = () => {
  return (
    <Box>
      <Box className="dark:text-text1 mb-4">
        <Box className="border-b border-b-textmuted mb-4 pb-1">
          <Typography className="font-semibold text-lg">
            Rashad Huseynov
          </Typography>
          <Typography className="text-xs text-textmuted">
            1 ay evvel yerlesdirilib
          </Typography>
        </Box>
        <Typography>
          Hörmətli Sakinlər, Su təhcizatının boru xəttinin ‘Port Bazar’ və
          ümumi restoranıar nöqtəsində tıxanma ilə əlaqədar aşağı qat
          avtodayanacaqlarda su axıntıları müşahidə olunur. Hal-hazırda
          bərpa-təmir işləri davam edir. Hörmətlə, Bina Rəhbərliyi
        </Typography>
      </Box>
      <Box className="flex justify-center">
        <Link to="/complexpanel" className="text-blue-400 hover:text-blue-500">
          Ətraflı...
        </Link>
      </Box>
    </Box>
  );
};

export default AnnouncmentPanel;
