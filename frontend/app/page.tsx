"use client";
import Image from "next/image";
import Button from "@mui/material/Button";
import IconBreadCrumbs from "./components/IconBreadCrumbs";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import { useState } from "react";
import UploadAvatar from "./components/UploadAvatar";
import StarIcon from '@mui/icons-material/Star';
import AddIcon from '@mui/icons-material/Add';
import RadioButtons from "./components/RadioButtons";

export default function Home() {
  const [avatar, setAvatar] = useState<string>("/user.png");
  const [gender, setGender] = useState<string>("");

  return (
    <div className="min-h-screen py-16 px-16 bg-sky-700 font-sans dark:bg-sky-950">
      <main className="mx-auto min-h-screen w-full max-w-3xl py-32 px-16 bg-white dark:bg-sky-950 sm:items-start">
        <div className="absolute top-16 right-16">
            <UploadAvatar
              src={avatar}
              size={32}
              onChange={setAvatar}
            />
        </div>
        <div className="flex justify-center">
         <IconBreadCrumbs
         items={[
          {label: "", icon: <StarIcon fontSize="inherit" />},
          {label: "My Tasks"},
          {label: "New List", icon: <AddIcon fontSize="inherit" />},
          ]} 
          />
        </div>
        <div className="flex justify-center">
          <RadioButtons
           label=""
           value={gender}
           onChange={setGender}
           options={[
            { value: "task", label: "" },
            { value: "task1", label: "" },
            { value: "task2", label: "" },
            ]}
          />
        </div>
      </main>
    </div>
  );
}
