import { OPEN_AI } from '../../globals';
import { ErrorResponse } from '../types';
import { OpenAIErrorResponseTransform } from './utils';

export const OpenAIGetFilesResponseTransform = (
  response: Response | ErrorResponse,
  responseStatus: number
): Response | ErrorResponse => {
  if (responseStatus !== 200 && 'error' in response) {
    return OpenAIErrorResponseTransform(response, OPEN_AI);
  }

  return response;
};
