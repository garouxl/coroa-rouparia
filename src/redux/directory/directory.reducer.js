const INITIAL_STATE = {
  sections: [
    {
      title: 'chapéus',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      size: 'normal',
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'jaquetas',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      size: 'normal',
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'tênis',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      size: 'normal',
      id: 3,
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'mulheres',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'homens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    }
  ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default directoryReducer
