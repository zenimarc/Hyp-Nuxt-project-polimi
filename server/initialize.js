export default async (models) => {
  const locationList = [
    {
      name: 'Cat Paradise',
      city: 'Milan',
    },
    {
      name: 'Cat City',
      city: 'Rome',
    },
  ]
  const location0 = await models.Location.create(locationList[0])
  const location1 = await models.Location.create(locationList[1])
  const catList = [
    {
      name: 'Cat 1',
      breed: 'Siberian',
      description: 'Details about cat 1',
      img: 'https://fs.i3lab.group/hypermedia/cats/siberian.jpg',
      locationId: location0.id,
    },
    {
      name: 'Cat 2',
      breed: 'Birman',
      description: 'Details about cat 2',
      img: 'https://fs.i3lab.group/hypermedia/cats/birman.jpg',
      locationId: location0.id,
    },
    {
      name: 'Cat 3',
      breed: 'Bombay',
      description: 'Details about cat 3',
      img: 'https://fs.i3lab.group/hypermedia/cats/bombay.jpg',
      locationId: location0.id,
    },
    {
      name: 'Cat 4',
      breed: 'Calico',
      description: 'Details about cat 4',
      img: 'https://fs.i3lab.group/hypermedia/cats/calico.jpg',
      locationId: location1.id,
    },
    {
      name: 'Cat 5',
      breed: 'Maine Coon',
      description: 'Details about cat 5',
      img: 'https://fs.i3lab.group/hypermedia/cats/maine-coon.jpg',
      locationId: location1.id,
    },
  ]
  await models.Cat.bulkCreate(catList)

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
