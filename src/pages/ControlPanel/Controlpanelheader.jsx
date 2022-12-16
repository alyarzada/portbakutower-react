import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Typography, Stack, Breadcrumbs } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";

const ControlPanelHeader = () => {
  const { t } = useTranslation();

  return (
    <Stack
      direction={{ xs: "column-reverse", md: "row" }}
      justifyContent={{ xs: "flex-start", md: "space-between" }}
      alignItems={{ xs: "flex-start", md: "center" }}
      className="mb-4"
      spacing={1}
    >
      <Typography
        className="text-[#6c757d] dark:text-slate-50 font-semibold"
        variant="h6"
        component="h1"
      >
        {t("idareetmepaneli")}
      </Typography>

      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          className="text-logoColor flex items-center"
          color="inherit"
          href="/"
        >
          <HomeIcon
            className="text-logoColor"
            sx={{ mr: 0.5 }}
            fontSize="inherit"
          />
          {t("anasehife")}
        </Link>
        <Typography
          sx={{ display: "flex", alignItems: "center" }}
          color="text.primary"
        >
          <AdminPanelSettingsOutlinedIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          {t("idareetmepaneli")}
        </Typography>
      </Breadcrumbs>
    </Stack>
  );
};

export default ControlPanelHeader;
