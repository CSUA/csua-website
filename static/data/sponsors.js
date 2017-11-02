class Sponsor {
  constructor(name, href, type, img, current) {
    this.name = name;
    this.href = href;
    this.type = type;
    this.img = img;
    this.current = current;
  }
}

export default sponsors;
export {sponsors, pastSponsors};
