import Source from "./source";

type PromptStatus = "Waiting" | "Ready" | "Failed" | "Success";

interface Prompt {
  id: string;
  input: string;
  response: string | null;
  responseStatus: PromptStatus;
  sources: Source[];
}

export default Prompt;
