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
      surname: 'Rossi',
      jobTitle: 'city expert',
      img: 'https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-6.jpg',
    },
    {
      name: 'Franca',
      surname: 'Garzotto',
      jobTitle: 'researcher',
      img: 'https://garzotto.faculty.polimi.it/images/download.jpeg',
    },
  ]
  await models.TeamMember.bulkCreate(membersList)
}
