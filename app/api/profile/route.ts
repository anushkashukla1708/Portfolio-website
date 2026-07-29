import { NextResponse } from "next/server";

import about from "@/data/about";
import skills from "@/data/skills";
import projects from "@/data/projects";
import education from "@/data/education";
import experiences from "@/data/experience";
import contact from "@/data/contact";

export async function GET() {
  return NextResponse.json({
    about,
    skills,
    projects,
    education,
    experiences,
    contact,
  });
}