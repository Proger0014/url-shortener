export interface ProblemDefaultResponse {
  type: string;
  title: string;
  status: number;
  traceId: string;
  timeAt: Date;
}

export interface ProblemValidationResponse {
  type: string;
  title: string;
  status: number;
  errors: { [key: string]: string[] };
}

export type ProblemResponse = ProblemDefaultResponse | ProblemValidationResponse;