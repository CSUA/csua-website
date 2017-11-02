class PolitburoMember {
  constructor(position, title, description, pitch) {
    this.position = position;
    this.title = title;
    this.description = description;
    this.pitch = pitch;
  }
}

let pb = [
  new PolitburoMember(
    'president',
    'President',
    'The President leads meetings and represents the CSUA in its duties as the\
      undergraduate computer science students\' representative body. The President\
      liaisons with the University, faculty, staff, and other student organizations.',
    'Please contact [name] for general questions or concerns about the CSUA.'
  ),
  new PolitburoMember(
    'vp',
    'Vice President of Technology',
    'The VP of Technology administers and maintains the technical\
      resources of the CSUA, such as the computer equipment,\
      servers, and list-serves. The VP is also the head of our\
      root staff and a liaison with all campus IT and technical\
      services. The VP solves or delegates the solving of any\
      technical issues.',
    'If you have any questions about your account or the CSUA\
      servers or software, please contact [name].'
  ),
  new PolitburoMember(
    'indrel',
    'Vice President of Industry Relations',
    'The VP of Industry Relations is the CSUA liaison with\
      companies and alumni. The VP attains sponsors for external\
      events and generates industry interest in the CSUA. The\
      VP also coordinates speakers for events, manages info\
      sessions and the job list-serve, and assists the President.',
    'Please contact [name] for any questions regarding events,\
      info sessions, speaking events, or sponsorships. Thank you\
      for your support and interest in the CSUA.'
  ),
  new PolitburoMember(
    'treasurer',
    'Secretary/Treasurer',
    'The Secretary/Treasurer takes minutes at meetings, maintains\
      the CSUA\'s monetary and physical resources (office, study\
      lounge, library, etc.), and keeps all financial and non-\
      financial records. The Secretary/Treasurer is also the\
      liaison with any University funding programs or facility\
      maintenance and the primary signatory power with the ASUC.',
    'Please contact [name] for questions about the CSUA\'s budget,\
      resources, or records.'
  ),
  new PolitburoMember(
    'externalevents',
    'External Events Coordinator',
    'The External Events Coordinator plans all external CSUA\
      events. An external event is defined as an event sponsored\
      by a company. The External Events Coordinator works closely\
      with the VP of Industrial Relations and the Internal Events\
      Coordinator.',
    'Please contact [name] for any questions regarding upcoming\
      external events or with offers for potential future events.'
  ),
  new PolitburoMember(
    'internalevents',
    'Internal Events Coordinator',
    'The Internal Events Coordinator plans all internal CSUA\
      events. An internal event is defined as an event that does\
      not have a company sponsor. This includes general meetings,\
      intersocial events, and alumni events. The Internal Events\
      Coordinator works closely with the External Events Coordinator.',
    'Please direct internal events questions to [name].'
  ),
  new PolitburoMember(
    'outreach',
    'Outreach',
    'The Outreach chair maintains or delegates the maintenance\
      of the website and various social media accounts. The\
      Outreach chair also publicizes all CSUA events to the\
      student body, promotes interaction between current students\
      and alumni, and welcomes new members.',
    'If you are a student interested in joining the CSUA,\
      feel free to reach out to [name].'
  )
];

export default pb;
export {pb};
