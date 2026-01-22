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
import Typography from "@mui/material/Typography";
import Textbox from "./components/Textbox"

type Task = {
  id: string;
  title: string;
};


export default function Home() {
  const [avatar, setAvatar] = useState<string>("/user.png");
  const [gender, setGender] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <div className="min-h-screen py-16 px-16 bg-sky-700 font-sans dark:bg-zinc-800">
      <main className="mx-auto min-h-screen w-full max-w-3xl py-32 px-16 bg-white dark:bg-zinc-800 sm:items-start">
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
              {
                label: "",
                icon: <StarIcon fontSize="inherit" />,
              },
              {
                label: <Typography sx={{ color: "white" }}>My Tasks</Typography>,
              },
              {
                label: (
                  <Typography sx={{ color: "white" }}>
                    New List
                  </Typography>
                ),
                icon: <AddIcon fontSize="inherit" />,
              },
            ]}
          />
        </div>
        <div>
          {tasks.length > 0 && (
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
          )}
        </div>
        <div>
          <Button
            variant="contained"
            onClick={() =>
              setTasks((prev) => [...prev, { id: String(Date.now()), title: "New task" }])
            }
          >
            Create Task
          </Button>
        </div>
        <div>
          <Textbox
          label="Input your task here"
          multiline={true}
          width={670}
          rows={4}
          />
        </div>
      </main>
    </div>
  );
}
