export const defaultGraph = {
  last_node_id: 15,
  last_link_id: 30,
  nodes: [
    {
      id: 1,
      type: "InputNode",
      pos: [260, 188],
      size: { 0: 315, 1: 82 },
      flags: {},
      order: 2,
      mode: 0,
      outputs: [
        {
          name: "INPUT",
          type: "INPUT",
          links: [19],
          shape: 3,
          slot_index: 0,
        },
      ],
      properties: { "Node name for S&R": "InputNode" },
      widgets_values: ["what is the prompt", "asdjfkladsf"],
    },
    {
      id: 4,
      type: "KnowledgeBaseNode",
      pos: [491, 608],
      size: { 0: 391.20703125, 1: 58 },
      flags: {},
      order: 0,
      mode: 0,
      outputs: [
        {
          name: "KNOWLEDGE_BASE",
          type: "KNOWLEDGE_BASE",
          links: [21],
          shape: 3,
          slot_index: 0,
        },
      ],
      properties: { "Node name for S&R": "KnowledgeBaseNode" },
      widgets_values: ["General Knowledge"],
    },
    {
      id: 12,
      type: "LLMNode",
      pos: [639, 149],
      size: { 0: 315, 1: 58 },
      flags: {},
      order: 4,
      mode: 0,
      inputs: [
        {
          name: "input",
          type: "INPUT",
          link: 19,
        },
      ],
      outputs: [
        {
          name: "LLM",
          type: "LLM",
          links: [18, 28],
          shape: 3,
          slot_index: 0,
        },
      ],
      properties: { "Node name for S&R": "LLMNode" },
      widgets_values: [
        "Azure",
        "Enter your answers to the clarification questions here.",
      ],
    },
    {
      id: 11,
      type: "TaskPlannerNode",
      pos: [1069, 303],
      size: { 0: 342.5999755859375, 1: 118 },
      flags: {},
      order: 5,
      mode: 0,
      inputs: [
        {
          name: "llm_config",
          type: "LLM",
          link: 18,
        },
        {
          name: "knowledge_base",
          type: "KNOWLEDGE_BASE",
          link: 21,
        },
        {
          name: "available_actions",
          type: "TOOL",
          link: 26,
          multiple: true,
        },
        {
          name: "memory",
          type: "MEMORY",
          link: 22,
        },
      ],
      outputs: [
        {
          name: "TASK_PLAN",
          type: "TASK_PLAN",
          links: [27],
          shape: 3,
          slot_index: 0,
        },
      ],
      properties: { "Node name for S&R": "TaskPlannerNode" },
      widgets_values: [true],
    },
    {
      id: 13,
      type: "MemoryNode",
      pos: [638, 270],
      size: { 0: 315, 1: 130 },
      flags: {},
      order: 1,
      mode: 0,
      outputs: [
        {
          name: "MEMORY",
          type: "MEMORY",
          links: [22],
          shape: 3,
          slot_index: 0,
        },
      ],
      properties: { "Node name for S&R": "MemoryNode" },
      widgets_values: ["default_collection", "", 8000, ""],
    },
    {
      id: 14,
      type: "ToolsNode",
      pos: [605.7866680908196, 504.25683593749994],
      size: { 0: 315, 1: 58 },
      flags: {},
      order: 3,
      mode: 0,
      outputs: [
        {
          name: "TOOL",
          type: "TOOL",
          links: [26],
          shape: 3,
          slot_index: 0,
        },
      ],
      properties: {
        "Node name for S&R": "ToolsNode",
        DocumentLoader: true, // On/Off switch for each tool
        GitHubSearchTool: false,
        SerpSearch: true,
        SerperSearch: false,
        TavilyQASearch: true,
        UnstructuredIO: false,
        WebLoader: true,
        YouTubeSearch: false,
      },
      widgets_values: [true, false, true, false, true, false, true, false],
    },
    {
      id: 15,
      type: "WorkerNode",
      pos: [1538, 170],
      size: { 0: 443.4000244140625, 1: 118 },
      flags: {},
      order: 6,
      mode: 0,
      inputs: [
        {
          name: "task_plan",
          type: "TASK_PLAN",
          link: 27,
        },
        {
          name: "llm_config",
          type: "LLM",
          link: 28,
        },
        {
          name: "available_actions",
          type: "TOOL",
          link: 29,
          multiple: true,
        },
        {
          name: "previous_output",
          type: "WORKER_OUTPUT",
          link: null,
        },
      ],
      outputs: [
        {
          name: "WORKER_OUTPUT",
          type: "WORKER_OUTPUT",
          links: [30],
          shape: 3,
          slot_index: 0,
        },
        {
          name: "UPDATED_TASK_PLAN",
          type: "UPDATED_TASK_PLAN",
          links: [],
          shape: 3,
        },
      ],
      properties: { "Node name for S&R": "WorkerNode" },
      widgets_values: [0],
    },
    {
      id: 10,
      type: "OutputNode",
      pos: [2078, 286],
      size: { 0: 210, 1: 26 },
      flags: {},
      order: 7,
      mode: 0,
      inputs: [
        {
          name: "input",
          type: "*",
          link: 30,
        },
      ],
      outputs: [
        {
          name: "OUTPUT",
          type: "OUTPUT",
          links: null,
          shape: 3,
        },
      ],
      properties: { "Node name for S&R": "OutputNode" },
    },
  ],
  links: [
    [19, 1, 0, 12, 0, "INPUT"],
    [18, 12, 0, 11, 0, "LLM"],
    [21, 4, 0, 11, 1, "KNOWLEDGE_BASE"],
    [22, 13, 0, 11, 3, "MEMORY"],
    [26, 14, 0, 11, 2, "TOOL"],
    [27, 11, 0, 15, 0, "TASK_PLAN"],
    [28, 12, 0, 15, 1, "LLM"],
    [29, 14, 0, 15, 2, "TOOL"],
    [30, 15, 0, 10, 0, "*"],
  ],
  groups: [],
  config: {},
  extra: {
    ds: {
      scale: 0.8264462809917354,
      offset: [-210.5199768066399, -78.74007080078115],
    },
  },
  version: 0.4,
};
