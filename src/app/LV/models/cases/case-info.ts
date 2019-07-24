// Import Well and Case Models for List Types

export class CaseInfo {
    public CaseID: Number; 
    public CaseType: String; 
    public CaseActiontype: String; 
    public AssignedBy: String; 
    public WellNames: Object;
    public WellList: [any];
    public DocumentDueDate?: Date; 
    public BAName: String; 
    public LogDate?: Date; 
    public DocumentDate?: Date; 
    public CasePriorityCode: String; 
    public CaseActions: [any];
    public CaseApproved?: Boolean;
    public Delegates?: Number; 
    public Recommendations?: Number;
    public Approved?: Number; 
}
