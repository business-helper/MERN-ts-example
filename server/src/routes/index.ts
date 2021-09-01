import { Router, Application, Request, Response } from 'express';

import Member from '../models/member';
import countries from '../constants/countries';

export const register = (app: Application) => {
  app.route('/members')
    .get(async (req: Request, res: Response) => {
      return Member.find({})
        .then(members => res.status(200).json({ data: members }))
        .catch(error => res.status(400).json({ error: error.message }));
    })
    .post(async (req: Request, res: Response) => {
      return Promise.resolve()
        .then(() => {
          const { name, country } = req.body;
          const member = Member.build({ name, country });
          return member.save();
        })
        .then(member => res.status(201).json({ data: member }))
        .catch(error => res.status(400).json({ error: error.message }));
    });

  app.route('/members/:id')
    .delete(async (req: Request, res: Response) => {
      return Member.deleteOne({ _id: req.params.id })
        .then(() => res.status(204).send())
        .catch(error => res.status(400).json({ error: error.message }));
    });

  app.route('/countries')
    .get((req: Request, res: Response) => {
      return res.json({ data: countries });
    });

  app.get('/', (req: Request, res: Response) => {
    res.send('Welcome!');
  });
};
