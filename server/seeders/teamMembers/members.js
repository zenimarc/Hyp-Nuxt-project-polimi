export default async (models) => {
  //  Team members
  const membersList = [
    {
      name: 'Giorgio',
      surname: 'Verdi',
      jobTitle: 'Head of office',
      img: 'https://i.pinimg.com/originals/3d/fa/72/3dfa721da08c2977a0fe583bea20d7d4.jpg',
    },
    {
      name: 'Luca',
      surname: 'Bianchi',
      jobTitle: 'Programmer',
      img: 'https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-6.jpg',
    },
    {
      name: 'Marta',
      surname: 'Rossi',
      jobTitle: 'Researcher',
      img: 'https://preview.redd.it/oh309qc0sp981.jpg?auto=webp&s=232e87535b77746ae8b97a33c8511cd44343cf45',
    },
  ]
  const member = {}
  for (let i = 0; i < membersList.length; i++)
    member[i] = await models.TeamMember.create(membersList[i])

  const socialsList = [
    {
      url: 'https://www.instagram.com/giorgioverdi12345/',
      name: 'instagram',
      teamMemberId: member[0].id,
    },
    {
      url: 'https://www.instagram.com/lucabianchi12345/',
      name: 'instagram',
      teamMemberId: member[1].id,
    },
    {
      url: 'https://www.instagram.com/martarossi123456/',
      name: 'instagram',
      teamMemberId: member[2].id,
    },
    {
      url: 'https://www.linkedin.com/in/giorgio-verdi-399285240/',
      name: 'linkedin',
      teamMemberId: member[0].id,
    },

    {
      url: 'https://www.linkedin.com/in/luca-bianchi-775282240/',
      name: 'linkedin',
      teamMemberId: member[1].id,
    },
    {
      url: 'https://it.linkedin.com/in/marta-rossi-a312a5113/en?trk=people-guest_people_search-card',
      name: 'linkedin',
      teamMemberId: member[2].id,
    },
    {
      url: 'https://twitter.com/GiorgioVerdi18',
      name: 'twitter',
      teamMemberId: member[0].id,
    },

    {
      url: 'https://twitter.com/LucaBia37068015',
      name: 'twitter',
      teamMemberId: member[1].id,
    },
    {
      url: 'https://twitter.com/MartaRo61080547',
      name: 'twitter',
      teamMemberId: member[2].id,
    },
  ]
  await models.Social.bulkCreate(socialsList)
}
