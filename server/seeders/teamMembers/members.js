export default async (models) => {
  //  Team members
  const membersList = [
    {
      name: 'Giorgio',
      surname: 'Verdi',
      jobTitle: 'head of office',
      img: 'https://i.pinimg.com/originals/3d/fa/72/3dfa721da08c2977a0fe583bea20d7d4.jpg',
    },
    {
      name: 'Luca',
      surname: 'Bianchi',
      jobTitle: 'city expert',
      img: 'https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-6.jpg',
    },
    {
      name: 'Marta',
      surname: 'Rossi',
      jobTitle: 'researcher',
      img: 'https://preview.redd.it/oh309qc0sp981.jpg?auto=webp&s=232e87535b77746ae8b97a33c8511cd44343cf45',
    },
  ]
  await models.TeamMember.bulkCreate(membersList)
}
