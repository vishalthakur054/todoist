import React from "react";
import { Sidebar } from "../layout/Sidebar";
import { Tasks } from "../Tasks";
export const Content = () => (
  <section>
    <Sidebar />
    <Tasks />
  </section>
);
