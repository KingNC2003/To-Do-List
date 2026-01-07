"use client";

import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";

type BreadcrumbItem = {
  label: React.ReactNode;
  href?: string;
  icon?: React.ReactNode;
};

type IconBreadCrumbsProps = {
  items: BreadcrumbItem[];
};

export default function IconBreadCrumbs({ items }: IconBreadCrumbsProps) {
  return (
    <Breadcrumbs 
     sx={{
    color: "white",
    "& .MuiSvgIcon-root": {
      color: "white",
    },
    "& a": {
      color: "white",
      textDecoration: "none",
    },
  }}
    >
      {items.map((item, index) =>
        item.href ? (
          <Link
            key={index}
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
            href={item.href}
          >
            {item.icon && <span style={{ marginRight: 4 }}>{item.icon}</span>}
            {item.label}
          </Link>
        ) : (
          <Typography
            key={index}
            sx={{ color: "text.primary", display: "flex", alignItems: "center" }}
          >
            {item.icon && <span style={{ marginRight: 4 }}>{item.icon}</span>}
            {item.label}
          </Typography>
        )
      )}
    </Breadcrumbs>
  );
}
