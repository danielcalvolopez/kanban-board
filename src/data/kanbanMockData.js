import { v4 } from "uuid";

const kanbanMockData = [
  {
    id: v4(),
    title: "To do",
    tasks: [
      {
        id: v4(),
        title: "Product Idea",
      },
      {
        id: v4(),
        title: "Design UI/UX",
      },
      {
        id: v4(),
        title: "Design UI/UX",
      },
    ],
  },
  {
    id: v4(),
    title: "In Progress",
    tasks: [
      {
        id: v4(),
        title: "Hire Developers",
      },
      {
        id: v4(),
        title: "Search for Investors",
      },
      {
        id: v4(),
        title: "Create a timeline",
      },
    ],
  },
  {
    id: v4(),
    title: "Completed",
    tasks: [
      {
        id: v4(),
        title: "Decide Technologies",
      },
      {
        id: v4(),
        title: "Assign Tasks",
      },
    ],
  },
];

export default kanbanMockData;
