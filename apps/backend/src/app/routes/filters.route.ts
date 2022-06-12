export const filterRoutes = (app) => {
  app.get('/filters', async (req, res) => {
    // const databaseProperties = await getDatabaseProperties(process.env.NOTION_TOKEN, process.env.NOTION_DATABASE_ID);
    return res.json([{
      'name': 'Contrainte',
      'options': [{
        'id': '29c9a208-6141-42f5-8d16-d811e42a6569',
        'name': 'Je suis pressé ⏲️',
        'color': 'red',
      }, {
        'id': '9ff470d5-844c-4b3f-a218-de3b27087d0a',
        'name': 'J\'ai le temps 😎',
        'color': 'green',
      }, {'id': 'bc92109a-d6e8-4796-8d91-93403d2ac0eb', 'name': 'Pas quand il pleut ( trop loin ) ☔', 'color': 'blue'}],
    }, {
      'name': 'Prix',
      'options': [{
        'id': 'e3e6d0b9-0d9a-443a-b4f0-52f37c2bd529',
        'name': '€',
        'color': 'green',
      }, {
        'id': 'dbdb065d-2e0b-4a31-8aa2-75afb3f415ae',
        'name': '€€',
        'color': 'orange',
      }, {'id': 'ef633d5e-6e44-4a5c-82ec-1e51968c3f1d', 'name': '€€€', 'color': 'red'}],
    }, {
      'name': 'À combien',
      'options': [{
        'id': 'e09d9f03-cd99-439f-878e-c5c3c601a95b',
        'name': 'Petit commité (1-3)',
        'color': 'green',
      }, {
        'id': '1781db83-c321-46e9-b9d1-bee4acbfbbe2',
        'name': 'Groupe moyen (4-6)',
        'color': 'yellow',
      }, {'id': 'd2dbde30-44a1-4920-825b-4f37ba34ef2b', 'name': 'Grosse équipe (7-infini)', 'color': 'red'}],
    }, {
      'name': 'Option végé',
      'options': [{
        'id': '575b26a8-5d2f-44e5-993f-429be8a1ca50',
        'name': 'Oui',
        'color': 'green',
      }, {
        'id': 'fb866207-9924-4f75-9a56-37d3a3804fb3',
        'name': 'Bof',
        'color': 'orange',
      }, {'id': '9e568b15-fa8e-421b-88dd-c72df191613b', 'name': 'Non', 'color': 'red'}],
    }, {
      'name': 'Mood',
      'options': [{
        'id': '3cc4bea1-0527-4cbb-92ae-0ba9b48b5622',
        'name': 'Saaaale',
        'color': 'green',
      }, {
        'id': 'bdc1a7e2-afcb-4bf7-8b24-e77168006940',
        'name': 'Healthy',
        'color': 'purple',
      }, {'id': '592137bd-c705-4c92-8976-8aefed952ac4', 'name': 'Dépend de toi', 'color': 'yellow'}],
    }]);
  });
}
