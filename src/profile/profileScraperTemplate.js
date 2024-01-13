const profileSelector = '.core-rail > *:first-child section >'

const template = {
  profile: {
    selector: '.artdeco-card',
    fields: {
      name: `.text-heading-xlarge`,
      headline: `.text-body-medium`,
      location: `.pb2 .text-body-small`,
      connections: `li.text-body-small`,
      imageurl: {
		    selector: `img.pv-top-card__photo`,
        attribute: 'src'
      }
    }
  },
  about: {
    selector: '#about ~ .ph5.pv3',
    fields: {
      text: 'span.visually-hidden'
    }
  },
  positions: {
    selector: '#experience ~ .pvs-list__outer-container > ul.pvs-list > li',
    fields: {
      title: '.mr1 span',
      link: {
        selector: 'a',
        attribute: 'href',
      },
      url: {
        selector: 'a',
        attribute: 'href'
      },
      companyName: 'div:nth-child(2) div div:nth-child(1) .t-14 span',
      location: 'div:nth-child(2) div div:nth-child(1) span:nth-child(4) span',
      description: '.pvs-list__outer-container li',
      date1: 'div:nth-child(2) div div:nth-child(1) span:nth-child(3) span',
      date2: '.not-selectable',
      roles: {
        selector: 'li',
        hasChildrenFields: true,
        fields: {
          title: 'h3',
          description: '.pv-entity__description',
          date1: '.pv-entity__date-range span:last-child',
          date2: '.pv-entity__bullet-item-v2',
          location: '.pv-entity__location span:last-child'
        }
      }
    }
  },
  educations: {
    selector: '#education ~ .pvs-list__outer-container > ul.pvs-list > li',
    fields: {
      title: 'div:nth-child(2) div a div span span',
      degree: 'div:nth-child(2) div a > span:nth-child(2) span',
      url: {
        selector: 'a',
        attribute: 'href'
      },
	    fieldOfStudy: 'p.pv-entity__fos span:nth-child(2)',
      date1: '.div:nth-child(2) div a > span:nth-child(3) span',
      date2: '.not-selectable',
      description: '.pv-entity__description'
    }
  },
  skills: {
    selector: '#skills ~ .pvs-list__outer-container > ul.pvs-list > li',
    fields: {
      title: '.mr1 span',
      count: '.not-selectable'
    }
  },
  recommendationsCount: {
    selector: '.recommendations-inlining',
    fields: {
      received: '.artdeco-tab:nth-child(1)',
      given: '.artdeco-tab:nth-child(2)'
    }
  },
  recommendationsReceived: {
    selector: '.recommendations-inlining',
    fields: {
      user: {
        selector: '.pv-recommendation-entity__member',
        attribute: 'href'
      },
      text: 'blockquote.pv-recommendation-entity__text',
      profileImage: {
        selector: 'a img',
        attribute: 'src'
      },
      name: {
        selector: 'a h3'
      },
      userDescription: {
        selector: '.pv-recommendation-entity__headline'
      }
    }
  },
  recommendationsGiven: {
    selector: '.artdeco-tabpanel li.pv-recommendation-entity',
    fields: {
      user: {
        selector: '.pv-recommendation-entity__member',
        attribute: 'href'
      },
      text: 'blockquote.pv-recommendation-entity__text',
      profileImage: {
        selector: 'a img',
        attribute: 'src'
      },
      name: {
        selector: 'a h3'
      },
      userDescription: {
        selector: '.pv-recommendation-entity__headline'
      }
    }
  },
  accomplishments: {
    selector: '.pv-accomplishments-section > div',
    fields: {
      count: 'h3 span:last-child',
      title: '.pv-accomplishments-block__title',
      items: {
        selector: 'li',
        isMultipleFields: true
      }
    }
  },
  peopleAlsoViewed: {
    selector: 'li.pv-browsemap-section__member-container',
    fields: {
      user: {
        selector: 'a',
        attribute: 'href'
      },
      text: 'p',
      profileImage: {
        selector: 'a img',
        attribute: 'src'
      },
      name: {
        selector: '.name'
      }
    }
  },
  volunteerExperience: {
    selector: 'section.volunteering-section li',
    fields: {
      title: 'h3',
      experience: 'span[class=pv-entity__secondary-title]',
      location: '.pv-entity__location span:nth-child(2)',
      description: '.pv-volunteer-causes',
      date1: '.pv-entity__date-range span:nth-child(2)',
      date2: '.pv-entity__bullet-item'
    }
  },
  courses: {
    selector: '.pv-accomplishments-section',
    fields: {
      name: '.pv-accomplishment-entity__title',
      year: '.pv-accomplishment-entity__course-number'
    }
  },
  languages: {
    selector: '.pv-accomplishments-section',
    fields: {
      name: '.pv-accomplishment-entity__title',
      proficiency: '.pv-accomplishment-entity__proficiency',
    }
  },
  projects: {
    selector: '.pv-accomplishments-section',
    fields: {
      name: '.pv-accomplishment-entity__title',
      date: '.pv-accomplishment-entity__date',
      description: '.pv-accomplishment-entity__description',
      link: {
        selector: '.pv-accomplishment-entity__external-source',
        attribute: 'href'
      }
    }
  }
}


module.exports = template
