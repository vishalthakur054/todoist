import React, { useState } from "react";
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendar,
  FaRegCalendarAlt
} from "react-icons/fa";
import { useSelectedProjectValue } from "../../context";

export const Sidebar = () => {
  const [setSelectedProject] = useSelectedProjectValue;
  const [active, setActive] = useState("INBOX");
  const [showProjects, setShowProjects] = useState(true);

  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li data-testid="inbox" className="inbox">
          <span>
            <FaInbox />
          </span>
          <span>Inbox</span>
        </li>
        <li data-testid="today" className="today">
          <span>
            <FaRegCalendar />
          </span>
          <span>Today</span>
        </li>
        <li data-testid="next_7" className="next_7">
          <span>
            <FaRegCalendarAlt />
          </span>
          <span>in 7 days</span>
        </li>
      </ul>
      <div className="sidebar__middle">
        <span>
          <FaChevronDown />
        </span>
        <h2>Project</h2>
      </div>
      <ul className="sidebar__projects">Projects will be here</ul>
      Add projects here
    </div>
  );
};
