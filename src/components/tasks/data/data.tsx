import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons"

export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
]

export const statuses = [
  {
    value: "backlog",
    label: "Backlog",
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    icon: QuestionMarkCircledIcon,
  },
  {
    value: "todo",
    label: "Todo",
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    icon: CircleIcon,
  },
  {
    value: "in progress",
    label: "In Progress",
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    icon: StopwatchIcon,
  },
  {
    value: "done",
    label: "Done",
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    icon: CheckCircledIcon,
  },
  {
    value: "canceled",
    label: "Canceled",
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    icon: CrossCircledIcon,
  },
]

export const priorities = [
  {
    label: "Low",
    value: "low",
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    icon: ArrowDownIcon,
  },
  {
    label: "Medium",
    value: "medium",
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    icon: ArrowRightIcon,
  },
  {
    label: "High",
    value: "high",
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    icon: ArrowUpIcon,
  },
]
