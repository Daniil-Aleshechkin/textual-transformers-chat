type PromptStatus = "Waiting" | "Ready" | "Failed";

interface Prompt {
  id: string;
  input: string;
  response: string | null;
  responseStatus: PromptStatus;
}

export default Prompt;
