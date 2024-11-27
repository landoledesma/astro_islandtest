import { getAvailabilityById } from './places/get-availibility-by-id.action';
import { getPlaces } from './places/get-places.actions';

export const server = {
  getPlaces,
  getAvailabilityById,
};