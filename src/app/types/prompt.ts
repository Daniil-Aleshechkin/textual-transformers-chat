type PromptStatus = "Waiting" | "Ready" | "Failed" | "Success";

interface Prompt {
  id: string;
  input: string;
  response: string | null;
  responseStatus: PromptStatus;
}

export default Prompt;
