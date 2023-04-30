import { connection } from '../database/config.js';

export const RegisterController = {
  create: async ( request, response ) => {
    const { title, meter1, meter2, date} = request.body;


    const data = await connection('register')
        .insert({ title, meter1, meter2, date})
        .returning('*')

    return response
    .status(201)
    .type('application/json')
    .json(data);
  },
  readAll: async ( request, response ) => {
    const data = await connection('register').select('*');

    return response
    .status(200)
    .type('application/json')
    .json(data);
  },
  readByTitle: async ( request, response ) => {
    const { title } = request.query;

    const data = await connection('register')
      .select('*')
      .whereLike('title', `%${title}%`)
    return response
    .status(200)
    .type('application/json')
    .json(data);
  },
  update: async ( request, response ) => {
    const { id } = request.params;
    const { title, meter1, meter2, date } = request.body;
    const data = await connection('register')
    .where('id', id)
    .update({ title, meter1, meter2, date })

    return response.json(data);
  },
  delete: async ( request, response ) => {
    const { id } = request.params;

    const data = await connection('register')
    .where('id', id)
    .del();

    return response
      .status(200)
      .type('application/json')
      .json({message: "Success."});
  }
}
