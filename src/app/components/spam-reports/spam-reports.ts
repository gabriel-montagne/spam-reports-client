
export interface ISpamReport {
  id: number;
  source: string;
  sourceIdentityId: string;
  reference: Reference;
  state: string;
  payload: Payload;
  created: Date;
}

export class Reference {
  public referenceId: string;
  public referenceType: string;

  constructor(elem: any) {
    this.referenceId = elem.referenceId;
    this.referenceType = elem.referenceType;
  }
}

export class Payload {
  public id: number;
  public source: string;
  public reportId: string;
  public reportType: string;
  public message: string;
  public referenceResourceId: string;
  public referenceResourceType: string;

  constructor(elem: any) {
    this.id = elem.id;
    this.source = elem.source;
    this.reportId = elem.reportId;
    this.reportType = elem.reportType;
    this.message = elem.message;
    this.referenceResourceId = elem.referenceResourceId;
    this.referenceResourceType = elem.referenceResourceType;
  }
}

export class SpamReports implements ISpamReport {
  public id: number;
  public source: string;
  public sourceIdentityId: string;
  public reference: Reference;
  public state: string;
  public payload: Payload;
  public created: Date;

  constructor(elem: any) {
    this.id = elem.id;
    this.source = elem.source;
    this.sourceIdentityId = elem.sourceIdentityId;
    this.reference = new Reference(elem.reference);
    this.state = elem.state;
    this.payload = new Payload(elem.payload);
    this.created = elem.created;
  }
}
