const Products = [
  {
    id: 1,
    title: 'API Product #1',
    subtitle: 'Detail description of product',
    author: 'Jon Doe',
    img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    label: 'Label 1',
    date_of_publish: 'Date 1',
    country: 'Country name 1',
    format: 'Format 1',
    style: 'Style 1',
    description:
      'Whatever description.... Whatever description.... Whatever description.... Whatever description.... Whatever description.... Whatever description.... vWhatever description.... Whatever description.... Whatever description.... Whatever description.... v Whatever description....Whatever description....Whatever description....Whatever description....Whatever description....Whatever description....vvvWhatever description....Whatever description....vvvvWhatever description....',
    price: '10$'
  },
  {
    id: 2,
    title: 'API Product #2',
    subtitle: 'Detail description of product',
    author: 'Jon Doe',
    img: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8bXVzaWN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    label: 'Label 2',
    date_of_publish: 'Date 2',
    country: 'Country name 2',
    format: 'Format 2',
    style: 'Style 2',
    description:
      'Whatever description.... Whatever description.... Whatever description.... Whatever description.... Whatever description.... Whatever description.... vWhatever description.... Whatever description.... Whatever description.... Whatever description.... v Whatever description....Whatever description....Whatever description....Whatever description....Whatever description....Whatever description....vvvWhatever description....Whatever description....vvvvWhatever description....',
    price: '20$'
  },
  {
    id: 3,
    title: 'API Product #3',
    subtitle: 'Detail description of product',
    author: 'Jon Doe',
    img: 'https://images.unsplash.com/photo-1458560871784-56d23406c091?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8bXVzaWN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    label: 'Label 3',
    date_of_publish: 'Date 3',
    country: 'Country name 3',
    format: 'Format 3',
    style: 'Style 3',
    description:
      'Whatever description.... Whatever description.... Whatever description.... Whatever description.... Whatever description.... Whatever description.... vWhatever description.... Whatever description.... Whatever description.... Whatever description.... v Whatever description....Whatever description....Whatever description....Whatever description....Whatever description....Whatever description....vvvWhatever description....Whatever description....vvvvWhatever description....',
    price: '30$'
  },
  {
    id: 4,
    title: 'API Product #4',
    subtitle: 'Detail description of product',
    author: 'Jon Doe',
    img: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG11c2ljfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    label: 'Label 4',
    date_of_publish: 'Date 4',
    country: 'Country name 4',
    format: 'Format 4',
    style: 'Style 4',
    description:
      'Whatever description.... Whatever description.... Whatever description.... Whatever description.... Whatever description.... Whatever description.... vWhatever description.... Whatever description.... Whatever description.... Whatever description.... v Whatever description....Whatever description....Whatever description....Whatever description....Whatever description....Whatever description....vvvWhatever description....Whatever description....vvvvWhatever description....',
    price: '40$'
  },
  {
    id: 5,
    title: 'API Product #5',
    subtitle: 'Detail description of product',
    author: 'Jon Doe',
    img: 'https://images.unsplash.com/photo-1522574970870-277fba960e0d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWMlMjBhbGJ1bXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    label: 'Label 5',
    date_of_publish: 'Date 5',
    country: 'Country name 5',
    format: 'Format 5',
    style: 'Style 5',
    description:
      'Whatever description.... Whatever description.... Whatever description.... Whatever description.... Whatever description.... Whatever description.... vWhatever description.... Whatever description.... Whatever description.... Whatever description.... v Whatever description....Whatever description....Whatever description....Whatever description....Whatever description....Whatever description....vvvWhatever description....Whatever description....vvvvWhatever description....',
    price: '50$'
  },
  {
    id: 6,
    title: 'API Product #6',
    subtitle: 'Detail description of product',
    author: 'Jon Doe',
    img: 'https://images.unsplash.com/photo-1483000805330-4eaf0a0d82da?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8bXVzaWN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    label: 'Label 6',
    date_of_publish: 'Date 6',
    country: 'Country name 6',
    format: 'Format 6',
    style: 'Style 6',
    description:
      'Whatever description.... Whatever description.... Whatever description.... Whatever description.... Whatever description.... Whatever description.... vWhatever description.... Whatever description.... Whatever description.... Whatever description.... v Whatever description....Whatever description....Whatever description....Whatever description....Whatever description....Whatever description....vvvWhatever description....Whatever description....vvvvWhatever description....',
    price: '60$'
  },
  {
    id: 7,
    title: 'API Product #7',
    subtitle: 'Detail description of product',
    author: 'Jon Doe',
    img: 'https://images.unsplash.com/photo-1605286111295-c17ad8fbeee3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8bXVzaWMlMjBhbGJ1bXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    label: 'Label 7',
    date_of_publish: 'Date 7',
    country: 'Country name 7',
    format: 'Format 7',
    style: 'Style 7',
    description:
      'Whatever description.... Whatever description.... Whatever description.... Whatever description.... Whatever description.... Whatever description.... vWhatever description.... Whatever description.... Whatever description.... Whatever description.... v Whatever description....Whatever description....Whatever description....Whatever description....Whatever description....Whatever description....vvvWhatever description....Whatever description....vvvvWhatever description....',
    price: '70$'
  },
  {
    id: 8,
    title: 'API Product #8',
    subtitle: 'Detail description of product',
    author: 'Jon Doe',
    img: 'https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzZ8fG11c2ljJTIwYWxidW18ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    label: 'Label 8',
    date_of_publish: 'Date 8',
    country: 'Country name 8',
    format: 'Format 8',
    style: 'Style 8',
    description:
      'Whatever description.... Whatever description.... Whatever description.... Whatever description.... Whatever description.... Whatever description.... vWhatever description.... Whatever description.... Whatever description.... Whatever description.... v Whatever description....Whatever description....Whatever description....Whatever description....Whatever description....Whatever description....vvvWhatever description....Whatever description....vvvvWhatever description....',
    price: '80$'
  },
  {
    id: 9,
    title: 'API Product #9',
    subtitle: 'Detail description of product',
    author: 'Jon Doe',
    img: 'https://images.unsplash.com/photo-1542728143-d9b537db6433?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTN8fG11c2ljJTIwYWxidW18ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    label: 'Label 9',
    date_of_publish: 'Date 9',
    country: 'Country name 9',
    format: 'Format 9',
    style: 'Style 9',
    description:
      'Whatever description.... Whatever description.... Whatever description.... Whatever description.... Whatever description.... Whatever description.... vWhatever description.... Whatever description.... Whatever description.... Whatever description.... v Whatever description....Whatever description....Whatever description....Whatever description....Whatever description....Whatever description....vvvWhatever description....Whatever description....vvvvWhatever description....',
    price: '90$'
  },
  {
    id: 10,
    title: 'API Product #10',
    subtitle: 'Detail description of product',
    author: 'Jon Doe',
    img: 'https://images.unsplash.com/photo-1590571228517-f17243ae4139?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjBzdHVkaW98ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    label: 'Label 10',
    date_of_publish: 'Date 10',
    country: 'Country name 10',
    format: 'Format 10',
    style: 'Style 10',
    description:
      'Whatever description.... Whatever description.... Whatever description.... Whatever description.... Whatever description.... Whatever description.... vWhatever description.... Whatever description.... Whatever description.... Whatever description.... v Whatever description....Whatever description....Whatever description....Whatever description....Whatever description....Whatever description....vvvWhatever description....Whatever description....vvvvWhatever description....',
    price: '100$'
  },
  {
    id: 11,
    title: 'API Product #11',
    subtitle: 'Detail description of product',
    author: 'Jon Doe',
    img: 'https://images.unsplash.com/photo-1535406208535-1429839cfd13?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWMlMjBzdHVkaW98ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    label: 'Label 11',
    date_of_publish: 'Date 11',
    country: 'Country name 11',
    format: 'Format 11',
    style: 'Style 11',
    description:
      'Whatever description.... Whatever description.... Whatever description.... Whatever description.... Whatever description.... Whatever description.... vWhatever description.... Whatever description.... Whatever description.... Whatever description.... v Whatever description....Whatever description....Whatever description....Whatever description....Whatever description....Whatever description....vvvWhatever description....Whatever description....vvvvWhatever description....',
    price: '110$'
  }
];

export default Products;
