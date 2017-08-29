class Resource {
  constructor(name, location, href) {
    this.name = name;
    this.location = location;
    this.href = href;
  }
}

class ResourceGroup {
  constructor(name, resources) {
    this.name = name;
    this.resources = resources;
  }
}

let resourceGroups = [
  new ResourceGroup(
    'L&S CS Advisors',
    [
      new Resource(
        'Lily Zhang',
        '379 Soda',
        'https://lilyzhang.youcanbook.me/'
      ),
      new Resource(
        'Charlene Hughes',
        '203 Cory',
        'https://cdhughes.youcanbook.me/'
      ),
      new Resource(
        'Emerald Templeton',
        '377 Soda',
        'https://emeraldtempleton.youcanbook.me'
      )
    ]
  ),
  new ResourceGroup(
    'EECS Advisors',
    [
      new Resource(
        'Lydia Raya',
        '205 Cory',
        'https://lydiaraya.youcanbook.me/'
      ),
      new Resource(
        'Nicole McIntyre',
        '205 Cory',
        'https://nicolemcintyre.youcanbook.me/'
      )
    ]
  )
];

export default resourceGroups;
export {resourceGroups};
