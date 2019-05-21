export const state = () => ({
  projects: [
    {
      title: 'MAAT. Creative',
      image: '/images/maat-creative/screenshot_1.png',
      description: '<p>In march 2018, the startup Katalysis approached me with the question if I was available to develop the front-end of their website.</p><p>The design was made by Padraig Mckee. It was a quick little project to get their startup ready to inform and attract clients via the web.</p>',
      summary: {
        content: '<p>Katalysis is a start-up company based in Amsterdam. Katalysis was founded by Alex Tran Qui and Eveline Klumpers. Alex and Eveline bring together a broad set of disciplines and backgrounds: tech, ﬁnance and entrepreneurship.</p><p>Katalysis develops software based on smart contract blockchain technology aimed to help the publishing industry with the transition from off- to online. Katalysis’ product, Katalysis DecPub (Katalysis Decentralized Publishing), is the first blockchain based implementation used in the publishing industry in the Netherlands.</p>',
        image: '/images/maat-creative/screenshot_1.png',
      }
    },
    {
      title: 'Rainforest Alliance',
      image: '/images/rainforest-alliance/screenshot_1.png',
      description: '<p>In march 2018, the startup Katalysis approached me with the question if I was available to develop the front-end of their website.</p><p>The design was made by Padraig Mckee. It was a quick little project to get their startup ready to inform and attract clients via the web.</p>',
      summary: {
        content: '<p>Katalysis is a start-up company based in Amsterdam. Katalysis was founded by Alex Tran Qui and Eveline Klumpers. Alex and Eveline bring together a broad set of disciplines and backgrounds: tech, ﬁnance and entrepreneurship.</p><p>Katalysis develops software based on smart contract blockchain technology aimed to help the publishing industry with the transition from off- to online. Katalysis’ product, Katalysis DecPub (Katalysis Decentralized Publishing), is the first blockchain based implementation used in the publishing industry in the Netherlands.</p>',
        image: '/images/rainforest-alliance/screenshot_2.png',
      }
    },
    {
      title: 'Jiskefet (CERN)',
      image: '/images/jiskefet/design_screenshot_2.png',
      description: '<p>In march 2018, the startup Katalysis approached me with the question if I was available to develop the front-end of their website.</p><p>The design was made by Padraig Mckee. It was a quick little project to get their startup ready to inform and attract clients via the web.</p>',
      summary: {
        content: '<p>Katalysis is a start-up company based in Amsterdam. Katalysis was founded by Alex Tran Qui and Eveline Klumpers. Alex and Eveline bring together a broad set of disciplines and backgrounds: tech, ﬁnance and entrepreneurship.</p><p>Katalysis develops software based on smart contract blockchain technology aimed to help the publishing industry with the transition from off- to online. Katalysis’ product, Katalysis DecPub (Katalysis Decentralized Publishing), is the first blockchain based implementation used in the publishing industry in the Netherlands.</p>',
        image: '/images/jiskefet/design_screenshot_3.png',
        class: 'mouse-dark'
      }
    },
    {
      title: 'Katalysis.io',
      image: '/images/katalysis/screenshot_1.svg',
      description: '<p>In march 2018, the startup Katalysis approached me with the question if I was available to develop the front-end of their website.</p><p>The design was made by Padraig Mckee. It was a quick little project to get their startup ready to inform and attract clients via the web.</p>',
      summary: {
        content: '<p>Katalysis is a start-up company based in Amsterdam. Katalysis was founded by Alex Tran Qui and Eveline Klumpers. Alex and Eveline bring together a broad set of disciplines and backgrounds: tech, ﬁnance and entrepreneurship.</p><p>Katalysis develops software based on smart contract blockchain technology aimed to help the publishing industry with the transition from off- to online. Katalysis’ product, Katalysis DecPub (Katalysis Decentralized Publishing), is the first blockchain based implementation used in the publishing industry in the Netherlands.</p>',
        image: '/images/katalysis/screenshot_2.png',
        class: 'mouse-dark'
      }
    }
  ]
})

export const mutations = {
  mouseMove (state, {x, y}) {
    state.mouse.x = x
    state.mouse.y = y
    console.log('updated store');
  },
  setProjects(state, payload) {
    state.projects = payload
  }
}

export const getters = {
  getProjects(state) {
    return (slug) => {
      if (!slug) {
        return state.projects
      }
      return state.projects.find(project => {
        const sanitized = project.title.replace(/[^A-Za-z0-9\s]/g,'').toLowerCase()
        return sanitized.split(' ').join('-') === slug
      })
    }
  }
}
