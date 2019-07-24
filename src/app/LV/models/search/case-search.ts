

export class CaseSearch {

    public CaseID: Number; 
    public ExternalNo: String; 
    public Remark: String; 
    public Divison: String; 
    public District: String; 
    public Region: String; 
    public Prospect: String; 
    public SEC: String; 
    public TWPDIR: String; 
    public RNGDIR: String; 
    public Abstract: String; 
    public Block: String;
    public Survey: String; 
    public DOITransactionNumber: String; 
    public DOITransactionStatus: String; 
    public KeywordRef: String; 
    public BAUpdateComplete?: Boolean;
    public BAUpdateVerfified?: Boolean; 
    public StartRemarkDate?: Date; 
    public EndRemarkDate?: Date; 
    public StartLogDate?: Date; 
    public EndLogDate?: Date; 
    public StartDocDate?: Date; 
    public EndDocDate?: Date; 
    public StartStartDate?: Date;
    public EndStartDate?: Date;
    public StartEndDate?: Date; 
    public EndEndDate?: Date;
    public StartLastProdDate?: Date; 
    public EndLastProdDate?: Date;
    public RNG?: Number;
    public TWP?: Number; 
    public Agreements: Array<Number>;
    public Well: Array<Number>;
    public Case: Array<Number>;
    public BA: Array<String>;
    public Units: Array<String>;
    public Source: Array<String>;
    public CaseType: Array<String>;
    public CaseSubType: Array<String>;
    public ActionType: Array<String>;
    public Responses: Array<String>;
    public DocType: Array<String>;
    public CaseStatus: Array<String>;
    public CasePriority: Array<String>;
    public BANumberName: Array<String>;
    public AssignedBy: Array<String>;
    public DelegatedTo: Array<String>;
    public RemarkUser: Array<String>;
    public State: Array<String>;
    public County: Array<String>;
    public Sort: String;
    public SortOrder: String; 
    public PageSize: Number;
    public Skip: Number; 
    public Take: Number; 
    public Limited: Boolean;
    public UserID: String; 

}
