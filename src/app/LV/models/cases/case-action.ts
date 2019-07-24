export class CaseAction {
    
    public CaseActionID: Number; 
    public CaseID: Number; 
    public CaseActionTypeCode: String; 
    public CaseResponseTypeCode: String; 
    public Remark: String; 
    public AssignedBy: String; 
    public DelegatedTo: String; 
    public Approved?: Boolean;
    public ApprovedBy: String; 
    public ApprovedDate?: Date; 
    public ActionDate?: Date; 
    public LeaseID?: Number; 
    public TractID?: Number; 
    public LeaseProvisionID?: Number; 
    public AgreementProvisionTypeCode: String; 
    public Amount?: Number; 
    public BAAddApproved?: Boolean;
    public BAEditCompleted?: Boolean;
    public BAAddEditVerified?: Boolean;
    public Changed?: Boolean;
    public New?: Boolean;
    public Active?: Boolean;
    public CreatedDate?: Date; 
    public CreatedBy: String; 
    public ModifiedDate?: Date; 
    public ModifiedBy: String; 
    public SrcDesc: String;

}
