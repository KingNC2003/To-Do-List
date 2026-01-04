"use client";

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import ButtonBase from "@mui/material/ButtonBase";

type UploadAvatarProps = {
  src?: string;
  alt?: string;
  size?: number;
  onChange?: (image: string) => void;
};

export default function UploadAvatar({
  src,
  alt = "Upload avatar",
  size = 40,
  onChange,
}: UploadAvatarProps) {
  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        onChange?.(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <ButtonBase
      component="label"
      tabIndex={-1}
      aria-label={alt}
      sx={{
        borderRadius: "50%",
        "&:has(:focus-visible)": {
          outline: "2px solid",
          outlineOffset: "2px",
        },
      }}
    >
      <Avatar
        src={src}
        alt={alt}
        sx={{ width: size, height: size }}
      />

      <input
        type="file"
        accept="image/*"
        hidden
        onChange={handleAvatarChange}
      />
    </ButtonBase>
  );
}
