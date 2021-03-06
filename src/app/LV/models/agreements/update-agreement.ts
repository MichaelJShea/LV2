export class UpdateAgreement {
    public AgreementNumber: String;
    public AltAgreementNumber: String;
    public AgreementName: String;
    public ShortDesc: String;
    public FirstParty: String;
    public SecondParty: String;
    public AgreementClassCode: String;
    public AgreementTypeCode: String;
    public AgreementRightsTypeCode: String;
    public AgreementStatusCode: String;
    public AgreementForm: String;
    public AgreementGroupFormCode: String;
    public AgreementDate?: Date;
    public EffectiveDate?: Date;
    public Term?: Number;
    public TermUnit: Number;
    public ExpireDate_Calc?: Date;
    public ExtendedExpDate?: Date;
    public DropReasonCode: String;
    public DropDate?: Date;
    public AssnReceivedDate?: Date;
    public AssnReceivedComment: String;
    public AssnDeliveredDate?: Date;
    public AssnDeliveredComment: String;
    public SourceDeedDate?: Date;
    public LAGSignedDate?: Date;
    public DueDiligenceDate?: Date;
    public ActualCloseDate?: Date;
    public AgreementLegal: String;
    public GrossAcres_Calc?: Number;
    public ReportedGrossAcres_Calc?: Number;
    public NetAcres_Calc?: Number;
    public GroupAcres_Calc?: Number;
    public CompanyAcres_Calc?: Number;
    public CompanyNRIAcres_Calc?: Number;
    public AcquisitionCost_Calc: Number;
    public ProvisionSummary_Calc: Number;
    public NextObligationDate?: Date;
    public AgreementXrefCount?: Number;
    public WellXrefCount?: Number;
    public LandMan: string;
    public TeamID?: Number;
    public Lead?: Boolean;
    public LeadSubStageCode: string;
    public Owned?: Boolean;
    public CreatedDate?: Date;
    public CreatedBy: string;
    public ModifiedDate?: Date;
    public ModifiedBy: String;
    public SrcDesc: String;
}
