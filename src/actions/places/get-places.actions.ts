import { defineAction } from 'astro:actions';
import { prisma } from '../../db';

export const getPlaces = defineAction({
  accept: 'json',
  handler: async () => {
    try {
      const places = await prisma.place.findMany();
      console.log('Places:', places); // Agrega este log para ver los datos devueltos
      return places;
    } catch (error) {
      console.log('Error:', error); // Agrega este log para ver el error
      throw 'Error getting places';
    }
  },
});