"use client";

import dynamic from "next/dynamic";

export const CourseSignupForm = dynamic(
  () => import("./CourseSignupForm").then((mod) => mod.CourseSignupForm),
  {
    ssr: false,
    loading: () => (
      <p className="text-sm text-espresso/60">Cargando formulario de inscripción…</p>
    ),
  },
);
