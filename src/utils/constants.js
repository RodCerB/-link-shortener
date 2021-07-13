import logoFace from '../assets/logoFace.svg'
import logoInsta from '../assets/logoInsta.svg'
import logoPint from '../assets/logoPinterest.svg'
import logoTwt from '../assets/logoTwitter.svg'

export const links = [
    {
      section: 'Features',
      topics: [
          {name:'Link Shortening',
          url:'/'},
          {name:'Branded Links',
          url:'/'},
          {name:'Analytics',
          url:'/'},
        ]
    },
    {
      section: 'Resources',
      topics: [
          {name:'Blog',
          url:'/'},
          {name:'Developers',
          url:'/'},
          {name:'Support',
          url:'/'},
        ]
    },
    {
      section: 'Company',
      topics: [
          {name:'About',
          url:'/'},
          {name:'Our Team',
          url:'/'},
          {name:'Careers',
          url:'/'},
          {name:'Contact',
          url:'/'},
        ]
    },
  ]
  
  export const socials = [
    {
        icon: logoFace,
        url: 'https://www.facebook.com/'
    },
    {
        icon: logoTwt,
        url: 'https://twitter.com/'
    },
    {
        icon: logoPint,
        url: 'https://br.pinterest.com/'
    },
    {
        icon: logoInsta,
        url: 'https://www.instagram.com/'
    },

  ]